import ReactDOM from 'react-dom/client'


import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './screens/ComingSoon'
import Landing from './screens/Landing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComingSoon />} />
      <Route path='/home' element={<Landing />} />
    </Routes>
  </BrowserRouter>
)
