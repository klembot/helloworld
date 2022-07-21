import {Accordion, Col, Row} from 'react-bootstrap';
import {useAlerts} from '../hooks/use-alerts';
import {Alert} from './alert';

export interface AlertsProps {
	latitude: number;
	longitude: number;
}

export const Alerts = ({latitude, longitude}: AlertsProps) => {
	const {isLoading, data} = useAlerts(latitude, longitude);

	if (isLoading) {
		return <p>Loading alerts...</p>;
	}

	if (data?.features.length === 0) {
		return <p className="text-center">No alerts</p>;
	}

	return (
		<Row>
			<Col>
				<Accordion>
					{data?.features.map((alert, index) => (
						<Alert
							key={alert.id}
							alert={alert}
							eventKey={index.toString()}
						/>
					))}
				</Accordion>
			</Col>
		</Row>
	);
};
