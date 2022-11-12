import { createUser, deleteUser, obtenerPagina, updateUser, url } from "./http-provider";

const body = document.body;
let tBody, btnId;
let num = 1;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);
    tBody = document.querySelector('tbody');
}

export const crearFilaUsuario = async({id, first_name, last_name, email, avatar }) => {

        const html = `
        <td scope="col"> ${num++} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name} ${last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
        <td scope="col"><button id=${id} class="btn btn-primary" onclick=>Ver Usuario</button></td>
    `;
        const tr = await document.createElement('tr');
        tr.innerHTML = await html;
        tBody.appendChild(tr);
        
        btnId = await document.getElementById('1');
        btnId.addEventListener('click', async () =>{
            console.log('jola')
        })

}

export const init = async () => {

    crearHtml();
    obtenerPagina(1);
    createUser({
        name: 'Franklin',
        job: 'Developer'
    }).then(console.log);
    updateUser(1, {
        name: 'Franklin',
        job: 'Developer'
    }).then(console.log);
    deleteUser(1).then(console.log)
}