import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, atom, RecoilRoot } from 'recoil';

const info = atom({
    key:"info",
    default:{
        firstNumber:"",
        secondNumber:"",
        operator:"+",
        result:"",
        toggle:false,
    },
});

function ClassCalc(props) {
    return (
        <RecoilRoot>
            <CalcHeader/>
            <CalcBody/>
            <CalcResult/>
        </RecoilRoot>
    );
}

function CalcHeader() {
    return(
        <div>
            <h1>리코일을 터득한 계산기</h1>
        </div>
    );
}

function CalcBody() {
    const [refer,setRefer] = useRecoilState(info);
    // console.log(refer);
    const [input, setInput] = useState('');

    function onChange(e) {
        setRefer({...refer,[e.target.name]:e.target.value});
        // console.log(refer);
        
    }

    function handleOnClick() {
        setRefer({...refer,toggle:true});
        setInput(refer.firstNumber+refer.operator+refer.secondNumber);
        // console.log(input);
    }

    useEffect(()=>{
        setRefer({...refer, firstNumber:refer.firstNumber, secondNumber:refer.secondNumber, operator:refer.operator ,result:eval(input)});
    },[input]);

    return(
        <div>
            <input type="text" 
                   name='firstNumber'
                   onChange={onChange}
                   size='4'/>
            <select value={refer.operator} name='operator' onChange={onChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">ⅹ</option>
                <option value="/">÷</option>
            </select>
            <input type="text" 
                   name='secondNumber'
                   onChange={onChange}
                   size='4'/>
            <button onClick={handleOnClick}>계산</button>
        </div>
    );
}

function CalcResult() {
    const val = useRecoilValue(info);
    console.log(val);
    

    return(
        <div>
            {val.toggle && `${val.firstNumber} ${val.operator} ${val.secondNumber} = ${val.result}`}
        </div>
    );
}


export default ClassCalc;