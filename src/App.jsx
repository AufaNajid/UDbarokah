import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Homepage from './pages/homepage/Homepage';
import NotFound from './pages/error/notFound';

function App() {
  return (
      <Router>
        <div className="h-screen relative flex flex-col justify-between items-center">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;