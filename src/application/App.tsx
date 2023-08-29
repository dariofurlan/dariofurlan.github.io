import { HashRouter } from 'react-router-dom';
import ThemeProvider from '../providers/ThemeProvider';
import AppRouter from '../routes/AppRouter';
import React from "react";

function App() {
  return <HashRouter>
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
  </HashRouter>;
}

export default App;
