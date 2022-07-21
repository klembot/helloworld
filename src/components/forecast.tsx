import {formatDistanceToNow} from 'date-fns';
import { Alert, CardGroup, Col, Row } from 'react-bootstrap';
import { useForecast } from '../hooks/use-forecast';
import { ForecastDiscussionLink } from './forecast-discussion-link';
import { ForecastPeriod } from './forecast-period';

export interface ForecastProps {
  latitude: number;
  longitude: number;
}

export const Forecast = ({ latitude, longitude }: ForecastProps) => {
  const { error, isLoading, data, office } = useForecast(latitude, longitude);

  if (error) {
    return (
      <Alert variant="warning">Could not load forecast (try reloading)</Alert>
    );
  }

  if (isLoading || !data) {
    return <p>Loading forecast...</p>;
  }

  return (
    <>
      <CardGroup>
        {data?.properties.periods.map((period, index) => (
          <ForecastPeriod key={index} item={period} />
        ))}
      </CardGroup>
      {office && <ForecastDiscussionLink station={office} />}
      {data?.properties.updateTime && (
        <Row>
          <Col>
            <p className="text-center">
              Forecast updated{' '}
              {formatDistanceToNow(new Date(data.properties.updateTime))} ago
            </p>
          </Col>
        </Row>
      )}
    </>
  );
};
