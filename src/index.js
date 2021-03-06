import './sass/main.scss';

import fetchWeather from './js/fetch-weather';
import fetchImage from './js/fetch-bg-image';
import refs from './js/refs';
import quotes from './js/quote';
import  './js/preloader';
import geolocation from './js/geolocation-rendering';
import markUpFiveDays from './js/markUpFiveDay';


navigator.geolocation.getCurrentPosition(
  geolocation.onGetPositionSuccessCurrentDay,
  geolocation.onGetPositionErrorCurrentDay
);
