import React, { useState, useEffect } from 'react';

function APIuser() {
    const [users, setUsers] = useState([]);  // 사용자 데이터를 저장할 상태
    const [loading, setLoading] = useState(true);  // 로딩 상태를 관리

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 API 호출을 수행
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())  // 응답을 JSON으로 변환
            .then((data) => {
                setUsers(data);  // 데이터를 상태에 저장
                setLoading(false);  // 로딩 완료
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);  // 오류 발생 시에도 로딩 완료
            });
    }, []);  // 빈 배열을 두 번째 인자로 넘기면 컴포넌트가 마운트될 때 한 번만 실행됨

    return (
        <div>
            <h1>사용자 목록</h1>
            {loading ? (
                <p>로딩 중...</p>  // 로딩 중일 때 보여줄 UI
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>  // 각 사용자의 이름을 리스트에 표시
                    ))}
                </ul>
            )}
        </div>
    );
}

export default APIuser;
