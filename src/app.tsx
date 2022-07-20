import {CurrentConditions} from './components/current-conditions';
import {Forecast} from './components/forecast';
import {RadarLink} from './components/radar-link';
import {useGeolocation} from './hooks/use-geolocation';

export const App = () => {
	const {error: locationError, latitude, longitude} = useGeolocation();

	if (locationError) {
		return <p>Could not get location</p>;
	}

	if (!latitude || !longitude) {
		return <p>Locating...</p>;
	}

	return (
		<main>
			<CurrentConditions latitude={latitude} longitude={longitude} />
			<RadarLink latitude={latitude} longitude={longitude} />
			<Forecast latitude={latitude} longitude={longitude} />
		</main>
	);
};

export default App;
