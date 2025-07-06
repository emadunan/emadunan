import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import QuotesPage from './pages/Quotes';
import Contact from './components/layout/Contact';
import References from './components/References/References';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-i-use" element={<References />} />
          <Route path="/my-quotes" element={<QuotesPage />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}

export default App;
