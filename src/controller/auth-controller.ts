import { Router } from "express";
import { AuthService, InvalidCredentials } from "../services/auth-service";

export const authRoutes = Router();

authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const authService = new AuthService();

  try {
    const token = await authService.login(email, password);

    res.json({ token });
  } catch (error) {
    console.log(error);
    if (error instanceof InvalidCredentials) {
      res.status(401).json({ message: "Invalid Credentials" });
    }

    res.status(500).json({ message: "Something went wrong" });
  }
});
