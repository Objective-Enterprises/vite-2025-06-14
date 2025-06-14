import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Counter from './Counter'
import Photo from './Photo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/photo' element={<Photo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
