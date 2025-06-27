import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import QuotesPage from './pages/Quotes';
import Navbar from './components/layout/Navbar';
import Contact from './components/layout/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}

export default App;
