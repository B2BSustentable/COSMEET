import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/aplicacao/Home';
import HomeFirst from './page/home/Home';
import Login from './page/home/Login';
import LoginAuth from './page/home/LoginAuth';
import Register from './page/home/Register';
import RegisterBusiness from './page/home/RegisterBusiness';
import Plans from './page/home/Planos';
import PerfilEmpresa from './page/aplicacao/PerfilEmpresa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeFirst />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/auth" element={<LoginAuth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/business" element={<RegisterBusiness />} />
        <Route path="/register/plans" element={<Plans />} />

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<PerfilEmpresa />} />

      </Routes>
    </Router>
  );
}

export default App;
