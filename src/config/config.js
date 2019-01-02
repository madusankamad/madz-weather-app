//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//const API_KEY_SECOND = "4a76780b148e11072d6f09e141a5a426";
const API_KEY = "c08583b207c6f114a8d3b6735059bd95";
export const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast?{searchParams}&APPID=${API_KEY}`;
export const WEATHER_ICON = "http://openweathermap.org/img/w/{icon-id}.png";