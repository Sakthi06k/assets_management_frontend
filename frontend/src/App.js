import './App.css';
import Home from './pages/Home';
import AddAsserts from './pages/AddAsserts';
import LoginReg from './pages/LoginReg';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';
import UpdateAssert from './pages/UpdateAssert';
import GenerateReport from './pages/GenerateReport';
import ForgetPass from './pages/ForgetPass';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginReg />} />
        <Route path="/Home/:email" element={<Home />} />
        <Route path="/AddAsserts/:email" element={<AddAsserts />} />
        <Route path="/UpdateAssert/:email/:ind/:title/:asserts/:quantity/:price" element={<UpdateAssert />} />
        <Route path="/Profile/:email/:firstname/:lastname" element={<Profile />} />
        <Route path="/GenerateReport/:email" element={<GenerateReport />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
      </Routes>
    </div>
  );
}

export default App;
