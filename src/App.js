import './App.css';
import MyAccount from './components/pages/MyAccount/MyAccount'
import Publications from './components/pages/Publications/Publications'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as api from './utils/api'
import {Route, Switch, useHistory} from 'react-router-dom'
import Subscribers from "./components/pages/Subscribers/Subscribers";
import {
    addLoggedInUser
} from './features/loggedInUser/loggedInUserSlice'
import Login from "./components/pages/Login/Login";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

function App() {
    const myUserId = useSelector((state)=> state.loggedInUser.value)
    const [isActivePreloader, setIsActivePreloader] = useState(true)

    const dispatch = useDispatch()

    const history = useHistory()

    const handleLogin = async({email, password}) => {
    const userId = await api.login({email, password});
        dispatch(addLoggedInUser(userId))
        history.push(`/${userId}`)
    }


    const checkToken = () => {
        if(myUserId !== '') {
            history.push(`/${myUserId}`)
        }else {
            history.push('/signin')
        }
    }

    useEffect(()=> {
        checkToken()
    })
  return (
      <Switch>
          <Route path="/signin">
              <Login handleLogin={handleLogin}
              />
          </Route>
          <ProtectedRoute path="/publications" component={Publications}/>
          <ProtectedRoute path="/subscribers" component={ Subscribers}/>
          <ProtectedRoute exact path="/:id" component={  MyAccount}
                          isActivePreloader={isActivePreloader}
                          setIsActivePreloader={setIsActivePreloader}/>
      </Switch>
  );
}

export default App;
