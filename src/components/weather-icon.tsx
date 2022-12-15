import clsx from 'clsx';
import {
  ArrowRight,
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
  QuestionCircle,
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
    rain: <CloudRain />,
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
    const {icons, percents} = iconKeys.reduce<{
      icons: React.ReactElement[];
      percents: string[];
    }>(
      (result, iconKey) => {
        const [icon, percent] = iconKey.split(',');
        const mappedIcon = (iconMappings as any)[iconType][icon] ?? (
          <QuestionCircle />
        );

        if (!result.icons.includes(mappedIcon)) {
          result.icons = [...result.icons, mappedIcon];
        }

        if (percent && !result.percents.includes(percent)) {
          result.percents = [...result.percents, percent];
        }

        return result;
      },
      {
        icons: [],
        percents: []
      }
    );

    return (
      <div
        className={clsx('weather-icon', {
          'has-percent': percents.length > 0,
          multiple: icons.length > 1
        })}
      >
        {icons.map((icon, index) => (
          <div className="icon" key={index}>
            {icon}
          </div>
        ))}
        {percents.length == 1 && <div className="percent">{percents[0]}%</div>}
        {percents.length == 2 && (
          <div className="percent">
            {percents[0]}
            <ArrowRight />
            {percents[1]}%
          </div>
        )}
      </div>
    );
  }

  console.error(`Don't know how to handle icon type ${iconType}`);
  return (
    <div className="weather-icon">
      <div className="icon">
        <QuestionCircle />
      </div>
    </div>
  );
};
