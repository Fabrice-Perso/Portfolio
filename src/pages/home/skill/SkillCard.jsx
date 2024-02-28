// SkillCard.js
import { useState } from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ skill, isSelected, onSkillSelect, projectCount, formationCount }) => {
  const [isHovered, setIsHovered] = useState(false);
  // La fonction qui sera appelée lorsque l'utilisateur cliquera sur la carte
  const handleClick = () => {
    console.log(`Click sur ${skill.name}, Projets: ${projectCount}, Formations: ${formationCount}`);
    onSkillSelect(skill.name);
  };

  // Créez un objet pour conditionnellement ajouter l'attribut data-tooltip
  const tooltipProps = (projectCount !== undefined && formationCount !== undefined) ? 
    { 'data-tooltip': `Projet(s) réalisé(s) : ${projectCount} dont ${formationCount} en formation` } : {};

  return (
    <div
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...tooltipProps}
    >
      <img src={skill.logo} alt={skill.name} className="skill-card__logo" />
      {isSelected && <div className="skill-card__overlay"></div>}
      {isHovered && (
        <div className="skill-card__alt-text">{skill.altText}</div>
      )}      
    </div>
  );
};

// propTypes pour la validation des props
SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    altText: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSkillSelect: PropTypes.func.isRequired,
  projectCount: PropTypes.number, // Vous pouvez spécifier que projectCount et formationCount sont facultatifs
  formationCount: PropTypes.number,
};

export default SkillCard;
