// Definir el objeto Alumno
function Alumno(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
}



// Cargar la lista de alumnos desde LocalStorage al inicio
const storedAlumnos = localStorage.getItem('listaAlumnos');
const listaAlumnos = storedAlumnos ? JSON.parse(storedAlumnos) : [];

    function guardarListaAlumnosEnLocalStorage(){
        // Guardar lista de alumnos en localstorage
        localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));
    }



// Agregar algunos estudiantes a la lista
listaAlumnos.push(new Alumno("Estudiante1", [8, 9, 7]));
listaAlumnos.push(new Alumno("Estudiante2", [6, 8, 7]));
listaAlumnos.push(new Alumno("Estudiante3", [9, 10, 8]));

let resultadoElement = document.getElementById("resultado");
let calificacion1Element = document.getElementById("calificacion1");
let calificacion2Element = document.getElementById("calificacion2");
let calificacion3Element = document.getElementById("calificacion3");

function calcularPromedio() {
    const calificacion1 = parseFloat(calificacion1Element.value);
    const calificacion2 = parseFloat(calificacion2Element.value);
    const calificacion3 = parseFloat(calificacion3Element.value);

    if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
        alert("Por favor, ingresa calificaciones válidas.");
        return;
    }

    const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Buscar el estudiante en la lista basándose en las calificaciones
    const estudianteEncontrado = listaAlumnos.find(alumno => {
        const promedioEstudiante = alumno.calificaciones.reduce((sum, calif) => sum + calif, 0) / alumno.calificaciones.length;
        return promedioEstudiante === promedio;
    });

    // Mostrar el resultado en la página usando switch
    switch (true) {
        case promedio >= 9:
            resultadoElement.innerHTML = `¡Excelente! El promedio es: ${promedio.toFixed(2)}`;
            break;
        case promedio >= 6:
            resultadoElement.innerHTML = `Buen trabajo. El promedio es: ${promedio.toFixed(2)}`;
            break;
        default:
            resultadoElement.innerHTML = `Necesitas mejorar. El promedio es: ${promedio.toFixed(2)}`;
            break;
    }

    if (estudianteEncontrado) {
        resultadoElement.innerHTML += `<br>Estudiante encontrado: ${estudianteEncontrado.nombre}`;
    }
}

function borrarResultado() {
    resultadoElement.innerHTML = "";
    calificacion1Element.value = "";
    calificacion2Element.value = "";
    calificacion3Element.value = "";
    // Guardar la lista de alumnos en el localstorage despues de borrar
    guardarListaAlumnosEnLocalStorage();
}

function borrarOperacion() {
    calificacion1Element.value = "";
    calificacion2Element.value = "";
    calificacion3Element.value = "";
}


// Deteccion de eventos
document.getElementById('calcularBtn').addEventListener('click', calcularPromedio);
document.getElementById('reiniciarBtn').addEventListener('click', borrarResultado);