import React from 'react';
// import 'styles/App/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PAGES } from 'utils/Constants';
import { CaracteristicsForm } from 'components/CaracteristicsForm/CaracteristicsForm';
import { Recomendation } from 'components/Recomendations/Recomendation';
import { AppContextProvider } from 'context/AppContextProvider';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div className="ui container">
          <Routes>
            <Route path={ PAGES.HOME } Component={ CaracteristicsForm } />
            <Route path={ PAGES.RECOMENDATIONS } Component={ Recomendation } />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
