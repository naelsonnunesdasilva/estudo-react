import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { ChallengeContext } from './ChallengesContext';

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdowntProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdowntProviderProps){
    let countDownTimeOut: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    };

    function resetCountDown() {
        setIsActive(false);
        setHasFinish(false);
        clearTimeout(countDownTimeOut);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && !time) {
            setHasFinish(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            isActive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}