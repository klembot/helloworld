import {format} from 'date-fns';
import {Col, Row} from 'react-bootstrap';
import {useCurrentConditions} from '../hooks/use-current-conditions';
import {SunriseSunset} from './sunrise-sunset';
import {Temperature} from './temperature';
import {WeatherIcon} from './weather-icon';
import {Wind} from './wind';

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
		<>
			<Row className="align-items-center py-2">
				<Col xs="4">
					<WeatherIcon icon={data.properties.icon} />
				</Col>
				<Col>
					<Temperature {...data.properties.temperature} />
					<div>
						{Math.round(data.properties.relativeHumidity.value)}%
						Humidity
					</div>
					<div>{data.properties.textDescription}</div>
					<Wind
						direction={data.properties.windDirection}
						gust={data.properties.windGust}
						speed={data.properties.windSpeed}
					/>
				</Col>
			</Row>
			{station && (
				<Row>
					<Col className="text-center lh-1">
						<small>
							Observed at {station?.name} at{' '}
							{format(new Date(data.properties.timestamp), 'p')}
						</small>
					</Col>
				</Row>
			)}
			<Row>
				<Col className="text-center lh-1">
					<small>
						<SunriseSunset
							latitude={latitude}
							longitude={longitude}
						/>
					</small>
				</Col>
			</Row>
		</>
	);
};
