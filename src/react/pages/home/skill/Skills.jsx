// Skills.js
import { useState, useEffect } from 'react';
import SkillCard from './SkillCard';
import imagesSkillsFormation from "@/assets/images-skills-formation";
import imagesSkillsPerso from "@/assets/images-skills-perso";
import useScrollToHash from "@/react/hooks/useScrollToHash";
import { useSkills } from '@/react/hooks/useSkills';
import { FaFilter } from 'react-icons/fa';
import formationProjects from '@/react/data/formationProjects';
import personalProjects from '@/react/data/personalProjects';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const { activeSkill,setActiveSkill } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState(null);
  useScrollToHash(100);

  const [projectCounts, setProjectCounts] = useState({});

  useEffect(() => {
    // Réinitialise selectedSkill si activeSkill est réinitialisé
    if (!activeSkill) {
        setSelectedSkill(null);
    }
  }, [activeSkill]);

  useEffect(() => {
    const initialCounts = formationProjects.reduce((acc, project) => {
      project.languages.forEach(language => {
        const languageName = language.name.toUpperCase();
        if (!acc[languageName]) acc[languageName] = { formation: 0, personal: 0 };
        acc[languageName].formation += 1;
      });
      return acc;
    }, {});

    personalProjects.forEach(project => {
      project.languages.forEach(language => {
        const languageName = language.name.toUpperCase();
        if (!initialCounts[languageName]) initialCounts[languageName] = { formation: 0, personal: 0 };
        initialCounts[languageName].personal += 1;
      });
    });

    setProjectCounts(initialCounts);
  }, []);

  const handleFilterReset = () => {
    setSelectedSkill(null);
    setActiveSkill(null);
  };

  const allSkills = [
    { name: 'HTML', altText: 'HTML', category: 'Frontend', source: 'formation' },
    { name: 'CSS', altText: 'CSS', category: 'Frontend', source: 'formation' },
    { name: 'SASS', altText: 'SASS', category: 'Frontend', source: 'formation' },
    { name: 'JS', altText: 'JavaScript', category: 'Frontend', source: 'formation' },
    { name: 'REACT', altText: 'React', category: 'Frontend', source: 'formation' },
    { name: 'VITE', altText: 'Vite.js', category: 'Frontend', source: 'formation' },
    { name: 'REDUX', altText: 'Redux', category: 'Frontend', source: 'formation' },
    { name: 'API', altText: 'API', category: 'Backend', source: 'formation' },
    { name: 'SWAGGER', altText: 'Swagger', category: 'Backend', source: 'formation' },
    { name: 'PHP', altText: 'PHP', category: 'Backend', source: 'perso' },
    { name: 'LARAVEL', altText: 'Laravel', category: 'Backend', source: 'perso' },
    { name: 'MySql', altText: 'MySQL', category: 'Base de Données', source: 'perso' },
    { name: 'Phpmyadmin', altText: 'phpMyAdmin', category: 'Base de Données', source: 'perso' },
    { name: 'KANBAN', altText: 'Kanban', category: 'Gestion de Projets', source: 'formation' },
    { name: 'AGILE', altText: 'Agile', category: 'Gestion de Projets', source: 'formation' },
    { name: 'GIT', altText: 'Git', category: 'Versioning', source: 'formation' },
    { name: 'GITHUB', altText: 'GitHub', category: 'Versioning', source: 'formation' },
  ].map(skill => ({
    ...skill,
    logo: skill.source === 'formation' ? imagesSkillsFormation[`${skill.name.toLowerCase()}.webp`] : imagesSkillsPerso[`${skill.name.toLowerCase()}.webp`],
  }));

  const handleSkillSelect = (skillName) => {
    setActiveSkill(skillName);
    setSelectedSkill(skillName);
  };

  const categories = ['Frontend', 'Backend', 'Base de Données', 'Gestion de Projets', 'Versioning'];

  return (
    <>
      <div className="skills-section__title-container">
        <h2 className="skills-section__section-title" id="skills">{t('skills.title')}</h2>
        {selectedSkill && (
          <FaFilter 
            className="skills-section__filter-reset" 
            onClick={handleFilterReset} 
            title={t('skills.resetFilter')}
            style={{ visibility: selectedSkill ? 'visible' : 'hidden' }}
          />
        )}
      </div>
      <p className="skills-section__instruction">
        {t('skills.info')}        
      </p>
      <div className="skills-section__skill-container">
        {categories.map(category => (
          <div key={category} className="skills-section__skills-group">
            <h3>{t(`skills.categories.${category}`)}</h3>
            <div className="skills-section__skill-set">
              {allSkills.filter(skill => skill.category === category).map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  isSelected={selectedSkill === skill.name}
                  onSkillSelect={() => handleSkillSelect(skill.name)}
                  projectCount={projectCounts[skill.name.toUpperCase()] ? projectCounts[skill.name.toUpperCase()].personal + projectCounts[skill.name.toUpperCase()].formation : 0}
                  formationCount={projectCounts[skill.name.toUpperCase()] ? projectCounts[skill.name.toUpperCase()].formation : 0}
                  hasTooltip={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
