import React from 'react';

function ImageTest(props) {
    return (
        <div             style={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(/word.jpg)',
            backgroundSize: '100% auto', // 가로를 100%로 맞추고, 세로는 비율에 맞게 조정
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
            {/* <img src="/word.jpg" alt="word" style={{ width: '100%', height: 'auto' }}/> */}
        </div>
    );
}

export default ImageTest;