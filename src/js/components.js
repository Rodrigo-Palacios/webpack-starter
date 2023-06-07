import '../css/components.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre') => {
    console.log('Creando estiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append(h1);

    //img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);


}