import React, { useState, useEffect } from "react";
import { users } from "../controlers/users";
import { Link } from "react-router-dom";
import Ajout from "./AddFreind";
import ListeFreind from "./ListeFrein";

export default function Users() {
  const [showFriendList, setShowFriendList] = useState(false);
  const [getData, setGetData] = useState([]);
  const [isFirstLoad, setIsfirstLod] = useState(true);
  const [showAjout, setShowAjout] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await users();
    setTimeout(() => {
      setIsfirstLod(false);
      setGetData(data);
    }, 2000);
  };

  const showAjoutComponent = (userId) => {
    setSelectedUserId(userId);
    setShowAjout(true);
    setShowFriendList(false);
  };

  const showFriendListComponent = () => {
    setShowFriendList(true);
    setShowAjout(false);
  };

  return (
    <div>
      {showFriendList ? (
        <ListeFreind />
      ) : (
        <div>
          <button onClick={showFriendListComponent}>
            Afficher la Liste d'Amis
          </button>
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
                        onClick={() => showAjoutComponent(user.id)}
                      >
                        Ajouter Ami
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {showAjout && <Ajout userId={selectedUserId} />}
    </div>
  );
}
