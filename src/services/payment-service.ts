export class PaymentService {
  async processPayment(
    customer: {
      name: string;
      email: string;
      address: string;
      phone: string;
    },
    amount: number,
    cardToken: string
  ): Promise<number> {
    // Payment processing logic
    return Math.random();
  }
}
