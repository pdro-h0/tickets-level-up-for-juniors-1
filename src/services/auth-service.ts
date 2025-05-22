import { compareSync } from "bcrypt";
import { UserModel } from "../models/user-model";
import jwt from "jsonwebtoken";

export class AuthService {
  async login(email: string, password: string) {
    const userModel = await UserModel.findByEmail(email);

    if (userModel && compareSync(password, userModel.password)) {
      return jwt.sign({ id: userModel.id, email: userModel.email }, "123456", {
        expiresIn: "1h",
      });
    } else {
      throw new InvalidCredentials();
    }
  }
}

export class InvalidCredentials extends Error {}
