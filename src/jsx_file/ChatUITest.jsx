import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ChatUITest(props) {
    const [word, setWord] = useState('');
    const [chat, setChat] = useState([]);
    const [isComposing, setIsComposing] = useState(false);

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
            }
        }
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
