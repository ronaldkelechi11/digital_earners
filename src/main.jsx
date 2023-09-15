import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './screens/ComingSoon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComingSoon />} />
    </Routes>
  </BrowserRouter>
)
