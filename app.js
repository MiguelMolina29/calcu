console.log('Holi');


const contenedor = document.querySelector('.ultimo');

let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener('click', resultado);

function resultado(e) {
    e.preventDefault();
    
    // Edad metabolica

    let docpeso = document.getElementById('peso');
    let peso = docpeso.value;

    let docaltura = document.getElementById('altura');
    let altura = docaltura.value;

    let docanos = document.getElementById('anos');
    let anos = docanos.value;

    let docGenero = document.getElementById('genero');
    let genero = docGenero.value;

    console.log('Metabolico');

    if(genero === 'hombre' || genero === 'Hombre') {
        let meta = parseInt((peso+anos)/altura - 18); // hombre
        function contenido(meta) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p> Tu edad metabolica es: ${meta} años</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(meta)
        console.log(meta);
    }else if (genero === 'mujer' || genero === 'Mujer') {
        let meta = parseInt((peso+anos)/altura - 5); // mujer
        function contenido(meta) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Tu edad metabolica es: ${meta} años</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(meta)
        console.log(meta)
    } else {
        console.log('No hay nada');
    }


    // Horas de sueño

    let calAnos = document.getElementById('anos')
    let edad = parseInt(calAnos.value);
    let mensaje;
    console.log('Sueño');

    if(edad == 1 || edad === 2) {
        mensaje = 'tienes que dormir de 14 a 17 horas';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if(edad == 3 || edad === 4 || edad === 5){
        mensaje = 'tienes que dormir de 10 a 13 horas';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if(edad == 6 || edad === 7 || edad === 8 || edad === 9 || edad === 10 || edad === 11) {
        mensaje = 'tienes que dormir entre 9 y 11';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>   
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if (edad === 14 || edad === 15 || edad === 16 || edad === 17){
        mensaje = 'tienes que dormir 10 horas'
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if (edad === 18 || edad === 19 || edad === 20 || edad === 21 || edad === 22 || edad === 23 || edad === 24 || edad === 25) {
        mensaje = 'tienes que dormir entre 7 y 9 horas';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if (edad >= 26 && edad <= 64) {
        mensaje = 'lo ideal sería dormir 7 y 9 horas aunque no siempre se logra';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }else if (edad >= 65) {
        mensaje = 'lo saludable es descansar entre 7 a 8 horas al día';
        function contenido(mensaje) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>Horas de sueño: ${mensaje}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(mensaje)
    }

    // Ejercicio

    let calEjer = document.getElementById('anos')
    let ejercicio = parseInt(calEjer.value);
    let texto;

    console.log('Ejercicio:');
    if(ejercicio <= 17) {
        texto = 'Invertir en actividad moderada de 60 minutos';
        function contenido(texto) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>${texto}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(texto)
    } else if(ejercicio >=18 && ejercicio <=64) {
        texto = 'Ejercicio minimo de 150 min a la semana';
        function contenido(texto) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>${texto}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(texto)
    } else if (ejercicio >= 65){
        texto = 'Ejercicio de sesiones de 10 min';
        function contenido(texto) {
            const dib = document.createElement('div');
            const agregarDiv = `
                <p>${texto}</p>
            `
            dib.innerHTML = agregarDiv;
            contenedor.append(dib);
        }
        contenido(texto)
    }

}

