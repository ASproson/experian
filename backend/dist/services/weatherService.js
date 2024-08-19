"use strict";
/**
 * Implement a weather service that has the following methods:
 * fetchWeather - should fetch for a given lat/longitude (https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257)
 * parseData - parse raw data from API response into a WeatherData object using an interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData = exports.fetchWeather = void 0;
const URL = 'https://api.open-meteo.com/v1/forecast?';
const fetchWeather = async (lat, long) => {
    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?' + `latitude=${lat}&longitude=${long}`);
        if (!res.ok) {
            throw new Error(`HTTP Error: status: ${res.status}`);
        }
        const data = await res.json();
        const parsedData = (0, exports.parseData)(data);
        console.log('Parsed weather data: ', parsedData);
        return parsedData;
    }
    catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message || 'Unexpected error');
        }
        else {
            throw new Error('Unexpected error');
        }
    }
};
exports.fetchWeather = fetchWeather;
const parseData = (data) => {
    // Validate and transform data
    if (typeof data.latitude === 'number' &&
        typeof data.longitude === 'number' &&
        typeof data.generationtime_ms === 'number' &&
        typeof data.utc_offset_seconds === 'number' &&
        typeof data.timezone === 'string' &&
        typeof data.timezone_abbreviation === 'string' &&
        typeof data.elevation === 'number') {
        return {
            latitude: data.latitude,
            longitude: data.longitude,
            generationtime_ms: data.generationtime_ms,
            utc_offset_seconds: data.utc_offset_seconds,
            timezone: data.timezone,
            timezone_abbreviation: data.timezone_abbreviation,
            elevation: data.elevation,
        };
    }
    else {
        throw new Error('Invalid data format');
    }
};
exports.parseData = parseData;
// npx tsc
// node dist/services/weatherService.js
console.log((0, exports.fetchWeather)(51.5085, -0.1257));
