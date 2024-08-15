import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Completed from './pages/Completed'
import Low from './pages/priority/Low'
import Medium from './pages/priority/Medium'
import High from './pages/priority/High'

function App() {
    return (
        <div className = "App">
            <BrowserRouter>
                <Navbar />
                <div classname = "pages">
                    <Routes>
                        <Route path = "/" element = {<Home />} />
                        <Route path = "/completed" element = {<Completed />} />
                        <Route path = "/low" element = {<Low />} />
                        <Route path = "/medium" element = {<Medium />} />
                        <Route path = "/high" element = {<High />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App