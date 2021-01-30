import { randomSingleton, timestampSingleton } from './singleton';

describe(`singleton`, () => {
  it(`given two timestamps > should be the same instance`, () => {
    const instance1 = timestampSingleton.getInstance();
    const instance2 = timestampSingleton.getInstance();
    expect(instance1).toEqual(instance2);
  });

  it(`given two randoms > should be the same instance`, () => {
    const instance1 = randomSingleton.getInstance();
    const instance2 = randomSingleton.getInstance();
    expect(instance1).toEqual(instance2);
  });
});
