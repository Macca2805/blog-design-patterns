export interface Observer<T> {
  update: (d: T) => void;
}

export abstract class Subject<T> {
  abstract register(o: Observer<T>): void;
  abstract remove(o: Observer<T>): void;
  abstract notify(): void;
}

export interface Weather {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class WeatherData extends Subject<Weather> {
  private weather: Weather;
  private readonly observers: Array<Observer<Weather>> = [];

  constructor(w: Weather) {
    super();
    this.setWeather(w);
  }

  register(o: Observer<Weather>): void {
    this.observers.push(o);
    o.update(this.weather);
  }

  remove(o: Observer<Weather>): void {
    const i = this.observers.indexOf(o);
    if (i >= 0) delete this.observers[i];
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.weather);
    }
  }

  setWeather(w: Weather): void {
    this.weather = w;
    this.notify();
  }
}

export interface WeatherDisplay {
  display: () => string;
}

export class CurrentConditions implements Observer<Weather>, WeatherDisplay {
  private temperature: number;
  private humidity: number;

  constructor(s: WeatherData) {
    s.register(this);
  }

  update({ temperature, humidity }: Weather): void {
    this.temperature = temperature;
    this.humidity = humidity;
  }

  display(): string {
    return `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`;
  }
}

export class Statistics implements Observer<Weather>, WeatherDisplay {
  private readonly temperatures: number[] = [];

  constructor(s: WeatherData) {
    s.register(this);
  }

  update({ temperature }: Weather): void {
    this.temperatures.push(temperature);
  }

  display(): string {
    const avg =
      this.temperatures.reduce((reducer, temperature) => (reducer || 0) + temperature, 0) / this.temperatures.length;
    const max = this.temperatures.reduce(
      (reducer, temperature) => (reducer === -1 ? temperature : reducer > temperature ? reducer : temperature),
      -1,
    );
    const min = this.temperatures.reduce(
      (reducer, temperature) => (reducer === -1 ? temperature : reducer < temperature ? reducer : temperature),
      -1,
    );
    return `Avg/Max/Min temperature = ${avg.toFixed(1)}/${max.toFixed(1)}/${min.toFixed(1)}`;
  }
}

export class Forecast implements Observer<Weather>, WeatherDisplay {
  private previous: number;
  private current: number;

  constructor(s: WeatherData) {
    s.register(this);
  }

  update({ pressure }: Weather): void {
    this.previous = this.current || 0;
    this.current = pressure;
  }

  display(): string {
    if (this.previous < this.current) {
      return `Forecast: Improving weather on the way!`;
    }
    if (this.previous > this.current) {
      return `Forecast: Watch out for cooler, rainy weather`;
    }
    return `Forecast: More of the same`;
  }
}
