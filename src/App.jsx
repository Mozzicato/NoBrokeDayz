import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import BrowseGigs from './components/BrowseGigs.jsx';
import Features from './components/Features.jsx';
import Waitlist from './components/Waitlist.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BrowseGigs />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
