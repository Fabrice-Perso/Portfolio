import Social from "../../components/Social";

const ProjetPerso = () => {
  return (
    <div className="Container">
      <section className="Projet">
        <h1>{"Mon Projet 'Mon Budget Perso'"}</h1>
        <h2>Origines du projet</h2>
        <p>{"Mon Projet 'Mon Budget Perso' est une application web qui permet de gérer ses comptes bancaires personnels."}</p>
        <h2>Chronologie :</h2>
        <ol className="chronology">
          <li>
            <span className="version">V1.0.0 Excel :</span>
            <span className="description">Fichier Excel avec des formules.</span>
          </li>
          <li>
            <span className="version">V1.1.0 :</span>
            <span className="description">Utilisation de macros avec userforms et connexion à une base de données Access.</span>
          </li>
          <li>
            <span className="version">V1.0.0 Web :</span>
            <span className="description">Conversion en format web pour pratiquer mes acquis, utilisation de HTML-SASS-JS pour le Front-End et PHP/MySQL pour le Back-End.</span>
          </li>
          <li>
            <span className="version">V2.0.0 :</span>
            <span className="description">{"Migration vers React avec Vite.js et création d'une API pour le Back-End."}</span>
          </li>
        </ol>
        <h2>Fonctionnalités principales</h2>
        <ul className="features">
          <li>{"Gestion de comptes bancaires personnels (jusqu'à 5 comptes Courant-Différé-Joint et 5 comptes Épargne)."}</li>
          <li>{"Saisies d'écritures comptables de Revenus ou de Dépenses."}</li>
          <li>{"Partage des écritures entre 2 utilisateurs."}</li>
          <li>{"Compte Joint utilisable par les utilisateurs définis, tandis que les autres comptes sont individuels."}</li>
          <li>{"Validation des écritures sur une période après rapprochement bancaire et réalisation de clôtures d'exercices."}</li>
        </ul>
        <h2>Détails des écritures</h2>
        <ul className="writing-details">
          <li>{"Type de saisie : Revenus ou Dépenses."}</li>
          <li>{"Groupe, Catégorie (rattachée à un Compte), Sous-Catégorie, Détail."}</li>
          <li>{"Possibilité de définir des écritures récurrentes et des prélèvements automatiques."}</li>
          <li>{"Création d'écritures automatiques entre 2 comptes existants dans le logiciel (même utilisateur ou différent)."}</li>
        </ul>
        <p>{"Grâce à cela, nous avons un tableau de suivi. On peut définir des éléments de type Santé pour vérifier les remboursements."}</p>
        <h2>Démonstration et accès au code</h2>
        <p>{"Je peux vous faire une démonstration de l'outil, vous donner les paramètres de connexion pour un compte test ou vous donner accès à mon code via GitHub."}</p>
      </section>
      <Social />
    </div>
  );
};

export default ProjetPerso;