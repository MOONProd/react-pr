import { useState } from 'react';
import * as st from '../style/FrameSt.jsx';
import { TextField,Box,Button,Typography,Modal } from '@mui/material';

function RegisterForm(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleChange = ()=>{

    }

    const handleClick = ()=>{

    }

    return (
        
        <st.Frame>
            <st.Title>도서정보입력</st.Title>
           
                <TextField label='책이름'
                           variant='standard'
                        //    value={book.title}
                           name='title'
                           onChange={handleChange}/>
           
                <TextField label='저자'
                           variant='standard'
                        //    value={book.author}
                           name='author'
                           onChange={handleChange}/>
           
                <TextField label='가격'
                           variant='standard'
                        //    value={book.price}
                           name='price'
                           onChange={handleChange}/>

                <TextField label='설명'
                           variant='standard'
                        //    value={book.des}
                           name='des'
                           onChange={handleChange}/>
           
            <br/>
            <st.Button onClick={handleClick}>입력</st.Button>
            <br/>
            <st.LinkButton to='/list'>도서목록보기</st.LinkButton>
            <Button onClick={handleOpen}>로그인</Button>
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
                           variant='standard'/>
                
                <TextField label='PW'
                           variant='standard'
                           type='password'/>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <st.Button>로그인</st.Button>
                </Box>
                </Box>

            </Modal>
        </st.Frame>
    );
}

export default RegisterForm;