import { authHeader } from '../helpers/auth-header';

export const userService = {
    login,
    logout
    //getAll
};

function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    };

    return fetch('http://localhost:3000/user/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
           // el inicio de sesión es exitoso si hay un usuario en la respuesta
            if (user) {
               // almacenar los detalles de los usuarios y las credenciales básicas de autorización en el almacenamiento local 
                // para mantener al usuario conectado entre las actualizaciones de la página
                user.authdata = window.btoa(name + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // eliminar el usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('user');
}

/*function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/user', requestOptions).then(handleResponse);
}*/

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto desconexión si la respuesta 401 regresa del api
                logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}