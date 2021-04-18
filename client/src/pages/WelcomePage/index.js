import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Btn';
import Input from '../../components/Input';
import heroImage from '../../Assets/10894.jpg';
import logo from '../../Assets/The-Rudolf-Name-for-Website.png';
import { useForm } from '../../hooks/useForm';
import { login, registerUser } from '../../services/user';

import './WelcomePage.scss';

const WelcomePage = () => {
  const history = useHistory();
  const [content, setContent] = useState('login');
  const [error, setError] = useState('');
  const [fields, setFields] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = fields;

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials)
      .then((response) => {
        if (response.data) {
          localStorage.setItem('todo-app', response.data);
          history.push('/todos');
        }
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    registerUser(user)
      .then((response) => {
        if (response.data) {
          setContent('login');
        }
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <div className="welcomepage">
      <div className="welcomepage__hero">
        <img
          className="welcomepage__hero-img"
          src={heroImage}
          alt="sales illustration"
        />
      </div>
      <div className="welcomepage__login">
        {content === 'login' && (
          <div className="welcomepage__form">
            <div className="welcomepage__logo-div">
              <img
                className="welcomepage__logo"
                src={logo}
                alt="The Rudolf logo"
              />
            </div>
            <h1 className="welcomepage__heading">Login</h1>
            <Input
              setValue={setFields}
              value={email}
              id="email"
              label="Email"
              type="email"
            />
            <Input
              setValue={setFields}
              value={password}
              id="password"
              label="Password"
              type="password"
            />

            <div className="welcomepage__btn-div">
              <Button handleClick={handleLogin} text="Login" />
            </div>
            <p className="welcomepage__text">
              Don't have an account?{' '}
              <span
                onClick={() => setContent('register')}
                className="welcomepage__text welcomepage__text--link"
              >
                Register
              </span>
            </p>
          </div>
        )}
        {content === 'register' && (
          <div className="welcomepage__form">
            <div className="welcomepage__logo-div">
              <img
                className="welcomepage__logo"
                src={logo}
                alt="The Rudolf logo"
              />
            </div>
            <h1 className="welcomepage__heading">Register</h1>
            <Input
              setValue={setFields}
              value={name}
              id="name"
              label="Full Name"
              type="text"
            />
            <Input
              setValue={setFields}
              value={email}
              id="email"
              label="Email"
              type="email"
            />
            <Input
              setValue={setFields}
              value={password}
              id="password"
              label="Password"
              type="password"
            />

            <div className="welcomepage__btn-div">
              <Button handleClick={handleRegister} text="Register" />
            </div>
            <p className="welcomepage__text">
              Already have an account?{' '}
              <span
                onClick={() => setContent('login')}
                className="welcomepage__text welcomepage__text--link"
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
