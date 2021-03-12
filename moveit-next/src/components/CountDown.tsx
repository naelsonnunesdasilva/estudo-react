import styles from '../styles/components/CountDown.module.css';
import { useContext } from '../contexts/node_modules/@types/react';
import { CountdownContext } from '../contexts/CountdownContext';

export function CountDown() {

    const {
        minutes,
        seconds,
        hasFinish,
        isActive,
        startCountDown,
        resetCountDown,
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [seconfLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{seconfLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            {hasFinish ? (
                <button
                    disabled
                    className={`${styles.countDownButton}`}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        {isActive ?
                            (
                                <button
                                    type="button"
                                    className={`${styles.countDownButton} ${styles.coutDownButtonActive}`}
                                    onClick={resetCountDown}
                                >
                                    Abandonar ciclo
                                </button>
                            ) :
                            (

                                <button
                                    type="button"
                                    className={styles.countDownButton}
                                    onClick={startCountDown}
                                >
                                    Iniciar um ciclo
                                </button>

                            )
                        }
                    </>
                )
            }
        </div>
    )
}