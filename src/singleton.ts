export interface Singleton<T> {
  getInstance: () => T;
}

let timestamp: Date;
export const timestampSingleton: Singleton<Date> = {
  getInstance: () => {
    if (!timestamp) timestamp = new Date();
    return timestamp;
  },
};

let random: number;
export const randomSingleton: Singleton<number> = {
  getInstance: () => {
    if (!random) random = Math.random();
    return random;
  },
};
