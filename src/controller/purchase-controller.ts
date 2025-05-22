import { Request, Response, Router } from "express";
import { PurchaseService } from "../services/purchase-service";
import { CustomersService } from "../services/customer-service";
import { PaymentService } from "../services/payment-service";

export const purchaseRoutes = Router();

purchaseRoutes.post("/", async (req: Request, res: Response) => {
  const customersService = new CustomersService();
  const customer = await customersService.findByUserId(req.user!.id);

  if (!customer) {
    res.status(400).json({ message: "User needs be a customer" });
    return;
  }

  const { ticket_ids, card_token } = req.body;

  const paymentService = new PaymentService();
  const purchaseService = new PurchaseService(paymentService);
  const newPurchaseId = await purchaseService.create({
    customerId: customer.id,
    ticketIds: ticket_ids,
    cardToken: card_token,
  });

  const purchase = await purchaseService.findById(newPurchaseId);

  res.status(201).json(purchase);
});
