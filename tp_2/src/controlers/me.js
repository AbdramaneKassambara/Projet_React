import axios from "axios"; // Importation du module Axios pour effectuer des requêtes HTTP
const url = "https://api.joeleprof.com/tec-map/me"; // Définition de l'URL de base pour les requêtes liées à l'utilisateur connecté
// Fonction pour mettre à jour les informations de l'utilisateur connecté
export const Putme = async (data) => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  await axios.put(`${url}`, data, config); // Requête PUT pour mettre à jour les informations de l'utilisateur
};
// Fonction pour récupérer les informations de l'utilisateur connecté
export const Getme = async () => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis la variable sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  const { data } = await axios.get(`${url}`, config); // Requête GET pour récupérer les informations de l'utilisateur
  // Création d'un objet "listme" contenant les informations de l'utilisateur récupérées depuis la réponse de l'API
  // Création d'un tableau "array_user" pour stocker les informations de l'utilisateur
  const array_user = [];
  array_user.push(data.data);
  return array_user; // Renvoie un tableau contenant les informations de l'utilisateur
};
// Fonction pour supprimer le compte de l'utilisateur connecté
export const deleteMe = async () => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  await axios.delete(`${url}`, config); // Requête DELETE pour supprimer le compte de l'utilisateur
};
