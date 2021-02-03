import React from 'react';
import './App.css';

import { auth, provider } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogoutState, selectUserName, selectUserEmail} from './features/userSlice';

function App() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      //ci-dessous action.payload
      dispatch(setActiveUser({
        userName: result.user.displayName,
        userEmail: result.user.email
      }))
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogoutState())
    }).catch((err) => alert(err.message))
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          userName ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <button onClick={handleSignIn}>Sign In</button>
          )
        }
      </header>
    </div>
  );
}

export default App;
