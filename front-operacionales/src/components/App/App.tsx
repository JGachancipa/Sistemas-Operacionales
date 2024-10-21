import React from 'react';
import 'styles/App/App.css';
import { Loggin } from 'components/Loggin/Loggin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGES } from 'utils/Constants';
import { CaracteristicsForm } from 'components/CaracteristicsForm/CaracteristicsForm';
import { Recomendation } from 'components/Recomendations/Recomendation';

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Routes>
          <Route path={PAGES.HOME} Component={Recomendation} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
