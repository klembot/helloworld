import {Button, Col, Row} from 'react-bootstrap';

export interface ForecastDiscussionLinkProps {
	station: string;
}

export const ForecastDiscussionLink = (props: ForecastDiscussionLinkProps) => {
	return (
		<Row>
			<Col>
				<div className="d-grid">
					<Button
						href={`https://forecast.weather.gov/product.php?site=${props.station}&issuedby=${props.station}&product=AFD&format=txt&version=1&glossary=1`}
						variant="outline-primary"
					>
						Forecast Discussion
					</Button>
				</div>
			</Col>
		</Row>
	);
};
