import { AUTHENTICATED, NOT_AUTHENTICATED } from './index';

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime())
}

export const getToken = () =>{
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 30 * 60 * 1000;
    const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');

    if(timeSinceLastLogin < thirtyMinutes){
        return sessionStorage.getItem('token')
    }
}

export const signup = (credentials, dispatch) => {
    const url = "http://localhost:8080/users";

    fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(async (response) => {
        if(response.ok){
            setUserSession(response.headers.get("Authorization"))
            const userJson = await response.json();
            dispatch({ type: AUTHENTICATED, payload: userJson });
        }else{
            response.json()
                .then((error) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(error);
                })
        }
    })
}

export const login = (credentials, dispatch)  => {
    const url = "http://localhost:8080/users";

    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(async (response) => {
        if(response.ok){
            setUserSession(response.headers.get("Authorization"));
            const userJson = await response.json();
            dispatch({ type: AUTHENTICATED, payload: userJson });
        }else{
            response.json()
                    .then((error) => {
                        dispatch({type: NOT_AUTHENTICATED})
                        return Promise.reject(error);
                })
        }
    })
}

export const logout = (dispatch) => {

    const url = "http://localhost:8080/logout";

    fetch(url, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            " Content-Type": "application/json",
            "Authorization": getToken()
        }        
    }).then(async (response) => {
        if(response.ok){
            await response.json();
            return dispatch({ type: NOT_AUTHENTICATED });
        }else{
            response.json()
                .then((error) => {
                    dispatch({type: NOT_AUTHENTICATED})
                    return Promise.reject(error);
                })
        }
    })

}