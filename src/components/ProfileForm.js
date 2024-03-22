import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import AuthContext from './Auth-Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const ProfileForm = () => {
  const history = useHistory();
  const newPassWordInputRef=useRef();
  
  const authCtx=useContext(AuthContext);
  const submitHandler =event =>{
    event.preventDefault();

    const enteredNewPassword =newPassWordInputRef.current.value;

//add validation
fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC1IXLN20_EreGYaxaaP4J9YTyTAH5OvwI',
{
  method:'POST',
  body:JSON.stringify(
    {
      idToken:authCtx.token,
      password:enteredNewPassword,
      returnSecureToken:false
    }
  ),
  headers:{
    'Content-type':'application/json'
  }
}).then(res =>{
history.replace('/');
});

  };
  return(
  
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'minLength="7"  ref={newPassWordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;