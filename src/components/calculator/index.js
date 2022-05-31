import React, { useState } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import './styles.css'

export const Calculator = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()
    const inputNum = (value) => {
        let input = value.target.value
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }

    }
    const clear = () => {
        setNum(0)
    }
    const percent = () => {
        setNum(num / 100)
    }
    const changeSign = () => {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }
    const operatorHandle = (value) => {
        let operatorInput = value.target.value;
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }
    const calculate = () => {
        if (operator === '/') {
            setNum(oldNum / num)
        } else if (operator === '*') {
            setNum(oldNum * num)
        } else if (operator === '-') {
            setNum(oldNum - num)
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }
    return (
        <Box m={5}>
            <Container maxWidth='xs'>
                <div className="container">
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percent}>%</button>
                    <button className="orange" onClick={operatorHandle} value='/'>/</button>
                    <button className="gray" onClick={inputNum} value='7'>7</button>
                    <button className="gray" onClick={inputNum} value='8'>8</button>
                    <button className="gray" onClick={inputNum} value='9'>9</button>
                    <button className="orange" onClick={operatorHandle} value='*'>x</button>
                    <button className="gray" onClick={inputNum} value='4'>4</button>
                    <button className="gray" onClick={inputNum} value='5'>5</button>
                    <button className="gray" onClick={inputNum} value='6'>6</button>
                    <button className="orange" onClick={operatorHandle} value='-'>-</button>
                    <button className="gray" onClick={inputNum} value='1'>1</button>
                    <button className="gray" onClick={inputNum} value='2'>2</button>
                    <button className="gray" onClick={inputNum} value='3'>3</button>
                    <button className="orange" onClick={operatorHandle} value='+'>+</button>
                    <button className="gray" onClick={inputNum} value='0'>0</button>
                    <button className="gray" onClick={inputNum} value='.'>.</button>
                    <button className="gray hidden" >,</button>
                    <button className="orange" onClick={calculate} value='='>=</button>
                </div>
            </Container>
        </Box>


    );

}