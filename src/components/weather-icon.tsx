import clsx from 'clsx';
import {Badge} from 'react-bootstrap';
import {
  Cloud,
  CloudFog,
  CloudHail,
  CloudHaze,
  CloudLightning,
  CloudLightningRain,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  Hurricane,
  MoonStars,
  Sun,
  ThermometerSnow,
  ThermometerSun,
  Tornado,
  Wind
} from 'react-bootstrap-icons';
import './weather-icon.css';

const iconMappings = {
  day: {
    bkn: <Cloud />,
    blizzard: <CloudSnow />,
    cold: <ThermometerSnow />,
    du: <CloudHaze />,
    fc: <Tornado />,
    few: <Sun />,
    fg: <CloudFog />,
    frza: <CloudHail />,
    fu: <CloudFog />,
    hi_shwrs: <CloudRain />,
    hi_tsra: <CloudLightningRain />,
    hur_warn: <Hurricane />,
    hur_watch: <Hurricane />,
    hot: <ThermometerSun />,
    hz: <CloudHaze />,
    ip: <CloudHail />,
    minus_ra: <CloudRain />,
    ovc: <Cloud />,
    ra: <CloudRain />,
    rain_showers: <CloudRain />,
    raip: <CloudHail />,
    ra_fzra: <CloudHail />,
    ra_sn: <CloudSnow />,
    sct: <CloudSun />,
    scttsra: <CloudLightningRain />,
    shra: <CloudRain />,
    sn: <CloudSnow />,
    skc: <Sun />,
    snip: <CloudSnow />,
    tor: <Tornado />,
    tsra: <CloudLightningRain />,
    tsra_sct: <CloudLightningRain />,
    tsra_hi: <CloudLightning />,
    ts_nowarn: <CloudLightning />,
    ts_warn: <CloudLightning />,
    ts_watch: <CloudLightning />,
    wind_bkn: <Wind />,
    wind_few: <Wind />,
    wind_ovc: <Wind />,
    wind_sct: <Wind />,
    wind_skc: <Wind />
  },
  night: {
    bkn: <Cloud />,
    blizzard: <CloudSnow />,
    cold: <ThermometerSnow />,
    du: <CloudHaze />,
    fc: <Tornado />,
    few: <MoonStars />,
    fg: <CloudFog />,
    frza: <CloudHail />,
    fu: <CloudFog />,
    hi_shwrs: <CloudRain />,
    hi_tsra: <CloudLightningRain />,
    hur_warn: <Hurricane />,
    hur_watch: <Hurricane />,
    hot: <ThermometerSun />,
    hz: <CloudHaze />,
    ip: <CloudHail />,
    minus_ra: <CloudRain />,
    ovc: <Cloud />,
    ra: <CloudRain />,
    rain_showers: <CloudRain />,
    raip: <CloudHail />,
    ra_fzra: <CloudHail />,
    ra_sn: <CloudSnow />,
    sct: <CloudMoon />,
    scttsra: <CloudLightningRain />,
    shra: <CloudRain />,
    sn: <CloudSnow />,
    skc: <Sun />,
    snip: <CloudSnow />,
    tor: <Tornado />,
    tsra: <CloudLightningRain />,
    tsra_sct: <CloudLightningRain />,
    tsra_hi: <CloudLightning />,
    ts_nowarn: <CloudLightning />,
    ts_warn: <CloudLightning />,
    ts_watch: <CloudLightning />,
    wind_bkn: <Wind />,
    wind_few: <Wind />,
    wind_ovc: <Wind />,
    wind_sct: <Wind />,
    wind_skc: <Wind />
  }
};

export interface WeatherIconProps {
  /**
   * NWS icon path to render.
   * @see https://www.weather.gov/forecast-icons
   */
  icon: string;
}

export const WeatherIcon = ({icon}: WeatherIconProps) => {
  const [iconType, ...iconKeys] = icon
    .replace('https://api.weather.gov/icons/land/', '')
    .replace(/\?.*$/, '')
    .split('/');

  if (iconType in iconMappings) {
    return (
      <div className="weather-icon">
        {iconKeys.map(iconKey => {
          const [icon, percent] = iconKey.split(',');
          const mappedIcon = (iconMappings as any)[iconType][icon] ?? '❓';

          return (
            <div
              className={clsx('icon', {'has-percent': !!percent})}
              key={iconKey}
            >
              {mappedIcon}
              {percent && <Badge>{percent}%</Badge>}
            </div>
          );
        })}
      </div>
    );
  }

  console.error(`Don't know how to handle icon type ${iconType}`);
  return <span className="weather-icon">❓</span>;
};
