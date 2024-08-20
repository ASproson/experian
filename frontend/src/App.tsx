/**
 * Create a simple user interface. MVP could display from a default city (i.e London), but bonus points for an input to enter city or long/lat
 * API source: https://open-meteo.com/en/docs
 */

import { useState } from 'react';
import { Input } from './components/Input';
import { WeatherItem } from './components/WeatherItem';
import { useFetchWeather } from './hooks/useFetchWeather';
import { Form } from './components/Form';

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
}

const coordURL = 'https://api.open-meteo.com/v1/forecast?';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [url, setUrl] = useState('');

  const { weatherData, loading, error } = useFetchWeather(url);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (latitude && longitude) {
      setUrl(coordURL + `latitude=${latitude}&longitude=${longitude}`);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl mt-4">Weather Data</h1>

      <Form onSubmit={handleFormSubmit}>
        <Input
          htmlFor="latitude"
          type="text"
          onChange={setLatitude}
          placeholder="Latitude..."
          disabled={loading}
        />
        <Input
          type="text"
          htmlFor="longitude"
          disabled={loading}
          placeholder="Longitude..."
          onChange={setLongitude}
        />
      </Form>

      {loading && <i className="fa-solid fa-sun animate-spin text-2xl text-orange-400"></i>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <WeatherItem
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
          generationtime_ms={weatherData.generationtime_ms}
          utc_offset_seconds={weatherData.utc_offset_seconds}
          timezone={weatherData.timezone}
          elevation={weatherData.elevation}
        />
      )}
    </div>
  );
}

export default App;
