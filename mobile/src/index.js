/* eslint-disable prettier/prettier */
import React from 'react';
import { Yellowbox } from 'react-native';

Yellowbox.ignoreWarnings([
  'Unrecognized WebSocket',
]);

import Routes from './routes';

export default function App() {
  return <Routes />;
}
