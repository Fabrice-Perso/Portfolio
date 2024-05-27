import { useState } from 'react';
import imagesCertifFormation from '@/assets/images-certif-formation';
import PropTypes from 'prop-types';
import ImagePreviewModal from './ImagePreviewModal'; // Assurez-vous que le chemin d'importation est correct
import { useTranslation } from 'react-i18next';

const CertificationCard = ({ certification }) => {
  const { t } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  
  // Utiliser les traductions pour le nom et la description
  const translatedName = t(`certifications.card.${certification.id}.name`, certification.name);

  return (
    <div className="certification-card">
      <img
        src={imagesCertifFormation[certification.img]}
        alt={`Certificat Obtenu sur le site OC : ${translatedName}`} 
        className="certification-image"
        onClick={openModal}
      />
      <h3 className="certification-title">{translatedName}</h3>

      <ImagePreviewModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageSrc={imagesCertifFormation[certification.img]}
        altText={translatedName}
        documentUrl={certification.url}
      />
    </div>
  );
};

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default CertificationCard;
