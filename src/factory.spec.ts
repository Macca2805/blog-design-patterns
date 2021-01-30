import { factory } from './factory';

describe(`factory`, () => {
  it(`given paypal > when purchase > should return paypal message`, () => {
    const service = factory(`paypal`);
    expect(service(`macklin@outlook.com`, 5)).toEqual(`Created $5.00 Paypal purchase for user macklin@outlook.com`);
  });

  it(`given stripe > when purchase > should return stripe message`, () => {
    const service = factory(`stripe`);
    expect(service(`macklin@outlook.com`, 10)).toEqual(`Created $10.00 Stripe purchase for user macklin@outlook.com`);
  });
});
