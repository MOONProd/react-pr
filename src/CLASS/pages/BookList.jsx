import { useState, useEffect } from 'react';
import * as st from '../style/FrameSt';
import axios from 'axios';

function BookList(props) {
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/book/list')
            .then((response)=>{
                console.log(response.data);
                setList(response.data);
            });

    },[]);


    return (
        <div>
            <st.Table>
                <thead>
                    <tr>
                        <st.Th>번호</st.Th>
                        <st.Th>이름</st.Th>
                        <st.Th>나이</st.Th>
                        <st.Th>직업</st.Th>
                    </tr>
                </thead>
                <tbody>
                { list && list.map((per) => (
                        <tr key={per.isbn}>
                            <st.Td>
                                <st.StyledLink to={`/edit/${per.no}`}>{per.no}</st.StyledLink>
                            </st.Td>
                            <st.Td>{per.title}</st.Td>
                            <st.Td>{per.author}</st.Td>
                            <st.Td>{per.price}</st.Td>
                        </tr>
                    ))}
                </tbody>
            </st.Table>
            <st.LinkButton to='/'>사람정보입력</st.LinkButton>
        </div>
    );
}

export default BookList;