
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect,useState } from 'react';
// import axios from 'axios';
import * as st from '../CLASS/style/FrameSt';

//Page Component
import RegisterForm from "./pages/RegisterForm";
import BookList from "./pages/BookList";
import EditForm from "./pages/EditForm";


function BookApp() {

//   const [book, setBook] = useState({
//     title:'',
//     author:'',
//     price:'',
//     desc:'',
//   });

//   useEffect(()=>{
//     axios.get('http://localhost:8080/book/list')
//         .then((response)=>{
//             console.log(response.data);
//             setBook(response.data);
//         });

// },[]);

  return (
    <BrowserRouter>
      <st.MainTitleText>도서 조회 시스템</st.MainTitleText>
      <st.MainFrame>
        <Routes>
          <Route index element={<RegisterForm/>}></Route>
          <Route path='/list' element={<BookList/>}></Route>
          <Route path='/edit:id' element={<EditForm/>}></Route>
        </Routes>
      </st.MainFrame>
    </BrowserRouter>
  );
}

export default BookApp;
