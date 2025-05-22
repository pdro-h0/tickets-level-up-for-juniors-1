import { Database } from "../database";
import { PartnerModel } from "../models/partners-model";
import { UserModel } from "../models/user-model";

export class PartnerService {
  async register(data: {
    name: string;
    email: string;
    password: string;
    company_name: string;
  }) {
    const { company_name, email, name, password } = data;

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

      const partner = await PartnerModel.create(
        {
          company_name,
          user_id: user.id,
        },
        { connection }
      );

      await connection.commit();

      return {
        id: partner.id,
        name,
        user_id: user.id,
        company_name,
        created_at: partner.created_at,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      await connection.release();
    }
  }

  async findByUserId(userId: number) {
    return PartnerModel.findByUserId(userId);
  }
}
