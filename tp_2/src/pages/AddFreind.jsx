import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AddFreind, deleteAmie } from "../controlers/Freind";

export const AjoutAndDeleteComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const addFriendAndNavigate = async () => {
    try {
      await AddFreind(id);
      await deleteAmis(id); // Utilisation de deleteAmis ici
      navigate("/users");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'ami :", error);
    }
  };

  useEffect(() => {
    addFriendAndNavigate();
  }, [id, navigate]);

  const deleteAmis = async (idToDelete) => {
    try {
      await deleteAmie(idToDelete);
      // Pas de navigate ici, car cela sera effectué dans addFriendAndNavigate
    } catch (error) {
      console.error("Erreur lors de la suppression de l'ami :", error);
    }
  };

  return (
    <div>
      <p>Ajout en cours...</p>
    </div>
  );
};
