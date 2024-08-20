import { WeatherData } from '../App';

/**
 * @returns partial WeatherData item (timezone abbreviation excluded due to repeat data)
 */
export const WeatherItem = ({
  latitude,
  longitude,
  generationtime_ms,
  utc_offset_seconds,
  timezone,
  elevation,
}: Partial<WeatherData>) => {
  return (
    <div>
      <p>
        <span className="font-bold">Latitude: </span>
        {latitude}
      </p>
      <p>
        <span className="font-bold">Longitude: </span>
        {longitude}
      </p>
      <p>
        <span className="font-bold">Generation time (ms): </span>
        {generationtime_ms}
      </p>
      <p>
        <span className="font-bold">UTC Offset (s): </span>
        {utc_offset_seconds}
      </p>
      <p>
        <span className="font-bold">Timezone: </span>
        {timezone}
      </p>
      <p>
        <span className="font-bold">Elevatio: </span>
        {elevation}
      </p>
    </div>
  );
};
