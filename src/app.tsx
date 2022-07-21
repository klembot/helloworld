import { Alert, Container } from 'react-bootstrap';
import { Alerts } from './components/alerts';
import { CurrentConditions } from './components/current-conditions';
import { Forecast } from './components/forecast';
import { RadarLink } from './components/radar-link';
import { useGeolocation } from './hooks/use-geolocation';

export const App = () => {
  const { error: locationError, latitude, longitude } = useGeolocation();

  if (locationError) {
    return (
      <Alert variant="danger">
        Could not get your location. Check that you've enabled this in your
        browser.
      </Alert>
    );
  }

  if (!latitude || !longitude) {
    return <p>Locating...</p>;
  }

  return (
    <main>
      <Container fluid>
        <div className="d-grid gap-2">
          <div className="py-2">
            <CurrentConditions latitude={latitude} longitude={longitude} />
          </div>
          <div className="d-grid py-2 gap-2">
            <Alerts latitude={latitude} longitude={longitude} />
            <RadarLink latitude={latitude} longitude={longitude} />
          </div>
          <Forecast latitude={latitude} longitude={longitude} />
        </div>
      </Container>
    </main>
  );
};

export default App;
