//useEffect 불러오기
import React, { useEffect } from "react";

//타이머 함수 선언
const Timer = () => {
//useEffect 안에 setInterver 활용해 1초마다 콘솔 출력
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아갑니다");
    }, 1000);

    return() => {
        clearInterval(timer);
        console.log('종료');
    }
  }, []);
  return <div>타이머 시작 - 콘솔 출력</div>;
};

export default Timer;