import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container'>
      <h1>React Wizard Form 🧙‍♂️</h1>
      <p>Step {currentStep} </p>

      <form>
        <Step1 />
        <Step2 />
        <Step3 />
        </form>
    </div>
  );
}

function Step1() {
  return (
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
      />
    </div>
  );
}

function Step2() {
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
      />
    </div>
  );
}

function Step3() {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          id='password'
          name='password'
          type='password'
          placeholder='Enter password'
        />
      </div>
    </>
  );
}

export default App;
