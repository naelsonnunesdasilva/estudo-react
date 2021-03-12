import styles from '../styles/components/CompletedChallenges.module.css';
import { useContext } from '../contexts/node_modules/@types/react';
import { ChallengeContext } from '../contexts/ChallengesContext';

export function CompletedChanlleges() {
    const {challengesCompleted } =  useContext(ChallengeContext);
    return (
        <div className={styles.completedChanllegesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted } </span>
        </div>
    )
}