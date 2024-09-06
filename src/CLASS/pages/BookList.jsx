import { useState, useEffect } from 'react';
import * as st from '../style/FrameSt';
import axios from 'axios';

function BookList(props) {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // 총 페이지 수

    const pageSize = Number(process.env.REACT_APP_PAGE_SIZE || 10); // 한 페이지당 표시할 데이터 수
    const offset = (page - 1) * pageSize;

    useEffect(() => {
        // 총 데이터 수를 가져와서 총 페이지 수를 계산
        axios.get('http://localhost:8080/book/totalCount')
            .then((response) => {
                const totalCount = response.data.totalCount; // 서버에서 전체 데이터 수를 받아옴
                setTotalPages(Math.ceil(totalCount / pageSize)); // Math.ceil을 사용해 총 페이지 수 계산
            })
            .catch((error) => {
                console.error('Error fetching total count:', error);
            });

        // 현재 페이지의 데이터를 가져옴
        axios.get(`http://localhost:8080/book/findPage/${offset}/${pageSize}`)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, [page, pageSize]);

    // 특정 페이지로 이동
    const handlePageClick = (pageNum) => {
        setPage(pageNum);
    };

    // 페이지 번호 버튼 생성
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <st.Button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    disabled={i === page} // 현재 페이지는 비활성화
                >
                    {i}
                </st.Button>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <st.Table>
                <thead>
                    <tr>
                        <st.Th>번호</st.Th>
                        <st.Th>책이름</st.Th>
                        <st.Th>저자</st.Th>
                        <st.Th>가격</st.Th>
                        <st.Th>설명</st.Th>
                        <st.Th>이미지</st.Th>
                    </tr>
                </thead>
                <tbody>
                { books && books.map((book) => (
                        <tr key={book.isbn}>
                            <st.Td>
                                <st.LinkButton to={`/edit/${book.isbn}`}> {book.isbn} </st.LinkButton>
                            </st.Td>
                            <st.Td>{book.title}</st.Td>
                            <st.Td>{book.author}</st.Td>
                            <st.Td>{book.price}</st.Td>
                            <st.Td>{book.desc}</st.Td>
                            <st.Td>
                                {book.saveImg ? (
                                    <img 
                                        src={`${process.env.REACT_APP_API_URL}/upload/${book.saveImg}`} 
                                        alt={`${book.title} 이미지`} 
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                ) : (
                                    '이미지 없음'
                                )}
                            </st.Td>
                        </tr>
                    ))}
                </tbody>
            </st.Table>
            <div>
                {renderPageNumbers()}
            </div>
            <br/><br/>
            <st.LinkButton to='/'>도서정보입력</st.LinkButton>
        </div>
    );
}

export default BookList;
