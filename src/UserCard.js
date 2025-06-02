// Créez un composant UserCard dans src/UserCard.js qui accepte :
// name (string) : nom de l'utilisateur.
// age (number) : âge de l'utilisateur.
// role (string) : rôle (ex. "Étudiant", "Professeur").
// Affichez dans UserCard :
// Le nom en gras.
// L'âge.
// Le rôle avec une couleur selon :
// "Étudiant" : bleu.
// "Professeur" : vert .
// Autre : gris .
// Dans src/App.js, affichez 3 cartes UserCard avec des données différentes.

import "./UserCard.css";
import faceImg from "../src/face.png";
import code213 from "../src/code213.png";
import countryImg from "../src/algeria.png"

function UserCard({ name, age, role }) {
  const color = (role) => {
    switch (role) {
      case "STUDENT":
        return "#5FA5FA";
      case "TEACHER":
        return "#3EAB3E";
      default:
        return "#828282";
    }
  };
  return (
    <div
      className="UserCard"
      style={{
        background: `linear-gradient(312deg, ${color(role)} 0%, #1C20F3 100%)`,
      }}
    >
      <div className="uni">
        <img src={code213} alt="" />
      </div>
      <div className="cardName">{role} CARD</div>
      <div className="person">
        <div className="info">
          <b>
            {name}
            <br />
          </b>
          {age} y.o
        </div>
        <img src={faceImg} alt="personne" />
      </div>
      <div className="country">
        <img src={countryImg} alt="" />
      </div>
    </div>
  );
}

export default UserCard;
