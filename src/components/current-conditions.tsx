import {formatDistance} from 'date-fns';
import * as React from 'react';
import {CurrentConditionsResponse} from '../hooks/use-current-conditions';
import {Temperature} from './temperature';
import { Wind } from './wind';

export interface CurrentConditionsProps {
	conditions?: CurrentConditionsResponse['properties'];
}

export const CurrentConditions = (props: CurrentConditionsProps) => {
	const {conditions} = props;

	if (!conditions) {
		return null;
	}

	const formatUpdate = formatDistance(
		new Date(conditions.timestamp),
		new Date()
	);

	return (
		<>
			<h1>Current Conditions</h1>
			<p>As of {formatUpdate} ago</p>
			<p>{conditions.textDescription}</p>
			<p>
				<Temperature {...conditions.temperature} />
			</p>
			<p>
				Wind <Wind direction={conditions.windDirection} gust={conditions.windGust} speed={conditions.windSpeed} />
			</p>
		</>
	);
};
