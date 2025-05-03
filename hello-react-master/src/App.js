// import libaries
import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';
import './App.css';
import Top from './Top.js';

// create component
const App = () => {
  return (
    <div className='App'>
      <Header list="10 daftar poto random"/>
      <Top />
      <List className='App-Logo' />
      <footer judul='halaman footer' namaMhs='nikki indra syaputra' />
      <Footer />
    </div>
  );
}

// export component
export default App;
