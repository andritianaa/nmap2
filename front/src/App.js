import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/auth"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
