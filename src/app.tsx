import {CurrentConditions} from './components/current-conditions';
import {ForecastPeriod} from './components/forecast-period';
import {useCurrentConditions} from './hooks/use-current-conditions';
import {useForecast} from './hooks/use-forecast';
import {useGeolocation} from './hooks/use-geolocation';
import {formatDistance} from 'date-fns';
import './app.css';
import {SunriseSunset} from './components/sunrise-sunset';

export const App = () => {
	const {error: locationError, latitude, longitude} = useGeolocation();
	const {isLoading: forecastLoading, data: forecastData} = useForecast(
		latitude,
		longitude
	);
	const {
		isLoading: conditionsLoading,
		data: conditionsData,
		station
	} = useCurrentConditions(latitude, longitude);

	if (locationError) {
		return <p>Could not get location</p>;
	}

	if (!latitude || !longitude) {
		return <p>Locating...</p>;
	}

	if (conditionsLoading) {
		return <p>Fetching current conditions...</p>;
	}

	if (forecastLoading) {
		return <p>Fetching forecast...</p>;
	}

	const formatUpdate = forecastData
		? formatDistance(
				new Date(forecastData?.properties.updateTime),
				new Date()
		  )
		: '';

	return (
		<main>
			<CurrentConditions
				conditions={conditionsData?.properties}
				stationName={station?.name}
			/>
			<SunriseSunset latitude={latitude} longitude={longitude} />
			{forecastData?.properties.periods.map((period, index) => (
				<ForecastPeriod key={index} item={period} />
			))}
			<p>Forecast updated {formatUpdate} ago</p>
		</main>
	);
};

export default App;
