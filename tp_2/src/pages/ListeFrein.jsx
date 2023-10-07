import React, { useState, useEffect } from "react";
import { listAmi, deleteAmie } from "../controlers/Freind";
import { Link } from "react-router-dom";

const ListeFreind = () => {
  const [getData, setGetData] = useState([]);
  const [isFirstLoad, setIsfirstLod] = useState(true);

  const find = async () => {
    const data = await listAmi();
    setTimeout(() => {
      setIsfirstLod(false);
      setGetData(data);
    }, 2000);
  };

  useEffect(() => {
    if (isFirstLoad) {
      try {
        find();
      } catch (error) {
        console.log(error);
      }
    }
  }, [isFirstLoad]);

  const handleDeleteFriend = async (id) => {
    try {
      await deleteAmie(id);
      find();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'ami :", error);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <div className="navbar-item">Home</div>
        </Link>
        <Link to="/users">
          <div className="navbar-item">Liste des Utilisateurs</div>
        </Link>
      </div>
      <div className="contain_user">
        <h3>Liste des Amis existants</h3>
        <table className="grand-table">
          <thead>
            <tr>
              <th>Informations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.length === 0 ? (
              <tr>
                <td colSpan="2">
                  <div className="spinner"></div>
                </td>
              </tr>
            ) : (
              getData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <img src="/icone.png" alt="logo" className="logo" />
                      <div>
                        {user.username}
                        <br />
                        {user.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <Link
                      className="info-user"
                      onClick={() => handleDeleteFriend(user.id)} // Appel de la fonction handleDeleteFriend avec l'ID de l'ami
                    >
                      Supprimer Amie
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Link to="/users">
          <button>Retour à la Liste des Utilisateurs</button>
        </Link>
      </div>
    </div>
  );
};

export default ListeFreind;
