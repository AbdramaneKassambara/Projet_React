import axios from "axios"; // Importation du module Axios pour effectuer des requêtes HTTP
const url = "https://api.joeleprof.com/tec-map/"; // Définition de l'URL de base pour les requêtes liées aux utilisateurs
// Fonction pour récupérer la liste des utilisateurs
export const users = async () => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const confi = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  const { data } = await axios.get(`${url}users`, confi); // Requête GET pour récupérer la liste des utilisateurs
  if (!data) {
    // Vérification si les données de la réponse existent (au cas où la réponse serait vide)
    return []; // Si la réponse est vide, on renvoie un tableau vide
  }
  console.log(data);
  return data.data; // Sinon, on renvoie les données des utilisateurs présentes dans la propriété "data" de la réponse
};
