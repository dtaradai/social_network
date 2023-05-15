import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f715c62b-8298-4c00-bcdc-3cebcc324341'
  }
});

export const usersAPI = {
  getUsers(curentPage = 1, count = 10) {
    return instance.get(`users?count=${count}&page=${curentPage}`)
      .then(response => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`)
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`)
  },
}