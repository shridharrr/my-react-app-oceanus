import { useState } from 'react';
import logo from './logo.svg';
import Textbox from './Textbox';



function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {

    }).catch(err => {
      
    })

    e.preventDefault();
  }

  return <section>
  <div className="pic">
      <img src="image 15.png"/>
  </div>
  <div className="contentBx">
    <div className="formBx">
      <div className="imag">
        <img src="Frame.png" height="150px" width="130px"/>
      </div>
      <h1>LOGIN</h1>
      <div>
      <h5>Welcome to Oceanus</h5>
    </div>
    <form onSubmit={onSubmit}>
        <div className="inputBx">
          <input type="email" name="" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
          <input type="password" name="" placeholder="Password"  onChange={e => setPassword(e.target.value)} required/> 
        </div>
        <div className="remember">
          <label><input type="checkbox" name=""/>Remember Me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="inputBx1">Login</button>
        <div className="inputBx">
          <p>Dont have an account? <a href="#">Sign up</a></p>
        </div>
      </form>
    </div>
  </div>
</section>
}

export default App;
