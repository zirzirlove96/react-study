//promise는 자바스크립트 비동기 처리에 사용되는 객체
//.then()을 사용하면 함수의 결과값이 나오면 받을 수 있다.
import React from "react";
import axios from "axios";  //node.js 혹은 브라우저의 http request에 사용 (fetch보다 브라우저 호환성이 좋으며, 기능이 많다.)

function Home() {
    const [Text, setText] =  React.useState(null);  //동적으로 현재값, setter 함수
    const [data, setData] =  React.useState(null);

    const textHandler = (e) => {
        setText(e.target.value);
    }
    
    const fetchData = async(e) => {
        e.preventDefault(); //새로고침을 막는다.
        const response = await axios.post('http://localhost:4040', {
            content : Text
        });

        setData(response.data);
    };


    return (
        <div>
            <form onSubmit={fetchData}>
                TEXT : <input type="text" onChange={textHandler}></input>
                <button type="submit">Submit</button>
                <br/>
                <label>{data}</label>
            </form>
        </div>
    );
}

export default Home;