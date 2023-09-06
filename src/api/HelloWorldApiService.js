import { apiClient } from "./ApiClient";

export const retrieveHelloWorldBean 
    = () => apiClient.get('hello-world-bean')

export const retrievehelloWorldPathVariable 
    = (username, token) => apiClient.get(`hello-world/path-variable/${username}`)
