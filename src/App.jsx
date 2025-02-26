import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Importando a página de home
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<><h1>About</h1></>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
