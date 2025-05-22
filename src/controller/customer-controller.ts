import { Router } from "express";
import { CustomersService } from "../services/customer-service";

export const customersRoutes = Router();

customersRoutes.post("/register", async (req, res) => {
  const { name, email, password, address, phone } = req.body;

  const customersService = new CustomersService();

  const result = await customersService.register({
    address,
    email,
    name,
    password,
    phone,
  });

  res.status(201).json(result);
});
