import React from "react"
import { Route } from "react-router-dom"
import AuthForm from "./components/AuthForm"

export default function App() {
  return (
    <div>
      <Route exact path="/login" render={(props) => <AuthForm {...props} isLogin />} />
      <Route exact path="/signup" render={(props) => <AuthForm {...props} />} />
    </div>
  )
}
