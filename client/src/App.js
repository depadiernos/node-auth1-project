import React from "react"
import { Route } from "react-router-dom"
import AuthForm from "./components/AuthForm"
import Users from "./components/Users"

export default function App() {
  return (
    <div>
      <Route exact path="/" render={(props) => <Users {...props} />} />
      <Route exact path="/login" render={(props) => <AuthForm {...props} isLogin />} />
      <Route exact path="/signup" render={(props) => <AuthForm {...props} />} />
    </div>
  )
}
