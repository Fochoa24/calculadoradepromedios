let resultadoElement = document.getElementById("resultado");
let calificacion1Element = document.getElementById("calificacion1");
let calificacion2Element = document.getElementById("calificacion2");
let calificacion3Element = document.getElementById("calificacion3");

function calcularPromedio() {
    // Obtener los valores de las calificaciones
    const calificacion1 = parseFloat(calificacion1Element.value);
    const calificacion2 = parseFloat(calificacion2Element.value);
    const calificacion3 = parseFloat(calificacion3Element.value);

    // Verificar si las entradas son números válidos
    if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
        alert("Por favor, ingresa calificaciones válidas.");
        return;
    }

    // Calcular el promedio
    const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Mostrar el resultado en la página usando switch
    switch (true) {
        case promedio >= 9:
            resultadoElement.innerHTML = "¡Excelente! El promedio es: " + promedio.toFixed(2);
            break;
        case promedio >= 6:
            resultadoElement.innerHTML = "Buen trabajo. El promedio es: " + promedio.toFixed(2);
            break;
        default:
            resultadoElement.innerHTML = "Necesitas mejorar. El promedio es: " + promedio.toFixed(2);
            break;
    }
}

function borrarResultado() {
    // Limpiar el contenido del elemento resultado y los campos de entrada
    resultadoElement.innerHTML = "";
    calificacion1Element.value = "";
    calificacion2Element.value = "";
    calificacion3Element.value = "";
}

function borrarOperacion() {
    // Limpiar solo los campos de entrada
    calificacion1Element.value = "";
    calificacion2Element.value = "";
    calificacion3Element.value = "";
}
