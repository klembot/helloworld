import {format} from 'date-fns';
import {useCurrentConditions} from '../hooks/use-current-conditions';
import {SunriseSunset} from './sunrise-sunset';
import {Temperature} from './temperature';
import {WeatherIcon} from './weather-icon';
import {Wind} from './wind';
import './current-conditions.css';

export interface CurrentConditionsProps {
  latitude: number;
  longitude: number;
}

export const CurrentConditions = (props: CurrentConditionsProps) => {
  const {latitude, longitude} = props;
  const {error, isLoading, data, station} = useCurrentConditions(
    latitude,
    longitude
  );

  if (error) {
    return <p>Could not load current conditions (try reloading)</p>;
  }

  if (isLoading || !data) {
    return <p>Loading current conditions...</p>;
  }

  return (
    <div className="current-conditions">
      <WeatherIcon icon={data.properties.icon} />
      <div className="conditions">
        <Temperature {...data.properties.temperature} />
        <div>
          {Math.round(data.properties.relativeHumidity.value)}% Humidity
        </div>
        <div>{data.properties.textDescription}</div>
        <Wind
          direction={data.properties.windDirection}
          gust={data.properties.windGust}
          speed={data.properties.windSpeed}
        />
      </div>
      {station && (
        <div className="station">
          Observed at {station?.name} at{' '}
          {format(new Date(data.properties.timestamp), 'p')}
        </div>
      )}
    </div>
  );
};
