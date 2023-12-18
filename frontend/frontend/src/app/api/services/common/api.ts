import axios, { AxiosResponse } from "axios";
import { UserType } from "../models/user.interface";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

/* 
api call for user, if code too long, you can split to a new file
endpoint, call promise.
ex: User.getUsers().then ...
*/
export const User = {
  getUsers: (): Promise<UserType[]> => requests.get("users"),
  getAUser: (id: number): Promise<UserType> => requests.get('users/${id}'),
  createUser: (post: UserType): Promise<UserType> =>
    requests.post("users", post),
  updateUser: (post: UserType, id: number): Promise<UserType> =>
    requests.put('users/${id}', post),
  deleteUser: (id: number): Promise<void> => requests.delete('users/${id}'),
};