import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaWpexplorer } from 'react-icons/fa';
import images_projet_perso from '@/assets/images-projet-perso';
import { useTranslation } from 'react-i18next';

const PersonalProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/personal-project/${project.id}#personalProject`);
  };

  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  
  const galleryImages = hasImages ? project.images.map((image) => {
    const imageNameWithoutExtension = image.nomimage.split('.').slice(0, -1).join('.');
    return {
      original: images_projet_perso[image.nomimage],
      description: t(`projectpersonal:${image.titre}`),
      originalAlt: imageNameWithoutExtension
    };
  }) : [];

  return (
    <div className="personal-project-card">
      {project.badgedev && <div className="badge">{t(`projectpersonal:${project.badgedev}`)}</div>}
      <h2 className="personal-project-title">{t(`projectpersonal:${project.name}`)}</h2>
      {hasImages && <Gallery items={galleryImages} />}
      <div className="personal-project-content">
        <p className="personal-project-brief">{t(`projectpersonal:${project.short_description}`)}</p>
        <button className="project-view-button" onClick={redirectToDetails}>
          <FaWpexplorer className="icon button-icon" />
          {t('projects.personal.button')}
        </button>
      </div>
    </div>
  );
};

PersonalProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        titre: PropTypes.string.isRequired,
        nomimage: PropTypes.string.isRequired,
      })
    ).isRequired,
    short_description: PropTypes.string.isRequired,
    badgedev: PropTypes.string, // Ajout de la propriété badge
  }).isRequired,
};

export default PersonalProjectCard;
