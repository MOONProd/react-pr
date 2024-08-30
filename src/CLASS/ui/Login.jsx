import React from 'react';
import { useRecoilValue } from 'recoil';
import { toggle } from '../util/atom';
import * as st from '../style/FrameSt';

function Login(props) {
    const come = useRecoilValue(toggle);

    return (
        <st.MainFrame>
        <st.Title>
            {`${come.username}님, 반갑습니다!`}
        </st.Title>
        </st.MainFrame>
    );
}

export default Login;