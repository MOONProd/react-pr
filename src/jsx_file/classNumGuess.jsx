//MyNumberGuess

import { useState, useEffect } from 'react';

//난수 발생
function MyNumberGuessNewVer(props) {

    const [com_num,setCom_num] = useState(Math.floor(Math.random()*100 + 1)); //1~100
    //setCom_num이 호출되기 전까지 초기값을 유지

    //사용자가 입력한 데이터를 (상태)관리
    const [user_num, setUser_num] = useState("");
    const [result, setResult] = useState("");
    let [count, setCount] = useState(1);
    let [isStarted, setIsStarted] = useState(false);
    let [lists, setLists] = useState([]);
    

    function checkNum() {
        // console.log("com_num = ", com_num, " , user_num = ", user_num);
        setIsStarted(true);
        //값 비교 ==결과==> 낮춰주세요 / 높여주세요 !
        //기준값 ==> 난수를 발생
        if(user_num > com_num)//사용자 입력값이 높을 때
        {
            setCount(count+1);
            setResult(`${count}번째 시도 [${user_num}] 낮춰주세요!`);
        }
        else if(user_num < com_num)//사용자 입력값이 낮을 때
        {
            setCount(count+1);
            setResult(`${count}번째 시도 [${user_num}] 높여주세요!`);
        }
        else //정답
        {
            setCount(count+1);
            setResult(`${count}번째 시도 정답입니다~~!!~`);
        }
        setUser_num("");
        // setLists([...lists,result]);
    }

    useEffect(() => {
        if (result) {
            setLists((prevLists) => [...prevLists, result]);
        }
    }, [result]);
    

    function handleChange(event) {//HTML 마크업의 변경된 값을 state에 반영
        setUser_num(event.target.value);
    }
    const activeEnter = (e) => {
        if(e.key === "Enter") {
            checkNum();
        }
    }

    return (
        <div>
            <h1 style={{padding:10}}>숫자맞추기</h1>
            <p style={{padding:10}}>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
            <div style={{padding:5}}>
                {`${count}번째 시도`}
            </div>
            {/* {console.log(lists.length)} */}
            <input type="number"
                   min="1" 
                   max="100" 
                   value={user_num} 
                   onChange={handleChange}
                   style={{margin:5, width:'150px'}}
                   onKeyDown={activeEnter}
                   />
            <button onClick={checkNum}>정답확인</button>
            {isStarted && <div style={{padding:5}}>확인결과 : {result}</div>}
            <br/>
            <ul>
                {lists.length>0 && lists.map((data,idx)=>{return <li key={idx}>{data}</li>;})}
            </ul>
        </div>
    );
}

export default MyNumberGuessNewVer;