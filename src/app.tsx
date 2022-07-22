import {Alerts} from './components/alerts';
import {CurrentConditions} from './components/current-conditions';
import {Forecast} from './components/forecast';
import {RadarLink} from './components/radar-link';
import {useGeolocation} from './hooks/use-geolocation';
import './app.css';
import {SunriseSunset} from './components/sunrise-sunset';
import {ForecastDiscussionLink} from './components/forecast-discussion-link';

export const App = () => {
  const {error: locationError, latitude, longitude} = useGeolocation();

  if (locationError) {
    return (
      <p>
        Could not get your location. Check that you've enabled this in your
        browser.
      </p>
    );
  }

  if (!latitude || !longitude) {
    return <p>Locating...</p>;
  }

  return (
    <main className="app">
      <CurrentConditions latitude={latitude} longitude={longitude} />
      <SunriseSunset latitude={latitude} longitude={longitude} />
      <RadarLink latitude={latitude} longitude={longitude} />
      <Alerts latitude={latitude} longitude={longitude} />
      <Forecast latitude={latitude} longitude={longitude} />
    </main>
  );
};

export default App;
