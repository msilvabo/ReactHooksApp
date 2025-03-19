import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import { MainApp } from './09-useContext/MainApp'

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{v7_startTransition: true,v7_relativeSplatPath: true}}>
    {/* <StrictMode> */}
      <MainApp/>
    {/* </StrictMode>, */}
  </BrowserRouter>
)
