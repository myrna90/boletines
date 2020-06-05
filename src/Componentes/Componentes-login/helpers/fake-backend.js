import user from "../user.json";

export function configureFakeBackend() {
  let users = user.user;
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      //envuelve en el tiempo de espera para simular la llamada a la API del servidor
      setTimeout(() => {
        //autenticación
        if (url.endsWith("/user/authenticate") && opts.method === "POST") {
          //obtener los parámetros de la solicitud post
          let params = JSON.parse(opts.body);

          //encontrar si algún usuario coincide con las credenciales de acceso
          let filteredUsers = users.filter((user) => {
            return (
              user.name === params.name && 
              user.password === params.password
            );
          });
          if (filteredUsers.length) {
            // Si los datos de acceso son válidos, devuelva los datos de usuario.
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              name: user.name,
              lastName: user.lastName,
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            });
          } else {
            //else retorna error
            reject("El nombre o la contraseña es incorrecto");
          }

          return;
        }

        // obtener usuarios
        if (url.endsWith("/users") && opts.method === "GET") {
          // comprueba si hay un falso token de autorización en el encabezamiento y devuelve a los usuarios si es válido, esta seguridad
          // se implementa en el lado del servidor en una aplicación real
          if (
            opts.headers &&
            opts.headers.Authorization === `Básica ${window.btoa("user:user")}`
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users)),
            });
          } else {
            // La devolución del 401 no está autorizada si la ficha es nula o inválida
            resolve({ status: 401, text: () => Promise.resolve() });
          }
          return;
        }
        // pasar a través de cualquier solicitud no manejada
        realFetch(url, opts).then((response) => resolve(response));
      }, 500);
    });
  };
}
