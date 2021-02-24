import styles from '../styles/components/CountDown.module.css';
import { useState, useEffect } from 'react';

export function CountDown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [seconfLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setActive(true);
    };

    useEffect(() => {
        if(active && time){
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [active, time]);

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

            <button
                type="button"
                className={styles.countDownButton}
                onClick={startCountDown}
            >
                Iniciar um ciclo
            </button>
        </div>
    )
}