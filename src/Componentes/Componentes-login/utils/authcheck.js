import React, { useEffect, useContext } from 'react';
import history from './history';
import context from './context';
import * as ACTIONS from '../store/actions/actions';



const AuthCheck = () => {
  const context = useContext(context)

  useEffect(() => {
    if(context.authObj.isAuthenticated()) {
      context.handleUserLogin()
      context.handleUserAddProfile(context.authObj.userProfile)
      history.replace('/')
    }
    else {
      context.handleUserLogout()
      context.handleUserRemoveProfile()
      history.replace('/')
      }
    }, [])

    return(
        <div>
        </div>
    )}




export default AuthCheck;