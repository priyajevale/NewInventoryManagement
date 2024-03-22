// import { useState, useRef,useContext } from 'react';
// import React from 'react';
// import classes from './AuthForm.module.css';
// import AuthContext from './Auth-Context';
// const AuthForm = () => {
//   const emailInputRef=useRef();
//   const passwordInputRef=useRef();
//   const authCtx=useContext(AuthContext);
  
  
//   const [isLogin, setIsLogin] = useState(true);
// const[isLoading,setIsLoading]=useState(false);
//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };
//   const submitHandler=(event) =>{
//     event.preventDefault();

// const enteredEmail= emailInputRef.current.value;
// const enteredPassword = passwordInputRef.current.value;
// setIsLoading(true);
// let url;
// if(isLogin){
// url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
// }else{
//   url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
 
// }
// fetch (
//   url,
// {
//   method:'POST',
//   body:JSON.stringify({
//     email:enteredEmail,
//     password:enteredPassword,
//     returnSecureToken:true
//   }),
//   headers:{
//     'Content-type':'application/json'
//   },
// }
// ).then((res) =>{
//   setIsLoading(false);
//   if(res.ok){
//     return res.json();

//   }else{
// return res.json().then((data) =>{
// let errorMessage = 'Authentication failed!';
// // if(data && data.error && data.error.message){
// //   errorMessage = data.error.message;
// // }

// throw new Error(errorMessage);


// });
//   }
// }).then(data =>{
// authCtx.login(data.idToken);
// }).catch((err) =>{
//   alert(err.message);
// });
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password'>Your Password</label>
//           <input
//             type='password'
//             id='password'
//             required ref={passwordInputRef}
//           />
//         </div>
//         <div className={classes.actions}>
//         {!isLoading &&<button>{isLogin ? 'Login' : 'Create Account'}</button>}
//           {isLoading && <p>Sending request...</p>}
//           <button
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;
// import { useState, useRef, useContext } from 'react';
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import classes from './AuthForm.module.css';
// import AuthContext from './Auth-Context';

// const AuthForm = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const authCtx = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;
//     setIsLoading(true);

//     let url;
//     if (isLogin) {
//       url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
//     } else {
//       url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
//     }

//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((res) => {
//       setIsLoading(false);
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error('Authentication failed!');
//       }
//     })
//     .then(data => {
//       authCtx.login(data.idToken);
//     history.replace('/');
//     })
//     .catch((err) => {
//       alert(err.message);
//     });
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password'>Your Password</label>
//           <input
//             type='password'
//             id='password'
//             required ref={passwordInputRef}
//           />
//         </div>
//         <div className={classes.actions}>
//           {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
//           {isLoading && <p>Sending request...</p>}
//           <button
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;
import { useState, useRef, useContext } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import classes from './AuthForm.module.css';
import AuthContext from './Auth-Context';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory(); // Obtain history object using useHistory

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);

    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI";
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Authentication failed!');
      }
    })
    .then(data => {
      authCtx.login(data.idToken);
      history.replace('/'); // Use history object for navigation
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;