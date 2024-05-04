import React from 'react';
// import './register.scss';
import { loginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
  return (
    <div className="main-page">
        <div className="left">
          <img src={loginBg} alt="bgimage" className="bg-image"/>
        </div>
        <div className="right">
          <p className="title">Login</p>
          <Input label="Email" placeholder="Email"/>
          <Gap height={15} />
          <Input label="Password" placeholder="Password"/>
          <Gap height={20}/>
          <Button title="Login"/>
          <Gap height={100} />
          <Link title="Belum punya akun? Silahkan Daftar"/>
        </div>
    </div>
  )
}

export default Login