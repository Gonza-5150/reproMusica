import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //instalé con npm install react-router-dom, luego importé el BrowserRouter y le di el formato de router en la función.
import Library from './library'
import Feed from './feed'
import Trending from './trending'
import Player from './player'
import Favorites from './favorites'


export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Library />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/player' element={<Player />} />
            <Route path='/favorites' element={<Favorites />} />
        </Routes>
    </Router>
    
  )
}
