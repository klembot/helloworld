import {formatDistanceToNow} from 'date-fns';
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
			<h1>{station?.name}</h1>
			<div className="details">
				<WeatherIcon icon={data.properties.icon} size="large" />
				<div className="text">
					<div>{data.properties.textDescription}</div>
					<Temperature {...data.properties.temperature} />
					<Wind
						direction={data.properties.windDirection}
						gust={data.properties.windGust}
						speed={data.properties.windSpeed}
					/>
					<SunriseSunset latitude={latitude} longitude={longitude} />
					<div>
						As of{' '}
						{formatDistanceToNow(
							new Date(data.properties.timestamp)
						)}{' '}
						ago
					</div>
				</div>
			</div>
		</div>
	);
};
