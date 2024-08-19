/**
 * Implement a weather service that has the following methods:
 * fetchWeather - should fetch for a given lat/longitude (https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257)
 * parseData - parse raw data from API response into a WeatherData object using an interface
 */

const URL = 'https://api.open-meteo.com/v1/forecast?';

interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
}

/**
 * @param lat
 * @param long
 * @returns A promise of WeatherData
 */
export const fetchWeather = async (lat: number, long: number): Promise<WeatherData> => {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?' + `latitude=${lat}&longitude=${long}` // Feels like there's a better way to do this
    );
    if (!res.ok) {
      throw new Error(`HTTP Error: status: ${res.status}`);
    }
    const data: WeatherData = await res.json();
    return parseData(data);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message || 'Unexpected error');
    } else {
      throw new Error('Unexpected error');
    }
  }
};

/**
 * @param data
 * @returns a validated WeatherData object or an error
 */
export const parseData = (data: any): WeatherData => {
  if (
    typeof data.latitude === 'number' &&
    typeof data.longitude === 'number' &&
    typeof data.generationtime_ms === 'number' &&
    typeof data.utc_offset_seconds === 'number' &&
    typeof data.timezone === 'string' &&
    typeof data.timezone_abbreviation === 'string' &&
    typeof data.elevation === 'number'
  ) {
    return {
      latitude: data.latitude,
      longitude: data.longitude,
      generationtime_ms: data.generationtime_ms,
      utc_offset_seconds: data.utc_offset_seconds,
      timezone: data.timezone,
      timezone_abbreviation: data.timezone_abbreviation,
      elevation: data.elevation,
    };
  } else {
    throw new Error('Invalid data format');
  }
};

/**
 * Implement a WeatherApp class with the following methods:
 * displayWeater - displays API response in user-friendly format
 * handleError - displays an error message if the fetch fails
 */

class WeatherApp {
  private lat: number;
  private long: number;

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
  }

  public async displayWeather(): Promise<void> {
    try {
      const weatherData = await fetchWeather(this.lat, this.long);
      this.showWeather(weatherData);
    } catch (error) {
      if (error instanceof Error) {
        this.handleError(error);
      }
    }
  }

  private showWeather(data: WeatherData): void {
    const boldGreen = '\x1b[1m\x1b[32m';
    const reset = '\x1b[0m';

    console.log('\n>>> Weather Information <<<');
    console.log(`${boldGreen}Latitude:${reset} ${data.latitude}`);
    console.log(`${boldGreen}Longitude:${reset} ${data.longitude}`);
    console.log(`${boldGreen}Generation Time (ms):${reset} ${data.generationtime_ms}`);
    console.log(`${boldGreen}UTC Offset (seconds):${reset} ${data.utc_offset_seconds}`);
    console.log(`${boldGreen}Timezone:${reset} ${data.timezone}`);
    console.log(`${boldGreen}Timezone Abbreviation:${reset} ${data.timezone_abbreviation}`);
    console.log(`${boldGreen}Elevation (meters):${reset} ${data.elevation}\n`);
  }

  private handleError(error: Error): void {
    console.error('Failed to fetch weather data: ', error.message);
  }
}

// Test success implementation
const app = new WeatherApp(51.5085, -0.1257);
app.displayWeather();

// Test error implementation
// const failedFetch = new WeatherApp('s', 's');
// failedFetch.displayWeather();

// npx tsc
// node dist/services/weatherService.js
