export interface PurchaseService {
  (email: string, amount: number): string;
}

export const paypal: PurchaseService = (email: string, amount: number) =>
  `Created $${amount}.00 Paypal purchase for user ${email}`;

export const stripe: PurchaseService = (email: string, amount: number) =>
  `Created $${amount}.00 Stripe purchase for user ${email}`;

export interface PurchaseServiceFactory {
  (type: string): PurchaseService;
}

export const factory: PurchaseServiceFactory = type => (type === `paypal` ? paypal : stripe);
