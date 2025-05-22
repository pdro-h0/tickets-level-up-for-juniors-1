import { Database } from "../database";
import { CustomerModel } from "../models/customer-model";
import { UserModel } from "../models/user-model";

export class CustomersService {
  async register(data: {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }) {
    const { address, email, name, password, phone } = data;

    const connection = await Database.getInstance().getConnection();

    try {
      await connection.beginTransaction();

      const user = await UserModel.create(
        {
          email,
          name,
          password,
        },
        { connection }
      );

      const customer = await CustomerModel.create(
        {
          user_id: user.id,
          address,
          phone,
        },
        { connection }
      );

      await connection.commit();

      return {
        id: customer.id,
        name,
        user_id: user.id,
        address,
        phone,
        created_at: customer.created_at,
      };
    } catch (error) {
      await connection.rollback();
      console.error(error);
      throw error;
    } finally {
      await connection.release();
    }
  }

  async findByUserId(userId: number): Promise<CustomerModel | null> {
    return CustomerModel.findByUserId(userId, { user: true });
  }
}
