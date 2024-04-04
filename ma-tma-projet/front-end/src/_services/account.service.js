import Axios from './caller.service'

export const accountService = {
    login,
    logout,
    saveToken,
    isLogged,
};

let login =() => {
    return Axios.post('/auth/login')
}

let logout =() => {
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => { 
    let token = localStorage.getItem('token')
    return !! token
}