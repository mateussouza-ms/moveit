import Image from "next/image";
import styles from "../styles/components/LevelUpModal.module.css";

interface LevelUpMoalProps {
  level: number;
  closeLevelUpModal: () => void;
}
export default function LevelUpModal({
  level,
  closeLevelUpModal,
}: LevelUpMoalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <Image src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
