import axios from "axios";
const url = "https://api.joeleprof.com/tec-map/position";
export const putPosition = async (data) => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  await axios.put(`${url}`, data, config); // Requête PUT pour mettre à jour les informations de l'utilisateur
};
// //api.joeleprof.com/tec-map/position/friends

// https:
export const getPosition = async () => {
  const token = sessionStorage.getItem("token"); // Récupération du token depuis le sessionStorage
  const config = {
    headers: { Authorization: `Bearer ${token}` }, // Configuration des en-têtes pour inclure le token d'authentification
  };
  await axios.get(`${url}friends`, config); // Requête PUT pour mettre à jour les informations de l'utilisateur
};
