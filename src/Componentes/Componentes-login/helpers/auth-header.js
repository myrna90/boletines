export function authHeader() {
  //retorna la cabecera de autorización con las credenciales de autorización básicas
  let user = JSON.parse(localStorage.getItem('user'));

  if(user && user.authdata) {
      return { 'Autorización': 'Básica ' + user.authdata };
  } else {
      return {};
  }
}


/*
auth(){
    fetch('http://localhost:3000/users',
    {
      method: 'GET',
      headers: {
        name: '',
        password: '',
        //Authorization: 'Bearer Token',
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((users) => {
    this.setState({users: users})
  })
  }

  /*authLogin() {
    axios({
      url: 'http://10.10.1.24:3000/auth/signin',
      method: 'post',
      data: JSON.stringify(cn),
      headers: {
        Authorization: 'Bearer Token',
        'Content-Type': 'application/json'
      }
    }).then(Response => {
      //
      return Response.data
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }*/
