import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routes1 from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes1/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout