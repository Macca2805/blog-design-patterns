import { King, Knight, Queen, SwordBehaviour, Troll } from './strategy';

describe(`strategy`, () => {
  it(`given king -> when use weapon -> should return knife behaviour`, () => {
    expect(new King().fight()).toEqual(`Stab!`);
  });

  it(`given queen -> when use weapon -> should return bow and arrow behaviour`, () => {
    expect(new Queen().fight()).toEqual(`Swoosh!`);
  });

  it(`given knight -> when use weapon -> should return sword behaviour`, () => {
    expect(new Knight().fight()).toEqual(`Swing!`);
  });

  it(`given troll -> when use weapon -> should return axe behaviour`, () => {
    expect(new Troll().fight()).toEqual(`Chop!`);
  });

  it(`given troll with sword -> when use weapon -> should return sword behaviour`, () => {
    const troll = new Troll();
    troll.setWeapon(new SwordBehaviour());
    expect(troll.fight()).toEqual(`Swing!`);
  });
});
