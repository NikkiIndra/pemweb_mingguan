// import libaries
import React,{Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';
import './App.css';
// create component
const app = () => {
  return (
    <div className='App'>
    <Header />
    <List/>
    <footer judul = 'halaman footer' namaMhs='nikki indra syaputra'/>
    <Footer />
    </div>
  );
}

// export component
export default app;
