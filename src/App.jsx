
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rootlayout from './components/layouts/Rootlayout'
import Home from './components/pages/Home'
import Error from './components/pages/Error'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}/>
        
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
