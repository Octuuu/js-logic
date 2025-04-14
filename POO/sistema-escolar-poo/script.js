import Alumno from './models/Alumno.js';

const listaAlumnos = [];
const form = document.getElementById('form-alumno');
const lista = document.getElementById('lista-alumnos');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre-alumno').value;
  const apellido = document.getElementById('apellido-alumno').value;
  const dni = document.getElementById('dni-alumno').value;

  const nuevoAlumno = new Alumno(nombre, apellido, dni);
  listaAlumnos.push(nuevoAlumno);

  renderAlumnos();
  form.reset();
});

function renderAlumnos() {
  lista.innerHTML = '';
  listaAlumnos.forEach((alumno, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${alumno.obtenerNombreCompleto()} (DNI: ${alumno.dni})`;
    lista.appendChild(item);
  });
}
