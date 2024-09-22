import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ChatUITest(props) {
    const [word, setWord] = useState('');
    const [chat, setChat] = useState([]);
    const [isComposing, setIsComposing] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        if (isTimerActive) {
            const interval = setInterval(() => {
                setTimeProgress((prev) => {
                    if (prev < 100) {
                        return prev + 2; // 5초 동안 0에서 100까지 증가
                    } else {
                        clearInterval(interval);
                        alert('시간 종료!');
                        return 0;
                    }
                });
            }, 100); // 0.1초마다 업데이트 (5초 동안 100번 업데이트)

            return () => clearInterval(interval);
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
                resetTimer();
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
        <div className="flex flex-col h-screen">
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
            <div className="w-full bg-gray-300 h-1 relative">
                <div 
                    className="bg-blue-500 h-1 absolute left-0 top-0 transition-all duration-100" 
                    style={{ width: `${timeProgress}%` }}
                />
            </div>

            <div className="flex justify-center p-4 border-t border-gray-300">
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
