/* eslint-disable no-undef */
import React from 'react'
import PromisePolyfill from 'promise-polyfill'
import { Routes, Route } from 'react-router-dom'
import { Notes } from './views/Notes'
import { Navbar } from './components/Navbar'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}

const App = () => {

  return (

    <div className="App w-[100vw] min-h-screen px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
      </Routes>
    </div>
  )

}

export default App