import axios from 'axios'

export const rootAPI = axios.create({baseURL: 'https://swapi.dev/api/'})
