// URL base da API
const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://screenmatch-backend.onrender.com';

export default function getDatos(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al ingresar al endpoint /series/top5:', error);
        });
}
