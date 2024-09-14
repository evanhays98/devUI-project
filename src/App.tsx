import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Pages/AppRouter';
import { StyleProvider } from './libs/core/StyleContext';
import { CreateComponentProvider } from './libs/core';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <StyleProvider>
          <CreateComponentProvider>
            <AppRouter />
          </CreateComponentProvider>
        </StyleProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
