export interface WeaponBehavior {
  useWeapon(): string;
}

export class KnifeBehaviour implements WeaponBehavior {
  useWeapon(): string {
    return `Stab!`;
  }
}

export class BowAndArrowBehaviour implements WeaponBehavior {
  useWeapon(): string {
    return `Swoosh!`;
  }
}

export class SwordBehaviour implements WeaponBehavior {
  useWeapon(): string {
    return `Swing!`;
  }
}

export class AxeBehaviour implements WeaponBehavior {
  useWeapon(): string {
    return `Chop!`;
  }
}

export abstract class Character {
  constructor(private weapon: WeaponBehavior) {}

  fight(): string {
    return this.weapon.useWeapon();
  }

  setWeapon(w: WeaponBehavior): void {
    this.weapon = w;
  }
}

export class King extends Character {
  constructor() {
    super(new KnifeBehaviour());
  }
}

export class Queen extends Character {
  constructor() {
    super(new BowAndArrowBehaviour());
  }
}

export class Knight extends Character {
  constructor() {
    super(new SwordBehaviour());
  }
}

export class Troll extends Character {
  constructor() {
    super(new AxeBehaviour());
  }
}
