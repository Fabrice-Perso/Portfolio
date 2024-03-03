import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaWpexplorer } from 'react-icons/fa';
import images_projet_perso from '../../../assets/images-projet-perso';

const PersonalProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/personal-project/${project.id}#personalProject`);
  };

  const galleryImages = project.images.map((image) => {
    // Retirer l'extension du nom de l'image pour utiliser comme alt text
    const imageNameWithoutExtension = image.nomimage.split('.').slice(0, -1).join('.');
    return {
      original: images_projet_perso[image.nomimage],
      description: image.titre,
      originalAlt: imageNameWithoutExtension // Utiliser le nom de l'image sans l'extension comme alt text
    };
  });

  return (
    <div className="personal-project-card">
      <h2 className="personal-project-title">{project.name}</h2>
      <Gallery items={galleryImages} />
      <div className="personal-project-content">
        <p className="personal-project-brief">{project.description}</p>
        <button className="project-view-button" onClick={redirectToDetails}>
          <FaWpexplorer className="icon button-icon" />
          Explorer le Projet
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
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalProjectCard;
