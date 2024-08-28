
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as st from '../CLASS/style/FrameSt';

//Page Component
import RegisterForm from "./pages/RegisterForm";
import BookList from "./pages/BookList";
import EditForm from "./pages/EditForm";


function BookApp() {

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
