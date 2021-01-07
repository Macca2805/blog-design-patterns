export interface Beverage {
  description: string;
  cost(): number;
}

export class Espresso implements Beverage {
  readonly description: string;

  constructor() {
    this.description = `Espresso`;
  }

  cost(): number {
    return 1.99;
  }
}

export class HouseBlend implements Beverage {
  readonly description: string;

  constructor() {
    this.description = `House Blend Coffee`;
  }

  cost(): number {
    return 0.89;
  }
}

export class DarkRoast implements Beverage {
  readonly description: string;

  constructor() {
    this.description = `Dark Roast`;
  }

  cost(): number {
    return 0.99;
  }
}

export class Decaf implements Beverage {
  readonly description: string;

  constructor() {
    this.description = `Decaf`;
  }

  cost(): number {
    return 1.05;
  }
}

export interface CondimentDecorator {
  description: string;
  cost(): number;
}

export class Mocha implements CondimentDecorator {
  readonly description: string;

  constructor(private readonly inner: Beverage) {
    this.description = `${inner.description}, Mocha`;
  }

  cost(): number {
    return this.inner.cost() + 0.2;
  }
}

export class SteamedMilk implements CondimentDecorator {
  readonly description: string;

  constructor(private readonly inner: Beverage) {
    this.description = `${inner.description}, Steamed Milk`;
  }

  cost(): number {
    return this.inner.cost() + 0.1;
  }
}

export class Soy implements CondimentDecorator {
  readonly description: string;

  constructor(private readonly inner: Beverage) {
    this.description = `${inner.description}, Soy`;
  }

  cost(): number {
    return this.inner.cost() + 0.15;
  }
}

export class Whip implements CondimentDecorator {
  readonly description: string;

  constructor(private readonly inner: Beverage) {
    this.description = `${inner.description}, Whip`;
  }

  cost(): number {
    return this.inner.cost() + 0.1;
  }
}
