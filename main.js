//Validacion de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;
  const fcontr = form.elements["fcontr"].value;
  const fconcontr = form.elements["fconcontr"].value;
  const fsexo = form.elements["fsexo"].value;
  const fespe = form.elements["fespe"].value;
  if (!fname || !flastname || !fphone || !femail) {
    event.preventDefault();
    alert("Por favor, complete todos los campos requeridos");
  } else if (fphone.length < 10) {
    event.preventDefault();
    alert("Ingrese un numero telefonico valido.");
    return;
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else if (!fsexo) {
    event.preventDefault();
    alert("Por favor, seleccione su sexo.");
    return;
  } else if (fespe === "") {
    event.preventDefault();
    alert("Por favor, ingrese su especialidad.");
    return;
  } else if (fcontr.length < 6) {
    event.preventDefault();
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  } else if (fcontr !== fconcontr) {
    event.preventDefault();
    alert("Las contraseñas no coinciden.");
    return;
  }
});

//Crear funcion validar email
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(femail).toLowerCase());
}
