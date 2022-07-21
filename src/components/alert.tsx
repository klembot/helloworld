import * as React from 'react';
import {AlertFeature} from '../hooks/use-alerts';
import './alert.css';

export interface AlertProps {
	alert: AlertFeature;
}

export const Alert = ({alert}: AlertProps) => {
	const [expanded, setExpanded] = React.useState(false);
	const shortHeadline = alert.properties.headline.replace(/issued.*/, '');

	return (
		<div className="alert">
			<button onClick={() => setExpanded(value => !value)}>
				{expanded ? '▼ ' : '▶ '}
				<span className="label">{shortHeadline}</span>
			</button>
			{expanded && (
				<div className="details">
					<pre>{alert.properties.description}</pre>
					<pre>{alert.properties.instruction}</pre>
				</div>
			)}
		</div>
	);
};
