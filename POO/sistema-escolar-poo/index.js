import Alumno from './models/Alumno.js';
import Profesor from './models/Profesor.js';
import Materia from './models/Materia.js';
import Curso from './models/Curso.js';
import Nota from './models/Nota.js';
import Asistencia from './models/Asistencia.js';

// Crear instancias
const alumno1 = new Alumno('Juan', 'Pérez', '12345678');
const profesor1 = new Profesor('Laura', 'Martínez', '87654321', 'Matemáticas');
const materia1 = new Materia('Matemáticas');
const curso1 = new Curso('1° A');

// Armar relaciones
curso1.agregarAlumno(alumno1);
curso1.asignarProfesor(profesor1);
materia1.asignarCurso(curso1);
profesor1.asignarMateria(materia1);

// Agregar nota y asistencia al alumno
const nota1 = new Nota(4, materia1.nombre);
alumno1.agregarNota(nota1);

const asistencia1 = new Asistencia(new Date(), true);
alumno1.registrarAsistencia(asistencia1);

// Mostrar
console.log(alumno1);
console.log(profesor1);
console.log(curso1);
