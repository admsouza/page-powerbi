// pages/Home.tsx

import React from 'react';
import Powerbi from '../components/Powerbi';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Bem-vindo à Página Home</h1>
      <p>Texto da Página Home</p>

      <Powerbi />
    </div>
  );
};

export default Home;
