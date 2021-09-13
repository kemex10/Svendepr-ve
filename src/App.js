import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './components/Login/AuthProvider';
import { Routes } from './components/Routes/Routes';
import Navigation from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <Navigation />
            <main>
              <Routes />
            </main>
            <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
