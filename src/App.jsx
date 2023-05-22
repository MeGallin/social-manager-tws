import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';

function App() {
  const HomeView = lazy(() => import('./Views/HomeView'));

  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <Suspense fallback="...loading">
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
            </Routes>
          </div>
        </Suspense>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
