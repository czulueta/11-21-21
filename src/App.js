import React from "react" 
import { Switch, Route, Redirect } from "react-router-dom" 
import Navbar from "./components/Navbar.js" 
import Auth from "./components/Auth.js" 
import Profile from "./components/Profile.js" 
import Public from "./components/Public.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"

export default function App(){
  return(
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() => token ? <Redirect to="/profile"/> : <Auth />} />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          token={token}
          redirectTo="/" />
        <ProtectedRotue
          path="/public"
          component={Public}
          token={token}
          redirectTo="/" />
      </Switch>
    </div>
  )
}