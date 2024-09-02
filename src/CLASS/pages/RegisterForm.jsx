import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toggle } from '../util/atom.js';
import axios from 'axios';
import * as st from '../style/FrameSt.jsx';
import { Box,Button,Typography,Modal } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// import Login from '../ui/Login.jsx';


function RegisterForm(props) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [upfile, setUpfile] = useState(null);
    const [book, setBook] = useState({
        isbn:'',
        title:'',
        author:'',
        price:'',
        desc:'',
        upfile:null,
    });
    const [member, setMember] = useState({
        id:'',
        pwd:'',
    })
    const [come, setCome] = useRecoilState(toggle);
    
    useEffect(()=>{
        const storedUser = sessionStorage.getItem('username');
        if(storedUser)
            {
                setCome({...come, welcome:true, username:storedUser});
                setLog('로그아웃');
            }
        },[]);
        // const [welcome, setWelcome] = useState(false);
        // const [username, setUsername] = useState('');
        
    const [log, setLog] = useState(sessionStorage.getItem('username') ? '로그아웃' : '로그인');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleChange = (event)=>{
        setBook({...book,[event.target.name]:event.target.value});
        setMember({...member,[event.target.name]:event.target.value});
    }

    const handleClick = ()=>{

        const formData = new FormData(); //폼전송 (with 파일업로드)
        formData.append("isbn",book.isbn);
        formData.append("title",book.title);
        formData.append("author",book.author);
        formData.append("price",book.price);
        formData.append("desc",book.desc);

        if(upfile)
        {
            formData.append("upfile",upfile);
        }

        axios.post('http://localhost:8080/book/form',formData,
                {headers:{'Content-Type':'multipart/form-data'}})
             .then(()=>{
                 navigate('/list');
             });
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
                    sessionStorage.setItem('username', user);
                    alert(`${user}님 환영합니다!`);
                }
                else
                {
                    alert('아이디나 비밀번호를 확인해주세요!');
                }
             })
    }

    const logoutClick = () => {
        sessionStorage.removeItem('username');
        setCome({ ...come, welcome: false, username: '' });
        setLog('로그인');
        alert('로그아웃 되었습니다.');
    };

    const handleUpfileChange = (e)=>{
        setUpfile(e.target.files[0]); //List로 저장되니까.. 0번째의 파일을 저장해야함용
        console.log(e.target.files);
    }

    return (

        <st.Frame>
            <st.Title>도서정보입력</st.Title>
                <st.InputField label='도서번호'
                           variant='standard'
                           value={book.isbn}
                           name='isbn'
                           onChange={handleChange}/>

                <st.InputField label='책이름'
                           variant='standard'
                           value={book.title}
                           name='title'
                           onChange={handleChange}/>
           
                <st.InputField label='저자'
                           variant='standard'
                           value={book.author}
                           name='author'
                           onChange={handleChange}/>
           
                <st.InputField label='가격'
                           variant='standard'
                           value={book.price}
                           name='price'
                           onChange={handleChange}/>

                <st.InputField label='설명'
                           id='standard-multiline-static'
                           variant='standard'
                           multiline
                           rows={4}
                           value={book.desc}
                           name='desc'
                           onChange={handleChange}/>

<br/>
                <Button
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        >
                        파일 업로드
                        <st.VisuallyHiddenInput
                            type="file"
                            onChange={handleUpfileChange}
                            multiple
                        />
                </Button>
           
            <br/>
            <st.Button onClick={handleClick}>입력</st.Button>
            <br/>
            <st.LinkButton to='/list'>도서목록보기</st.LinkButton>
            <Button onClick={log === '로그인' ? handleOpen : logoutClick}>{log}</Button>
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
                <st.InputField label='ID'
                           variant='standard'
                           name='id'
                           value={member.id}
                           onChange={handleChange}/>
                
                <st.InputField label='PW'
                           variant='standard'
                           type='password'
                           name='pwd'
                           value={member.pwd}
                           onChange={handleChange}/>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <st.Button onClick={loginClick}>로그인</st.Button>
                    {/* <Login welcome={welcome} username={username}/> */}
                </Box>
                </Box>

            </Modal>
        </st.Frame>

    );
}

export default RegisterForm;