/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {getWeather} from '../src/Services/Api';
import "isomorphic-fetch";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
/*
it('renders correctly', () => {
  renderer.create(<App />);
});*/


it('check weather data response for Grasse city', async() => {
  const city = await getWeather('Grasse');
  expect(city.name).toEqual('Grasse')
});
 