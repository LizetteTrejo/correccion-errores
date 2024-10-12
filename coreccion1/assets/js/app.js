const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* lleva . (nombre de la class) */
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');


/* Como usa await entonces debe ser una función asíncrona (async) */
const displayUser = async(username) => {
  $name.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    /* Convertimos a formato JSON */
    const data = await response.json();
    console.log(data);
    /* Ponemos name, blog y location en donde faltaba */
    /* Agregamos ` ` donde habían ' ' para obtener los datos interpolados */
    $name.textContent = `${data.name}`;
    $blog.textContent = `${data.blog}`;
    $location.textContent = `${data.location}`;
  } catch (error) {
     handleError(err);
   }
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $name.textContent = `Algo salió mal: ${error}`
}

displayUser('stolinski').catch(handleError);