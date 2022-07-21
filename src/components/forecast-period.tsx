import {Card, Col, Row} from 'react-bootstrap';
import {ForecastResponsePeriod} from '../hooks/use-forecast';
import {WeatherIcon} from './weather-icon';

export interface ForecastPeriodProps {
  item: ForecastResponsePeriod;
}

export const ForecastPeriod = (props: ForecastPeriodProps) => {
  const {item} = props;
  const className = item.isDaytime
    ? 'bg-primary text-white'
    : 'bg-secondary text-white';

  return (
    <Card body>
      <Row>
        <Col xs={3}>
          <WeatherIcon icon={item.icon} />
        </Col>
        <Col>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.detailedForecast}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};
