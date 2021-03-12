import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from '../contexts/node_modules/@types/react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed(){
        resetCountDown();
        resetChallenge();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeAcitve}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccedddedButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (

                    <div className={styles.challengeNotAcitve}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src='icons/level-up.svg' alt='Level Up' />
                              Avance de level completando desafios
                        </p>
                    </div>
                )}

        </div>
    )
}