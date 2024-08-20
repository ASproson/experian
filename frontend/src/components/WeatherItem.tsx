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
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Generation time (ms): {generationtime_ms}</p>
      <p>UTC Offset (s): {utc_offset_seconds}</p>
      <p>Timezone: {timezone}</p>
      <p>Elevation: {elevation}</p>
    </div>
  );
};
