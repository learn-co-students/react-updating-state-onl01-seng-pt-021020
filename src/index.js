import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './components/ButtonCounter';
import LightSwitch from './components/LightSwitch';
import ClickityClick from './components/ClickityClick';

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
