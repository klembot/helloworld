import {formatDistanceToNow} from 'date-fns';
import {useForecast} from '../hooks/use-forecast';
import {ForecastDiscussionLink} from './forecast-discussion-link';
import {ForecastPeriod} from './forecast-period';
import './forecast.css';

export interface ForecastProps {
	latitude: number;
	longitude: number;
}

export const Forecast = ({latitude, longitude}: ForecastProps) => {
	const {error, isLoading, data, office} = useForecast(latitude, longitude);

	if (error) {
		return <p>Could not load forecast (try reloading)</p>;
	}

	if (isLoading || !data) {
		return <p>Loading forecast...</p>;
	}

	return (
		<div className="forecast">
			{data?.properties.periods.map((period, index) => (
				<ForecastPeriod key={index} item={period} />
			))}
			{office && <ForecastDiscussionLink station={office} />}
			{data?.properties.updateTime && (
				<p className="updated-at">
					Forecast updated{' '}
					{formatDistanceToNow(new Date(data.properties.updateTime))}{' '}
					ago
				</p>
			)}
		</div>
	);
};
