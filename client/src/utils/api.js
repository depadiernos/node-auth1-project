import axios from "axios"


export const api = () => {
  return axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export const LoginUser = async (credentials) => {
  const res = await api().post("/api/login", credentials)
  return res.data
}

export const SignupUser = async (user) => {
  const res = await api().post("/api/register", user)
  return res.data
}

export const GetUsers = async () => {
  const res = await api().get("/api/users/")
  console.log(res)
  return res.data
}
