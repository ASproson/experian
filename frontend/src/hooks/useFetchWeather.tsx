import { useState, useEffect } from 'react';
import { WeatherData } from '../App';

export const useFetchWeather = (url: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if (!url) return;
    setWeatherData(null);
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || 'Failed to fetch');
      }
      const data = await res.json();
      setWeatherData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message || 'Unexpected error');
      } else {
        setError('Unexpected error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [url]);

  return { weatherData, loading, error };
};
