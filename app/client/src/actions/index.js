

export const login = (token) =>  {

    return {
        type:"AUTH_USER",
        data:token
    }
    
}

export const logout = () => {

    return {
        type:"AUTH_USER",
        data:""
    }
}