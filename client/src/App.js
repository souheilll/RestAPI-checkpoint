import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Pages/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import User from './Pages/User/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUser from './Pages/User/AddUser';




function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <MainHeader />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<User />} />
          <Route path='/add_user' element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
