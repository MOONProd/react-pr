import React from 'react';
import { useRecoilState, useRecoilValue, atom, RecoilRoot } from 'recoil';

const arr = ["가위", "바위", "보"];

const info = atom({
    key:"info",
    default:{
        userCard:"",
        comCard:"",
        result:"",
        toggle:false,
    },
});

function ClassGBB(props) {
    return (
        <RecoilRoot>
            <GBBHeader/>
            <GBBInput/>
            <GBBResult/>
        </RecoilRoot>
    );
}

function GBBHeader() {
    return(
        <div>
            <h3>useRecoil GBB Game</h3>
            <hr/>
        </div>
    );
}

function GBBInput() {
    
    const [, setCtrl] = useRecoilState(info);
    
    const clickEvent =(event)=>{

        const user = event.target.value;
        const com = arr[Math.floor(Math.random()*arr.length)];

        let result;
        if(com===user)
        {
            result = "비김";
        }
        else if((com==="가위" && user==="바위") ||
                (com==="바위" && user==="보") ||
                (com==="보" && user==="가위"))
        {
            result = "우왁 이겼다!!!!!";
        }
        else if((com==="가위" && user==="보") ||
                (com==="바위" && user==="가위") ||
                (com==="보" && user==="바위"))
        {
            result = "졌음용 ㅠㅠ";
        }

        setCtrl({
            userCard:user,
            comCard:com,
            result:result,
            toggle:true,
        })
            
        }
        
        return(
            <div>
            <button value="가위" onClick={clickEvent}>가위</button>
            <button value="바위" onClick={clickEvent}>바위</button>
            <button value="보" onClick={clickEvent}>보</button>
        </div>
    );
}

function GBBResult() {
    const value = useRecoilValue(info);
    // console.log(value.userCard);
    return(
        <div style={{whiteSpace:'pre-line'}}>
            {value.toggle && `나 : ${value.userCard}\n 상대 : ${value.comCard}\n 결과 : ${value.result}`}
        </div>
    );
}

export default ClassGBB;