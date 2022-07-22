import {
	add,
	format,
	formatDistanceToNow,
	isAfter,
	startOfDay,
	startOfTomorrow
} from 'date-fns';
import {getTimes} from 'suncalc';
import './sunrise-sunset.css';

export interface SunriseSunsetProps {
  latitude: number;
  longitude: number;
}

export const SunriseSunset = (props: SunriseSunsetProps) => {
  // Suncalc is weird about dates--seems to return the previous day if we start
  // too early in today.

  const {latitude, longitude} = props;
  const now = new Date();
  const times = getTimes(
    add(startOfDay(now), {hours: 12}),
    latitude,
    longitude
  );

  if (isAfter(times.sunrise, now)) {
    return (
      <div className="sunrise-sunset">
        Sunrise in {formatDistanceToNow(times.sunrise)}, at{' '}
        {format(times.sunrise, 'p')}
      </div>
    );
  } else if (isAfter(times.sunset, now)) {
    return (
      <div className="sunrise-sunset">
        Sunset in {formatDistanceToNow(times.sunset)}, at{' '}
        {format(times.sunset, 'p')}
      </div>
    );
  }

  // We're past both sunrise and sunset for today. Show tomorrow instead.

  const tomorrowTimes = getTimes(
    add(startOfTomorrow(), {hours: 12}),
    latitude,
    longitude
  );

  return (
    <div className="sunrise-sunset">
      Sunrise in {formatDistanceToNow(tomorrowTimes.sunrise)}, at{' '}
      {format(tomorrowTimes.sunrise, 'p')}
    </div>
  );
};
