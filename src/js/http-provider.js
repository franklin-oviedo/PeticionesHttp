import { crearFilaUsuario } from "./usuarios-page";

const apiChuck = 'https://api.chucknorris.io/jokes/random';
 const url = `https://reqres.in/api/users`;



 const obtenerChiste = async () => {
    try {
        const resp = await fetch(apiChuck);
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (error) {
        throw Error(error);
    }
}

 const obtenerPagina = async (idPage) => {
    try {
        const resp = await fetch(`${url}?page=${idPage}`).then(resUser => resUser.json());
        const {data} = resp;
        const userLength = data.length; 
        (userLength === 0)? console.log(`No existen datos en la pagina ${idPage}`) : data.forEach(element => {
            return crearFilaUsuario(element);
        });    

    } catch (error) {
        throw error;
    }
}

 const obtenertUsuario = async (idUser) => {
    const resp = await fetch(`${url}/${idUser}`);
    const data = await resp.json();
    console.log(data);
}

const createUser = async (usuario) => {
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return await resp.json()
}

const updateUser = async (id, user) => {
    const resp = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    return await resp.json();
}

const deleteUser = async(id) => {
    const resp = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok)? 'Borrado' : 'No se pudo eliminar';
}

export{
    url,
    obtenerChiste,
    obtenerPagina,
    obtenertUsuario,
    createUser,
    updateUser,
    deleteUser
}