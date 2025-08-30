import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
    </>
  )
}

export default App