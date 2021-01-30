import { Espresso, HouseBlend, Mocha, Soy, SteamedMilk, Whip } from './decorator';

describe(`decorator`, () => {
  it(`when order a double mocha soy with whip > then return expected description and cost`, () => {
    const beverage = new Whip(new Soy(new Mocha(new Mocha(new HouseBlend()))));
    expect(beverage.description).toEqual(`House Blend Coffee, Mocha, Mocha, Soy, Whip`);
    expect(beverage.cost()).toEqual(1.54);
  });

  it(`when order a espresso with steamed milk > then return expected description and cost`, () => {
    const beverage = new SteamedMilk(new Espresso());
    expect(beverage.description).toEqual(`Espresso, Steamed Milk`);
    expect(beverage.cost()).toEqual(2.09);
  });
});
