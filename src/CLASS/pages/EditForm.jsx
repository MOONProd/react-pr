import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import * as st from '../style/FrameSt';
import { useParams } from 'react-router-dom';

function EditForm(props) {
    // const { id } = props;

    const { isbn } = useParams();

    const [book, setBook] = useState({
        isbn:'',
        title:'',
        author:'',
        price:'',
        desc:'',
    });

    useEffect(()=>{
        axios.get(`http://localhost:8080/book/upform`,{ params: { isbn: isbn } })
             .then((response)=>
            {
                // const bookdata = response.data;

                setBook(response.data);
            })
    },[isbn]);

    const handleChange = (event)=>{
        setBook({...book,[event.target.name]:event.target.value});
    }

    const handleUpdate = ()=>{
        axios.put(`http://localhost:8080/book/upform`,book, { params: { isbn: isbn } })
             .then(()=>{
                console.log('Book updated successfully');
             });
    }

    const handleDelete = ()=>{

    }
    return (
        <st.Frame>
            <st.Title>도서정보입력</st.Title>
                <TextField label='도서번호'
                           variant='standard'
                           value={book.isbn}
                           name='isbn'
                           onChange={handleChange}/>

                <TextField label='책이름'
                           variant='standard'
                           value={book.title}
                           name='title'
                           onChange={handleChange}/>
           
                <TextField label='저자'
                           variant='standard'
                           value={book.author}
                           name='author'
                           onChange={handleChange}/>
           
                <TextField label='가격'
                           variant='standard'
                           value={book.price}
                           name='price'
                           onChange={handleChange}/>

                <TextField label='설명'
                           id='standard-multiline-static'
                           variant='standard'
                           multiline
                           rows={4}
                           value={book.desc}
                           name='desc'
                           onChange={handleChange}/>

            <br/>
            <st.Button onClick={handleUpdate}>수정</st.Button>
            <st.Button onClick={handleDelete}>삭제</st.Button>
            <br/>
        </st.Frame>
    );
}

export default EditForm;