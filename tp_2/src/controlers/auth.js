import axios from "axios";
const url = "https://api.joeleprof.com/tec-map/";
export async function login(email, password) {
  const body = {
    email: email,
    password: password,
  };
  const { data } = await axios.post(`${url}auth/login`, body);
  if (!data) {
    return false;
  }
  sessionStorage.setItem("token", data.token);
  return true;
}
export const RegistreUser = async (body) => {
  const { data } = await axios.post(`${url}auth/register`, body); // Requête POST pour envoyer les données de l'utilisateur à l'API pour l'inscription
  if (data.success) {
    // Si la propriété "success" de la réponse est vraie, cela signifie que l'inscription a réussi
    return true; // Renvoie "true" pour indiquer que l'inscription a réussi
  }
  // Si l'inscription a réussi, on stocke le token d'authentification et le statut "isAdmin" dans le sessionStorage
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("isAdmin", data.isAdmin);
};
