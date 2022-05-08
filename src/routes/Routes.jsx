import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes1 = () => {
    return (
        <Routes>
            
             <Route index element='/' exact component={Home}>
             <Route path='/catalog/:slug' component={Product}/>
             <Route path='/catalog' component={Catalog}/>
             <Route path='/cart' component={Cart}/>
             </Route>
    </Routes>
        
    )
}

export default Routes1