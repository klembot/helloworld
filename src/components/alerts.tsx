import * as React from 'react';
import {useAlerts} from '../hooks/use-alerts';
import {uniqBy} from 'lodash';
import './alerts.css';
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
		return <div className="alerts empty">No alerts</div>;
	}

	return (
		<div className="alerts">
			{data?.features.map(alert => (
				<Alert key={alert.id} alert={alert} />
			))}
		</div>
	);
};
