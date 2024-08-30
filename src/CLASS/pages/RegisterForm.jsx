import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toggle } from '../util/atom.js';
import axios from 'axios';
import * as st from '../style/FrameSt.jsx';
import { TextField,Box,Button,Typography,Modal } from '@mui/material';
// import Login from '../ui/Login.jsx';


function RegisterForm(props) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState({
        isbn:'',
        title:'',
        author:'',
        price:'',
        desc:'',
    });
    const [member, setMember] = useState({
        id:'',
        pwd:'',
    })
    // const [welcome, setWelcome] = useState(false);
    const [log, setLog] = useState('로그인');
    const [come, setCome] = useRecoilState(toggle);
    // const [username, setUsername] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleChange = (event)=>{
        setBook({...book,[event.target.name]:event.target.value});
        setMember({...member,[event.target.name]:event.target.value});
    }

    const handleClick = ()=>{

        axios.post('http://localhost:8080/book/form',book);
        navigate('/list');
    }

    const loginClick = ()=>{
        axios.post('http://localhost:8080/member/findMember',member)
             .then((response)=>{
                const user = response.data;

                if(user)
                {
                    // setUsername(user);
                    setCome({...come, welcome:true, username:user});
                    setLog('로그아웃');
                    setOpen(false);
                    alert(`${user}님 환영합니다!`);
                }
                else
                {
                    alert('아이디나 비밀번호를 확인해주세요!');
                }
             })
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
            <st.Button onClick={handleClick}>입력</st.Button>
            <br/>
            <st.LinkButton to='/list'>도서목록보기</st.LinkButton>
            <Button onClick={handleOpen}>{log}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={st.style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    로그인
                </Typography>
                <TextField label='ID'
                           variant='standard'
                           name='id'
                           value={member.id}
                           onChange={handleChange}/>
                
                <TextField label='PW'
                           variant='standard'
                           type='password'
                           name='pwd'
                           value={member.pwd}
                           onChange={handleChange}/>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <st.Button onClick={loginClick} disabled={come.welcome}>로그인</st.Button>
                    {/* <Login welcome={welcome} username={username}/> */}
                </Box>
                </Box>

            </Modal>
        </st.Frame>

    );
}

export default RegisterForm;