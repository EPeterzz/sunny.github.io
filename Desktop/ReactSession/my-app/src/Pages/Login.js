import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ColorContainer = styled(Container)`
  text-align: center;
  background-color: purple; 

  @media all and (min-width: 481px) and (max-width: 768px) {
    background-color: navy;
  }
  @media all and (min-width: 769px) and (max-width: 1023px) {
    background-color: lightblue;
  }
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    background-color: green;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: white; 
  cursor: pointer;
`;

const LoginButton = styled(Button)``;
const RegisterButton = styled(Button)``;

function Login() {
  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <ColorContainer>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
    </ColorContainer>
  );
}

export default Login;