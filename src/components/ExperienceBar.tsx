import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  // eslint-disable-next-line prettier/prettier
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  // eslint-disable-next-line prettier/prettier
  const percentToNextlevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextlevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextlevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
}
