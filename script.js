// Variables
const calculadora = document.getElementById('calculadora') // Obtiene el elemento de la calculadora
const resultado = document.getElementById('resultado') // Obtiene el elemento del resultado

// Operaciones
let operaciones = []; // Array para almacenar las operaciones

// Metodo para añadir numeros
const añadirNumeros = (e) => {

    // Se valida si el elemento es un boton
    if (e.target.getAttribute('type') === 'button') {

        // Se valida si el elemento es un numero
        if (e.target.className != 'operacion') {

            // Añade el número al resultado
            resultado.value += e.target.innerText;
        };

        // Se valida si el elemento es una operacion
        if (e.target.id === 'sumar') {

            // Se añade el resultado al array de operaciones
            operaciones.push(resultado.value);
            operaciones.push('+');

            // Se limpia el resultado
            calculadora.reset();
        };

        // Se valida si el elemento es igual
        if (e.target.id === 'igual') {

            // Añade el último número al array de operaciones
            operaciones.push(resultado.value);

            // Resetea la calculadora
            calculadora.reset();

            // Evalúa la operación y muestra el resultado
            const resultadoOperacion = eval(operaciones.join(''));
            resultado.value = resultadoOperacion;

            // Limpia el array de operaciones
            operaciones = [];
        };

        // Se valida si el elemento es una operacion
        if (e.target.id === 'restar') {

            // Añade el resultado al array de operaciones
            operaciones.push(resultado.value);
            operaciones.push('-');

            // Resetea la calculadora
            calculadora.reset();
        };

        // Se valida si el elemento es una operacion
        if (e.target.id === 'multiplicar') {

            // Añade el resultado al array de operaciones
            operaciones.push(resultado.value);
            operaciones.push('*');

            // Resetea la calculadora
            calculadora.reset();
        };

        // Se valida si el elemento es una operacion
        if (e.target.id === 'dividir') {

            // Añade el resultado al array de operaciones
            operaciones.push(resultado.value);
            operaciones.push('/');

            // Resetea la calculadora
            calculadora.reset();
        };

        // Se valida si el elemento es una operacion
        if (e.target.id === 'clear') {

            // Limpia el array de operaciones
            operaciones = [];

            // Resetea la calculadora
            calculadora.reset();
        };
    };
};

// Eventos de la calculadora
calculadora.addEventListener('click', añadirNumeros) // Añade un evento de click a la calculadora