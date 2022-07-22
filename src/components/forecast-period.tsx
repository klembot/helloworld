import {ForecastResponsePeriod} from '../hooks/use-forecast';
import {WeatherIcon} from './weather-icon';
import './forecast-period.css';

export interface ForecastPeriodProps {
  item: ForecastResponsePeriod;
}

export const ForecastPeriod = (props: ForecastPeriodProps) => {
  const {item} = props;

  return (
    <div className="forecast-period">
      <WeatherIcon icon={item.icon} />
      <div className="summary">
        <div className="title">{item.name}</div>
        <div className="temperature">
          {item.temperature}&deg; {item.temperatureUnit}
        </div>
        <div className="short-forecast">{item.shortForecast}</div>
      </div>
      <div className="long-forecast">{item.detailedForecast}</div>
    </div>
  );
};
