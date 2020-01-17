import axios from "axios"

export function getToken() {
  return localStorage.getItem("token")
}

export default function() {
  return axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json"
    }
  })
}

export const LoginUser = async (credentials) => {
  const res = await api().post("/api/login", credentials)
  setToken(res.data.token)
  return res.data
}

export const SignupUser = async (user) => {
  const res = await api().post("/api/register", user)
  return res.data
}

export const GetUsers = async (entry) => {
  const res = await api().post("/api/users/", entry)
  return res.data
}
