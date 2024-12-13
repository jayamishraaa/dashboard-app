import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
         <Route index element={<Dashboard />} /> 
         <Route path="/analytics" element={<Analytics />} /> 
         <Route path="/calendar" element={<Calendar />} /> 
         <Route path="/employee" element={<Employee />} /> 

        {/* <Route path="/users" element={<Users />} /> */}
        </Route>
        </Routes>
      </BrowserRouter>
        {/* <Login /> */}
    </>
  )
}

export default App
