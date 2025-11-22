import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import {useState, useEffect} from 'react'

import RecipeDetailPage from './pages/RecipeDetailPage'
function App() {


  return (
    <>
  <h1>Recipes App</h1>
  <Routes>
    <Route path='/' element={<HomePage/>}  />
    <Route path='/category/:categoryName' element={<CategoryPage />}/>
    <Route path='/recipe/:idMeal' element={<RecipeDetailPage />}/>
  </Routes>
       
    </>
  )
}

export default App