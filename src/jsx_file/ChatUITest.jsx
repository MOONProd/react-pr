import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ChatUITest(props) {
    const [word, setWord] = useState('');
    const [chat, setChat] = useState([]);
    const [isComposing, setIsComposing] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const timerRef = useRef(null); // useRef로 타이머 참조 변수 생성

    useEffect(() => {
        if (isTimerActive) {
            timerRef.current = setInterval(() => {
                setTimeProgress((prev) => {
                    if (prev < 100) {
                        return prev + 2; // 5초 동안 0에서 100까지 증가
                    } else {
                        clearInterval(timerRef.current);
                        alert('시간 종료!');
                        setIsTimerActive(false);
                        return 0;
                    }
                });
            }, 100); // 0.1초마다 업데이트 (5초 동안 100번 업데이트)

            return () => clearInterval(timerRef.current);
        }
    }, [isTimerActive]);

    const handleChange = (event) => {
        setWord(event.target.value);
    }

    const checkWord = () => {
        if (chat.length === 0) {
            setChat([...chat, word]);
            setWord('');
        } else {
            const prevWord = chat[chat.length - 1];
            const lastChar = prevWord[prevWord.length - 1]; // 이전 단어의 마지막 글자 추출
            if (lastChar === word[0]) {
                setChat([...chat, word]);
                setWord('');
            } else {
                alert('끝!');
                clearInterval(timerRef.current); // 타이머 중지
                setIsTimerActive(false); // 타이머 상태 비활성화
                return; // 함수 종료
            }
        }
        resetTimer(); // 단어 제출 시 타이머 초기화
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !isComposing) {
            checkWord();
        }
    }

    const handleCompositionStart = () => {
        setIsComposing(true); // 한글 조합 시작
    };

    const handleCompositionEnd = (event) => {
        setIsComposing(false); // 한글 조합 종료
        handleChange(event); // 최종 한글 값 업데이트
    };

    const resetTimer = () => {
        setTimeProgress(0);
        setIsTimerActive(true); // 타이머 시작
    };

    return (
        <div className="flex flex-col h-screen bg-blue-50">
            <h2 className="text-center text-xl font-bold mt-4">끝말잇기 시작 !!</h2>

            <div className="flex-grow p-5 overflow-y-auto w-1/2 mx-auto">
                <ul className="list-none p-0">
                    {chat.map((item, index) => (
                        <li 
                            key={index} 
                            className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2`}
                        >
                            <div className={`px-4 py-2 rounded-xl ${index % 2 === 0 ? 'bg-green-100' : 'bg-gray-200'} max-w-lg break-words`}>
                                {item}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 타임바 영역 */}
            {isTimerActive && (            
                <div className="w-full bg-gray-300 h-1 relative">
                    <div 
                        className="bg-blue-500 h-1 absolute left-0 top-0 transition-all duration-100" 
                        style={{ width: `${timeProgress}%` }}
                    />
                </div>
            )}

            <div className="flex justify-center p-4">
                <TextField 
                    id="outlined-basic" 
                    label="단어를 입력하세요" 
                    variant="outlined"
                    value={word}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onCompositionStart={handleCompositionStart}
                    onCompositionEnd={handleCompositionEnd}
                    className="mr-4"
                />
                <Button variant="contained" color="primary" onClick={checkWord}>
                    제출!!
                </Button>
            </div>
        </div>
    );
}

export default ChatUITest;
