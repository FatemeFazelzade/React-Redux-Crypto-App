import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import { Nav, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";


function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Nav/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route element={ <Homepage /> } path="/"/>
              <Route element={ <Exchanges /> } path="/exchanges"/>
              <Route element={ <Cryptocurrencies /> } path="/cryptocurrencies"/>
              <Route element={ <CryptoDetails /> } path="/crypto/:coinId"/>
              <Route element={ <News /> } path="/news"/>
            </Routes>
          </div>          
        </Layout>
        <div className='footer'> <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          All Rights Reserved.
          </Typography.Title>
          <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
          </Space>
        </div>
     </div>
  </div>
  );
}

export default App;
