import React, { useState } from "react"; // Importation des modules React et useState pour gérer les états dans le composant
import { Link, useNavigate } from "react-router-dom"; // Importation des modules Link et useNavigate de react-router-dom pour gérer les liens et la navigation
import { Getme, deleteMe, Putme } from "../controlers/me"; // Importation des fonctions Getme, deleteMe et Putme depuis le contrôleur me
import {putPosition} from "../controlers/position"
function Me() {
  // Définition des états locaux du composant
  const [user, setUser] = useState([]); // État pour stocker les informations de l'utilisateur
  const [isFirstLoad, setIsfirstLod] = useState(true); // État pour indiquer si c'est le premier chargement du composant
  const [isPut, setIsPut] = useState(false); // État pour indiquer si l'utilisateur souhaite mettre à jour ses informations
  const [email, setEmail] = useState(); // État pour stocker l'email saisi pour la mise à jour
  const [lat, setlat] = useState(); 
  const [long, setlong] = useState(); // État pour stocker le nom d'utilisateur saisi pour la mise à jour
  const navigate = useNavigate(); // Fonction de navigation pour rediriger l'utilisateur
  const [erreur, setErreur] = useState(""); // État pour stocker les messages d'erreur
  // Fonction pour récupérer les informations de l'utilisateur

  const [activeTab, setActiveTab] = useState("info"); // État pour suivre l'onglet actif (par défaut "info")
  // Fonction pour changer d'onglet
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };
  const getme = async () => {
    try {
      const use = await Getme(); // Appelle la fonction Getme pour obtenir les informations de l'utilisateur
      setTimeout(() => {
        setIsfirstLod(false); // Désactive le premier chargement après un délai de 2000 ms (2 secondes)
        setUser(use); // Met à jour l'état user avec les informations récupérées
      }, 2000);
    } catch (error) {
      alert(error); // Affiche une alerte en cas d'erreur lors de la récupération des informations de l'utilisateur
    }
  };
  // Fonction pour supprimer le compte de l'utilisateur
  const deleteUser = async () => {
    try {
      await deleteMe(); // Appelle la fonction deleteMe pour supprimer le compte de l'utilisateur
    } catch (error) {
      alert(error); // Affiche une alerte en cas d'erreur lors de la suppression du compte
    }
  };
  // Fonction pour mettre à jour les informations de l'utilisateur
  const put_User = async () => {
    const data = {
      email: email,
      username: username,
    };
    if (email === "" || username === "") {
      setErreur("Veuillez remplir tous les champs"); // Affiche une erreur si l'email ou le nom d'utilisateur est vide
      return;
    }
    try {
      await Putme(data); // Appelle la fonction Putme pour mettre à jour les informations de l'utilisateur avec les nouvelles valeurs saisies
    } catch (error) {
      alert(error); // Affiche une alerte en cas d'erreur lors de la mise à jour des informations
    }
  };
   const putPos = async () => {
     const data = {
       latitude: lat,
       longtitude: long,
     };
     if (latitude === "" || longtitude === "") {
       setErreur("Veuillez remplir tous les champs"); // Affiche une erreur si l'email ou le nom d'utilisateur est vide
       return;
     }
     try {
       await putPosition(data); // Appelle la fonction Putme pour mettre à jour les informations de l'utilisateur avec les nouvelles valeurs saisies
     } catch (error) {
       alert(error); // Affiche une alerte en cas d'erreur lors de la mise à jour des informations
     }
   };
  // Vérifie si c'est le premier chargement du composant et appelle getme pour récupérer les informations de l'utilisateur
  if (isFirstLoad) {
    getme();
  }
  // Fonction de rendu pour la mise à jour des informations de l'utilisateur
  const putMeSuer = () => {
    const onChangeEmail = (e) => {
      setEmail(e.target.value); // Met à jour l'état email avec la valeur saisie
      setErreur(""); // Réinitialise le message d'erreur
    };
    const onChangeUsername = (e) => {
      setusername(e.target.value); // Met à jour l'état nom d'utilisateur avec la valeur saisie
      setErreur(""); // Réinitialise le message d'erreur
    };
    const OnclickBtnModifier = () => {
      put_User(); // Appelle put_User pour mettre à jour les informations de l'utilisateur
      alert("Modification effectuée avec succès"); // Affiche une alerte de succès après la mise à jour
      navigate("/me"); // Redirige l'utilisateur vers la page "/me"
    };
    return (
      <div className="container">
        <h4>Modifier Users</h4>
        <h5 className="Erreur">{erreur}</h5>{" "}
        {/* Affiche le message d'erreur s'il y en a un */}
        <table className="put-uer">
          {/* Tableau pour saisir les nouvelles informations de l'utilisateur */}
          <tr>
            <td>Username</td>
            <td>
              <input
                type="text"
                className="input-put"
                placeholder="New e-mail user"
                value={username}
                onChange={onChangeUsername}
              />
            </td>
          </tr>
          <tr>
            <td>E-MAIL</td>
            <td>
              <input
                type="text"
                className="input-put"
                placeholder="New  Username user "
                value={email}
                onChange={onChangeEmail}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <button className="btn-modifier" onClick={OnclickBtnModifier}>
                Modifier
              </button>{" "}
              {/* Bouton pour soumettre les modifications */}
            </td>
          </tr>
          <tr>
            <td>
              <Link to={"/me"}>
                <img src="./retoure.png" alt="" className="lien" />
              </Link>
            </td>
          </tr>
        </table>
      </div>
    );
  };
  // Rendu du composant
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className={activeTab === "info" ? "active" : ""}>
            <button onClick={() => changeTab("info")}>Informations</button>
          </li>
          <li className={activeTab === "update" ? "active" : ""}>
            <button onClick={() => changeTab("update")}>Mettre à jour</button>
          </li>
        </ul>
      </nav>
      {activeTab === "info" && (
        <div>
          <h2 className="titre">Information Personnelle de l'utilisateur</h2>
          <table className="grand-table">
            <tr>
              <th>Icone</th>
              <th>Username</th>
              <th>E-Mail</th>
              <th>fullName</th>
              <th>Action</th>
            </tr>
            {user.length === 0 ? ( // Affiche un spinner si les informations de l'utilisateur sont en cours de chargement
              <tr>
                <td colSpan="5">
                  <div className="spinner"></div>
                </td>
              </tr>
            ) : (
              // Affiche les informations de l'utilisateur sous forme de tableau
              user.map((userData) => (
                <tr key={userData.id}>
                  <td>
                    <img src="/icone.png" alt="logo" className="logo" />
                  </td>
                  <td>{userData.username}</td>
                  <td>{userData.email}</td>
                  <td>{userData.fullName}</td>
                  <td>
                    <Link
                      className="lien-ins"
                      to="/me"
                      onClick={() => setIsPut(true)}
                    >
                      <img src="./crayon.jpeg" alt="" className="me-user" />
                    </Link>
                    <Link
                      className="lien-ins"
                      to="/"
                      onClick={() => deleteUser()}
                    >
                      <img src="./delete.png" alt="" className="logo_supp" />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      )}
      {activeTab === "update" && (
        <div>
          {activeTab === "update" && putMeSuer()}{" "}
          {/* Appelle la fonction uniquement si l'onglet est "update" */}
        </div>
      )}
    </div>
  );
}
export default Me;
