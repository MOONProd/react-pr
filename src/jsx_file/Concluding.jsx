import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Concluding(props) {
    const [word, setWord] = useState('');
    const [chat, setChat] = useState([]);
    const [isComposing, setIsComposing] = useState(false);

    const handleChange = (event) => {
        setWord(event.target.value);
    }

    const checkWord = () => {
        
        if (chat.length===0)
        {
            setChat([...chat, word]);
            setWord('');
        }

        else
        {
            const prevWord = chat[chat.length - 1];
            const lastChar = prevWord[prevWord.length - 1]; // 이전 단어의 마지막 글자 추출

            if (lastChar === word[0]) { // 이전 단어의 마지막 글자와 새로운 단어의 첫 글자 비교
                setChat([...chat, word]);
                setWord('');
            }
            else
            {
                alert('졌슈');
            }
        }

    }
    const handleKeyDown = (event) => {
        if(event.key === "Enter" && !isComposing) {
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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <h2 style={{ textAlign: 'center' }}>Try Typing</h2>

            <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {chat.map((item, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '10px',
                        }}>
                            <div style={{
                                padding: '10px 15px',
                                borderRadius: '10px',
                                background: index % 2 === 0 ? '#d1e7dd' : '#f0f0f0',
                                display: 'inline-block',
                                maxWidth: '60%', // 텍스트가 너무 길어지는 것을 방지
                                wordWrap: 'break-word', // 긴 단어가 있을 경우 줄 바꿈 처리
                            }}>
                                {item}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
                <TextField 
                    id="outlined-basic" 
                    label="단어를 입력하세요" 
                    variant="outlined"
                    value={word}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onCompositionStart={handleCompositionStart}
                    onCompositionEnd={handleCompositionEnd}
                    style={{ marginRight: '10px' }} 
                />
                <Button variant="contained" color="primary" onClick={checkWord}>
                    제출!!
                </Button>
            </div>
        </div>
    );
}

export default Concluding;
