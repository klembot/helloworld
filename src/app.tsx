import {CurrentConditions} from './components/current-conditions';
import {ForecastPeriod} from './components/forecast-period';
import {useCurrentConditions} from './hooks/use-current-conditions';
import {useForecast} from './hooks/use-forecast';
import {useGeolocation} from './hooks/use-geolocation';
import {formatDistance} from 'date-fns';
import './app.css';

export const App = () => {
	const {error: locationError, latitude, longitude} = useGeolocation();
	const {isLoading: forecastLoading, data: forecastData} = useForecast(
		latitude,
		longitude
	);
	const {isLoading: conditionsLoading, data: conditionsData} =
		useCurrentConditions(latitude, longitude);

	if (locationError) {
		return <p>Could not get location</p>;
	}

	if (!latitude || !longitude || conditionsLoading || forecastLoading) {
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
