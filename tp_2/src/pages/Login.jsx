import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../controlers/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [passwod, setPasswod] = useState("");
  const [isErreur, setIsErreur] = useState();
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setErreur("");
  };
  const onChangePassword = (e) => {
    setPasswod(e.target.value);
    setErreur("");
  };
  const Onclick = async (e) => {
    e.preventDefault();
    const reponse = await login(email, passwod);
    if (reponse) {
      navigate("/users"); // Redirige vers la page "/users" après une connexion réussie
    }
    if (!reponse) {
      setIsErreur(true);
      setEmail("");
      setPasswod("");
      return;
    }
  };
  // envoi les donne vers Api
  return (
    <div className="login">
      <form onSubmit={Onclick}>
        <div className="box1">
          <h2> Sign In </h2>
        </div>
        <div className="box2">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="box3">
          <p> or use your account </p>
        </div>
        <div className="box4">
          <input
            type="text"
            className="input"
            placeholder="Entre votre email"
            autoComplete="off"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="box5">
          <input
            type="password"
            className="input"
            placeholder="Entre votre Mot de pass"
            autoComplete="off"
            value={passwod}
            onChange={onChangePassword}
          />
        </div>
        <div className="box6">
          <a href="#"> Forgot your password? </a>
        </div>
        <div className="box7">
          <button type="submit">Connexion </button>
        </div>
      </form>
    </div>
  );
}
