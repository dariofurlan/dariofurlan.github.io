import { HashRouter } from 'react-router-dom';
import './App.css';
import ThemeProvider from './provider/ThemeProvider';
import AppRouter from './routes/AppRouter';

function App() {
  return <HashRouter>
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
  </HashRouter>;
}

export default App;
