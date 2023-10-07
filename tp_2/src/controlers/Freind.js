import axios from "axios"; // Importation du module Axios pour effectuer des requêtes HTTP
const url = "https://api.joeleprof.com/tec-map/friends/";
export const AddFreind = async (id) => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis la variable sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  const requestData = {
    // Si nécessaire, vous pouvez inclure des données à envoyer avec la requête POST
    // Par exemple: { friendId: id }
  };
  const { data } = await axios.post(`${url}${id}`, requestData, config); // Requête GET pour récupérer les informations de l'utilisateur
  console.log(data.data);
};
// get freind

export const listAmi = async () => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const confi = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  const { data } = await axios.get(`${url}`, confi); // Requête GET pour récupérer la liste des utilisateurs
  if (!data) {
    // Vérification si les données de la réponse existent (au cas où la réponse serait vide)
    return []; // Si la réponse est vide, on renvoie un tableau vide
  }
  console.log(data);
  return data.data; // Sinon, on renvoie les données des utilisateurs présentes dans la propriété "data" de la réponse
};
export const deleteAmie = async (id) => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const confi = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  await axios.delete(`${url}users/${id}`, confi); // Requête DELETE pour supprimer l'utilisateur spécifié par son ID
};
