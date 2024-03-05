import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/aplicacao/Home';
import HomeFirst from './page/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeFirst />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
