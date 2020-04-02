import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Talcahuano, cl',
  'Santiago, cl',
  'florida, us',
  'fargo, us',
  'arica, cl',
  'valdivia, cl',
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationList cities={cities}/>
      </header>
    </div>
  );

}

export default App;
