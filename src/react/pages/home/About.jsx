// About.js
import { ProfilImage } from "@/assets/images";
import LogoPHP from "@/assets/img/skills-perso/php.webp";
import LogoReact from "@/assets/img/skills-formation/react.webp";
import { FaCode } from 'react-icons/fa';
import { Trans ,useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (

  <>
    <div className="about-section__header">
      <h1 className="about-section__title">{t('about.title')}</h1>
      <div className="about-section__logos">
        <div className="about-section__logo-card">
          <img src={LogoReact} alt="React Logo" className="about-section__card__logo"/>
        </div>
        <div className="about-section__logo-card">
          <img src={LogoPHP} alt="PHP Logo" className="about-section__card__logo"/>
        </div>
      </div>
    </div>
    <div className="about-section__content">
      <img src={ProfilImage} alt="une photo de moi Fabrice MAGNAN de BELLEVUE" className="about-section__photo" />
      <div className="about-section__description">
      {/* <p><strong>Fabrice MAGNAN de BELLEVUE</strong></p> */}
        <h2>Fabrice MAGNAN de BELLEVUE</h2>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>{t('about.professionalExperienceTitle')} :</strong> {t('about.professionalExperience')}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>{t('about.skillsTitle')} : </strong></span>
              <Trans i18nKey="about.skills" components={[<span key="0" />, <strong key="1" />]} />
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>{t('about.personalProjectsTitle')} :</strong> {t('about.personalProjects')}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>{t('about.notableProjectsTitle')} : </strong></span>
              <Trans i18nKey="about.notableProjects" components={[<span key="0" />, <strong key="1" />]} />
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>{t('about.passionTitle')} :</strong> {t('about.passion')}</span>
          </div>
      </div>
    </div>
    </>
  );
};

export default About;