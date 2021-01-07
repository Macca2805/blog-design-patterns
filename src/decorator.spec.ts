import { Espresso, HouseBlend, Mocha, Soy, SteamedMilk, Whip } from './decorator';

describe(`decorator`, () => {
  it(``, () => {
    const beverage = new Whip(new Soy(new Mocha(new Mocha(new HouseBlend()))));
    expect(beverage.description).toEqual(`House Blend Coffee, Mocha, Mocha, Soy, Whip`);
    expect(beverage.cost()).toEqual(1.54);
  });

  it(``, () => {
    const beverage = new SteamedMilk(new Espresso());
    expect(beverage.description).toEqual(`Espresso, Steamed Milk`);
    expect(beverage.cost()).toEqual(2.09);
  });
});
