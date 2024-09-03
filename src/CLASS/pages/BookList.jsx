import { useState, useEffect } from 'react';
import * as st from '../style/FrameSt';
import axios from 'axios';

function BookList(props) {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/book/list')
        .then((response) => {
            console.log(response.data);
            setBooks(response.data);
        })
        .catch((error) => {
            console.error('Error fetching books:', error);
        });

    },[]);


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
                            {/* <st.Td>
                                <st.StyledLink to={`/edit/${book.no}`}>{book.no}</st.StyledLink>
                            </st.Td> */}
                            <st.Td>
                                <st.LinkButton to={`/edit/${book.isbn}`}> {book.isbn} </st.LinkButton>
                            </st.Td>
                            <st.Td>{book.title}</st.Td>
                            <st.Td>{book.author}</st.Td>
                            <st.Td>{book.price}</st.Td>
                            <st.Td>{book.desc}</st.Td>
                            <st.Td>
                                {book.img ? (
                                    <img 
                                        src={`${process.env.REACT_APP_API_URL}/upload/${book.img}`} 
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
            <st.Button>이전</st.Button>
            <st.Button>다음</st.Button>
            <br/><br/>
            <st.LinkButton to='/'>도서정보입력</st.LinkButton>
        </div>
    );
}

export default BookList;