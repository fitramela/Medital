// src/App.js
import React from 'react';
import WeatherSearch from './pages/WeatherSearch';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <WeatherSearch />
      </main>
      <Footer />
    </div>
  );
};

export default App;
