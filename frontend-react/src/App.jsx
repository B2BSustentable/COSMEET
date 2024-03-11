import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/aplicacao/Home';
import HomeFirst from './page/home/Home';
import Login from './page/home/Login';
import Register from './page/home/Register';
import Plans from './page/home/Planos';
import PerfilEmpresa from './page/aplicacao/PerfilEmpresa';
// import Payment from './page/home/Pagamentos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeFirst />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        {/* <Route path="/payment" element={<Payment />} /> */}

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<PerfilEmpresa />} />

      </Routes>
    </Router>
  );
}

export default App;
