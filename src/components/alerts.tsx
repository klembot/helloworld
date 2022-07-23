import {useAlerts} from '../hooks/use-alerts';
import {Alert} from './alert';
import './alerts.css';

export interface AlertsProps {
  latitude: number;
  longitude: number;
}

export const Alerts = ({latitude, longitude}: AlertsProps) => {
  const {error, isLoading, data} = useAlerts(latitude, longitude);

  if (error) {
    return <p style={{textAlign: 'center'}}>Couldn't get alerts.</p>;
  }

  if (isLoading) {
    return <p style={{textAlign: 'center'}}>Loading alerts...</p>;
  }

  if (data?.features.length === 0) {
    return null;
  }

  return (
    <div className="weather-alerts">
      {data?.features.map((alert, index) => (
        <Alert key={alert.id} alert={alert} />
      ))}
    </div>
  );
};
