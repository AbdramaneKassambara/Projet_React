import React, { useState } from "react"; // Importation des modules React et useState pour gérer les états dans le composant
import { RegistreUser } from "../controlers/auth"; // Importation de la fonction RegistreUser depuis le contrôleur Registre
import { useNavigate, Link } from "react-router-dom"; // Importation des modules useNavigate et Link de react-router-dom pour gérer la navigation et les liens
const Register = () => {
  // Définition des états locaux du composant pour stocker les valeurs des champs du formulaire et les erreurs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate(); // Fonction de navigation pour rediriger l'utilisateur
  // Gestionnaire de changement pour l'email
  const onChangeEmail = (e) => {
    setEmail(e.target.value); // Met à jour l'état email avec la valeur saisie
    setErreur(""); // Réinitialise le message d'erreur
  };
  // Gestionnaire de changement pour le nom d'utilisateur
  const onChangeUsername = (e) => {
    setUsername(e.target.value); // Met à jour l'état nom d'utilisateur avec la valeur saisie
    setErreur(""); // Réinitialise le message d'erreur
  };
  const onChangefullName = (e) => {
    setfullName(e.target.value); // Met à jour l'état nom d'utilisateur avec la valeur saisie
    setErreur(""); // Réinitialise le message d'erreur
  };
  // Gestionnaire de changement pour le mot de passe
  const onChangePassword = (e) => {
    setPassword(e.target.value); // Met à jour l'état mot de passe avec la valeur saisie
    setErreur(""); // Réinitialise le message d'erreur
  };
  // Fonction pour ajouter un nouvel utilisateur en appelant la fonction RegistreUser
  const AjouteUser = async () => {
    const data = {
      email: email,
      password: password,
      username: username,
      fullName: fullName,
    };
    try {
      const put = await RegistreUser(data); // Appelle la fonction RegistreUser pour enregistrer le nouvel utilisateur
      if (put) {
        return true;
      }
    } catch (error) {
      setErreur(error.response.data.msg); // Met à jour le message d'erreur en cas d'erreur lors de l'inscription
    }
  };
  // Gestionnaire de clic pour le bouton "Sauvegarder"
  const onclickAjout = () => {
    try {
      AjouteUser(); // Appelle AjouteUser pour enregistrer le nouvel utilisateur
    } catch (error) {
      console.log(error); // Affiche une erreur dans la console en cas d'erreur lors de l'inscription (à des fins de débogage)
    }
    //navigate("/users"); // Redirige l'utilisateur vers la page "/users" après l'inscription réussie
    setErreur("Users non Inscrit"); // Affiche un message d'erreur indiquant que l'utilisateur n'est pas inscrit (peut être supprimé, car la redirection se fera avant que l'utilisateur voie ce message)
  };
  // Rendu du composant
  return (
    <div>
      <table className="ajouter-user">
        <tr key="0">
          <td colSpan="3">Inscription des Users</td>
        </tr>
        <tr>
          <td colSpan="3">
            <p className="Erreur">{erreur}</p>{" "}
            {/* Affiche le message d'erreur s'il y en a un */}
          </td>
        </tr>
        <tr>
          <td> e-mail</td>
          <td>
            <input
              type="email"
              className="input-registre"
              placeholder="New e-mail user"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </td>
        </tr>
        <tr>
          <td>username </td>
          <td>
            <input
              type="text"
              className="input-registre"
              placeholder="New  Username user "
              value={username}
              onChange={onChangeUsername}
              required
            />
          </td>
        </tr>
        <tr>
          <td>fullName </td>
          <td>
            <input
              type="text"
              className="input-registre"
              placeholder="New  Username user "
              value={fullName}
              onChange={onChangefullName}
              required
            />
          </td>
        </tr>
        <tr>
          <td>Password </td>
          <td>
            <input
              type="password"
              className="input-registre"
              placeholder="New  Username user "
              value={password}
              onChange={onChangePassword}
              required
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn-ajouter" onClick={onclickAjout}>
              Sauvegarder
            </button>
          </td>
        </tr>
      </table>
      <p className="p-inscrit">
        Vous n'avez pas de compte ?
        <Link className="lien-ins" to="/">
          Connexion
        </Link>
      </p>
    </div>
  );
};
export default Register;
