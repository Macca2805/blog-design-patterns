import { CurrentConditions, Forecast, Statistics, WeatherData } from './observer';

describe(`observer`, () => {
  const weatherData = new WeatherData({
    temperature: 80,
    humidity: 60,
    pressure: 30.4,
  });
  const currentConditions = new CurrentConditions(weatherData);
  const statistics = new Statistics(weatherData);
  const forecast = new Forecast(weatherData);

  it(`given initial data > when display > return expected output`, () => {
    expect(currentConditions.display()).toEqual(`Current conditions: 80F degrees and 60% humidity`);
    expect(statistics.display()).toEqual(`Avg/Max/Min temperature = 80.0/80.0/80.0`);
    expect(forecast.display()).toEqual(`Forecast: Improving weather on the way!`);
  });

  it(`given updated data > when display > return expected output`, () => {
    weatherData.setWeather({
      temperature: 82,
      humidity: 70,
      pressure: 29.2,
    });
    expect(currentConditions.display()).toEqual(`Current conditions: 82F degrees and 70% humidity`);
    expect(statistics.display()).toEqual(`Avg/Max/Min temperature = 81.0/82.0/80.0`);
    expect(forecast.display()).toEqual(`Forecast: Watch out for cooler, rainy weather`);
  });

  it(`given initial data > when display > return expected output`, () => {
    weatherData.setWeather({
      temperature: 78,
      humidity: 90,
      pressure: 29.2,
    });
    expect(currentConditions.display()).toEqual(`Current conditions: 78F degrees and 90% humidity`);
    expect(statistics.display()).toEqual(`Avg/Max/Min temperature = 80.0/82.0/78.0`);
    expect(forecast.display()).toEqual(`Forecast: More of the same`);
  });
});
