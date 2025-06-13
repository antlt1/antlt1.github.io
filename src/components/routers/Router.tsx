import React from 'react';
import Header from '../Header/Header';
import About from '~/components/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '~/components/page/Main';
import Footer from '../Footer/Footer';
import TimeLine from '../TimeLine/TimeLine';

// import { Container } from './styles';

const routers: React.FC = () => {
  return (
    <div className="body" style={{ margin:"1%" }}>
      <Router>
        <Header />
        <div className="container max-h-full" style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/timeline" element={<TimeLine />} />
            </Routes>
            <Footer />
        </div>
      </Router>
    </div>
  );
}

export default routers;