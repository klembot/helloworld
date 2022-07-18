import {CurrentConditions} from './components/current-conditions';
import {ForecastPeriod} from './components/forecast-period';
import {useCurrentConditions} from './hooks/use-current-conditions';
import {useForecast} from './hooks/use-forecast';
import {formatDistance} from 'date-fns';

const latitude = 39.28390440000004;
const longitude = -76.74881219999997;

export const App = () => {
	const {isLoading: forecastLoading, data: forecastData} = useForecast(
		latitude,
		longitude
	);
	const {isLoading: conditionsLoading, data: conditionsData} =
		useCurrentConditions(latitude, longitude);

	if (conditionsLoading || forecastLoading) {
		return <p>Loading...</p>;
	}

	const formatUpdate = forecastData
		? formatDistance(
				new Date(forecastData?.properties.updateTime),
				new Date()
		  )
		: '';

	return (
		<main>
			<CurrentConditions conditions={conditionsData?.properties} />
			{forecastData?.properties.periods.map((period, index) => (
				<ForecastPeriod key={index} item={period} />
			))}
			<p>Forecast updated {formatUpdate} ago</p>
		</main>
	);
};

export default App;
