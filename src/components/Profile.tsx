import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import Image from "next/image";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <Image
        src="https://github.com/mateussouza-ms.png"
        loader={({ src }) => src}
        alt="Mateus Souza"
      />
      <div>
        <strong>Mateus Souza</strong>
        <p>
          <Image src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
