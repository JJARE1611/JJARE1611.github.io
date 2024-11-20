//Validacion de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;
  if (!fname || !flastname || !fphone || !femail) {
    event.preventDefault();
    alert("Por favor, complete todos los campos requeridos");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  }
});

//Crear funcion validar email
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+/;
  return re.test(String(femail).toLowerCase);
}
