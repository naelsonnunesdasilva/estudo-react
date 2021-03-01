import styles from '../styles/components/Profile.module.css';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function Profile() {

    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/naelsonnunesdasilva.png' alt="Naelson Nunes" />
            <div>
                <strong>Naelson Nunes</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}