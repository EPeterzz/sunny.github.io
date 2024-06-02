// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register 컴포넌트에 대한 라우트 */}
      </Routes>
			
		  
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link> {/* Register 컴포넌트에 대한 링크 */}
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;