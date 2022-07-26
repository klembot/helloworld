import clsx from 'clsx';
import {Compass} from 'react-bootstrap-icons';
import './app.css';
import {Alerts} from './components/alerts';
import {CurrentConditions} from './components/current-conditions';
import {Forecast} from './components/forecast';
import {RadarLink} from './components/radar-link';
import {SunriseSunset} from './components/sunrise-sunset';
import {useCurrentConditions} from './hooks/use-current-conditions';
import {useGeolocation} from './hooks/use-geolocation';

export const App = () => {
  const {error, latitude, longitude} = useGeolocation();
  const {data} = useCurrentConditions(latitude, longitude);
  const themes = data?.properties.icon
    .replace('https://api.weather.gov/icons/land/', '')
    .replace(/\?.*$/, '')
    .split('/');

  if (error) {
    return (
      <div className="global-overlay">
        <Compass />
        <p>Couldn't get your location.</p>
        {error.code === GeolocationPositionError.PERMISSION_DENIED && (
          <p>
            Permission denied. Do you have location services allowed in your
            browser?
          </p>
        )}
        {error.code === GeolocationPositionError.POSITION_UNAVAILABLE && (
          <p>
            Your browser couldn't get your location. Do you have location
            services allowed?
          </p>
        )}
        {error.code === GeolocationPositionError.TIMEOUT && (
          <p>Getting your position timed out. Try again.</p>
        )}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!latitude || !longitude) {
    return (
      <div className="global-overlay">
        <Compass />
        <p>Locating...</p>
      </div>
    );
  }

  return (
    <main className={clsx('app', themes)}>
      <CurrentConditions latitude={latitude} longitude={longitude} />
      <SunriseSunset latitude={latitude} longitude={longitude} />
      <RadarLink latitude={latitude} longitude={longitude} />

      <Alerts latitude={latitude} longitude={longitude} />
      <Forecast latitude={latitude} longitude={longitude} />
    </main>
  );
};

export default App;
