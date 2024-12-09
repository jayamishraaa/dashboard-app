import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
         <Route index element={<Dashboard />} /> 

        {/* <Route path="/users" element={<Users />} /> */}
        </Route>
        </Routes>
      </BrowserRouter>
        {/* <Login /> */}
    </>
  )
}

export default App
