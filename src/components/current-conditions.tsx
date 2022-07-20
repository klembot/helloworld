import {formatDistanceToNow} from 'date-fns';
import {CurrentConditionsResponse} from '../hooks/use-current-conditions';
import {Temperature} from './temperature';
import {Wind} from './wind';

export interface CurrentConditionsProps {
	conditions?: CurrentConditionsResponse['properties'];
	stationName?: string;
}

export const CurrentConditions = (props: CurrentConditionsProps) => {
	const {conditions, stationName} = props;

	if (!conditions) {
		return null;
	}

	return (
		<>
			<h1>Conditions at {stationName}</h1>
			<p>{conditions.textDescription}</p>
			<p>
				<Temperature {...conditions.temperature} />
			</p>
			<p>
				<Wind
					direction={conditions.windDirection}
					gust={conditions.windGust}
					speed={conditions.windSpeed}
				/>
			</p>
			<p>
				As of {formatDistanceToNow(new Date(conditions.timestamp))} ago
			</p>
		</>
	);
};
