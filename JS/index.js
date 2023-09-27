(function () {
   
    let numero = document.getElementsByClassName('boton')[0];
    let remover = document.getElementById('principal');
    let aplicar = document.getElementById('hoja2');
    let cuerpo = document.body;
    numero.addEventListener('click', () => {
        cuerpo.removeChild(remover);
        cuerpo.appendChild(aplicar);

        aplicar.style.opacity = '1';
        aplicar.style.zIndex = 'null';
    });

    let botones = document.querySelectorAll("input[name='radio']");
    let num1 = document.getElementsByClassName('eleccion1');
    let num2 = document.getElementsByClassName('eleccion2');
    let num3 = document.getElementsByClassName('eleccion3');
    let num4 = document.getElementsByClassName('eleccion4');
    let num5 = document.getElementsByClassName('eleccion5');
    let result = document.getElementById('resultado');

    let encontrar = () => {
        let selected = document.querySelector("input[name='radio']:checked").value;
        result.textContent = `${selected}`;
    }

    botones.forEach(boton => {
        boton.addEventListener("click", encontrar);
    });
     
    encontrar();

})()