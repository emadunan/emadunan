import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/layout/Header';
import Contact from './components/layout/Contact';
import HomePage from './pages/Home';
import QuotesPage from './pages/Quotes';
import QualificationsPage from './pages/Qualifications';
import ReferencesPage from './pages/References';
import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-i-use" element={<ReferencesPage />} />
          <Route path="/my-qualifications" element={<QualificationsPage />} />
          <Route path="/my-quotes" element={<QuotesPage />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}

export default App;
