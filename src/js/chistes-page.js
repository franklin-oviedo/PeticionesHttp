import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
let i = 1;

const crearHtml  = () => {
    const html = `
    <h1 class="mt-5">Chistes de Chuck Norris</h1>
    <hr>
    <button class="btn btn-primary">Ver Chiste</button>
    <ol class="mt-2 list-group">
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {
        try {
            btnOtro.disabled = true;
            dibujarChiste(await obtenerChiste());
            btnOtro.disabled = false;
            return 
        } catch (error) {
            throw error;
        }
    })
}

const dibujarChiste = ({value}) => {
    const olItem =  document.createElement('li');
    olItem.innerHTML = `<b>${i++}=></b> ${value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

export const init = () => {
    crearHtml();
    eventos();
}