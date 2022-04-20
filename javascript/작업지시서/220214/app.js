//변수 선언부
const main = document.querySelector(".wrapper");
const resultBtn = document.querySelector(".result-btn");
const userNumInput1 = document.querySelector(".input_user-num1");
const userNumInput2 = document.querySelector(".input_user-num2");
const userNumInput3 = document.querySelector(".input_user-num3");
const userNumInput4 = document.querySelector(".input_user-num4");
const userNumInput5 = document.querySelector(".input_user-num5");
const userNumInput6 = document.querySelector(".input_user-num6");
const userNumInput7 = document.querySelector(".input_user-bonus-num");
const userNumInputBtn1 = document.querySelector(".btn_input-user-num1");
const userNumInputBtn2 = document.querySelector(".btn_input-user-num2");
const userNumInputBtn3 = document.querySelector(".btn_input-user-num3");
const userNumInputBtn4 = document.querySelector(".btn_input-user-num4");
const userNumInputBtn5 = document.querySelector(".btn_input-user-num5");
const userNumInputBtn6 = document.querySelector(".btn_input-user-num6");
const userNumInputBtn7 = document.querySelector(".btn_input-user-bonus-num");
const userNumBox1 = document.querySelector(".box1");
const userNumBox2 = document.querySelector(".box2");
const userNumBox3 = document.querySelector(".box3");
const userNumBox4 = document.querySelector(".box4");
const userNumBox5 = document.querySelector(".box5");
const userNumBox6 = document.querySelector(".box6");
const userNumBox7 = document.querySelector(".box7");

userNumInputBtn1.innerText = "입력";
userNumInputBtn2.innerText = "입력";
userNumInputBtn3.innerText = "입력";
userNumInputBtn4.innerText = "입력";
userNumInputBtn5.innerText = "입력";
userNumInputBtn6.innerText = "입력";
userNumInputBtn7.innerText = "입력";

//로또 번호를 담을 빈 배열 및 length 8짜리 사용자 num 배열 미리 선언
let lottoNumArr = [];
let lottoBonusNum = +lottoNumArr[lottoNumArr.length - 1];
let userNumArr = new Array(8)
  .join("0")
  .split("")
  .map((val) => +val);

//number input btns
function handleUserNumInputBtn1() {
  if (
    userNumInput1.value <= 45 &&
    userNumInput1.value >= 1 &&
    userNumInputBtn1.innerText === "입력"
  ) {
    userNumInputBtn1.innerText = "바꾸기";
    userNumArr[0] = userNumInput1.value;
    userNumInput1.value = "";
    userNumBox1.innerText = userNumArr[0];
  } else if (
    userNumInput1.value <= 45 &&
    userNumInput1.value >= 1 &&
    userNumInputBtn1.innerText === "바꾸기"
  ) {
    userNumArr[0] = userNumInput1.value;
    userNumInput1.value = "";
    userNumBox1.innerText = userNumArr[0];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput1.value = "";
  }
}
function handleUserNumInputBtn2() {
  if (
    userNumInput2.value <= 45 &&
    userNumInput2.value >= 1 &&
    userNumInputBtn2.innerText === "입력"
  ) {
    userNumInputBtn2.innerText = "바꾸기";
    userNumArr[1] = userNumInput2.value;
    userNumInput2.value = "";
    userNumBox2.innerText = userNumArr[1];
  } else if (
    userNumInput2.value <= 45 &&
    userNumInput2.value >= 1 &&
    userNumInputBtn2.innerText === "바꾸기"
  ) {
    userNumArr[1] = userNumInput2.value;
    userNumInput2.value = "";
    userNumBox2.innerText = userNumArr[1];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput2.value = "";
  }
}
function handleUserNumInputBtn3() {
  if (
    userNumInput3.value <= 45 &&
    userNumInput3.value >= 1 &&
    userNumInputBtn3.innerText === "입력"
  ) {
    userNumInputBtn3.innerText = "바꾸기";
    userNumArr[2] = userNumInput3.value;
    userNumInput3.value = "";
    userNumBox3.innerText = userNumArr[2];
  } else if (
    userNumInput3.value <= 45 &&
    userNumInput3.value >= 1 &&
    userNumInputBtn3.innerText === "바꾸기"
  ) {
    userNumArr[2] = userNumInput3.value;
    userNumInput3.value = "";
    userNumBox3.innerText = userNumArr[2];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput3.value = "";
  }
}
function handleUserNumInputBtn4() {
  if (
    userNumInput4.value <= 45 &&
    userNumInput4.value >= 1 &&
    userNumInputBtn4.innerText === "입력"
  ) {
    userNumInputBtn4.innerText = "바꾸기";
    userNumArr[3] = userNumInput4.value;
    userNumInput4.value = "";
    userNumBox4.innerText = userNumArr[3];
  } else if (
    userNumInput4.value <= 45 &&
    userNumInput4.value >= 1 &&
    userNumInputBtn4.innerText === "바꾸기"
  ) {
    userNumArr[3] = userNumInput4.value;
    userNumInput4.value = "";
    userNumBox4.innerText = userNumArr[3];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput4.value = "";
  }
}
function handleUserNumInputBtn5() {
  if (
    userNumInput5.value <= 45 &&
    userNumInput5.value >= 1 &&
    userNumInputBtn5.innerText === "입력"
  ) {
    userNumInputBtn5.innerText = "바꾸기";
    userNumArr[4] = userNumInput5.value;
    userNumInput5.value = "";
    userNumBox5.innerText = userNumArr[4];
  } else if (
    userNumInput5.value <= 45 &&
    userNumInput5.value >= 1 &&
    userNumInputBtn5.innerText === "바꾸기"
  ) {
    userNumArr[4] = userNumInput5.value;
    userNumInput5.value = "";
    userNumBox5.innerText = userNumArr[4];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput5.value = "";
  }
}
function handleUserNumInputBtn6() {
  if (
    userNumInput6.value <= 45 &&
    userNumInput6.value >= 1 &&
    userNumInputBtn6.innerText === "입력"
  ) {
    userNumInputBtn6.innerText = "바꾸기";
    userNumArr[5] = userNumInput6.value;
    userNumInput6.value = "";
    userNumBox6.innerText = userNumArr[5];
  } else if (
    userNumInput6.value <= 45 &&
    userNumInput6.value >= 1 &&
    userNumInputBtn6.innerText === "바꾸기"
  ) {
    userNumArr[5] = userNumInput6.value;
    userNumInput6.value = "";
    userNumBox6.innerText = userNumArr[5];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput6.value = "";
  }
}
function handleUserNumInputBtn7() {
  if (
    userNumInput7.value <= 45 &&
    userNumInput7.value >= 1 &&
    userNumInputBtn7.innerText === "입력"
  ) {
    userNumInputBtn7.innerText = "바꾸기";
    userNumArr[6] = userNumInput7.value;
    userNumInput7.value = "";
    userNumBox7.innerText = userNumArr[6];
  } else if (
    userNumInput7.value <= 45 &&
    userNumInput7.value >= 1 &&
    userNumInputBtn7.innerText === "바꾸기"
  ) {
    userNumArr[6] = userNumInput7.value;
    userNumInput7.value = "";
    userNumBox7.innerText = userNumArr[6];
  } else {
    alert("1에서 45 사이의 숫자를 입력하세요!");
    userNumInput7.value = "";
  }
}

userNumInputBtn1.addEventListener("click", handleUserNumInputBtn1);
userNumInputBtn2.addEventListener("click", handleUserNumInputBtn2);
userNumInputBtn3.addEventListener("click", handleUserNumInputBtn3);
userNumInputBtn4.addEventListener("click", handleUserNumInputBtn4);
userNumInputBtn5.addEventListener("click", handleUserNumInputBtn5);
userNumInputBtn6.addEventListener("click", handleUserNumInputBtn6);
userNumInputBtn7.addEventListener("click", handleUserNumInputBtn7);

//사용자 input값 유효성 검사
function checkUserNums() {
  let dupCnt = 0;
  let sum = 0;
  for (let i = 0; i < userNumArr.length; ++i) {
    if (userNumArr[i] === userNumArr[i + 1]) {
      dupCnt++;
    }
    sum += +userNumArr[i];
  }
  if (dupCnt > 0) {
    alert("중복된 숫자는 입력할 수 없습니다.");
    if (sum < 28) {
      alert("숫자를 6개 올바르게 입력하세요.");
    }
  } else {
    createLottoNums();
    indicateResMsg();
  }
}

//while문 돌면서 lottoNumArr에 로또 번호 채워넣기
function createLottoNums() {
  while (lottoNumArr.length < 7) {
    let lottoNum = Math.ceil(Math.random() * 45);
    if (lottoNumArr.indexOf(lottoNum) < 0) {
      lottoNumArr.push(lottoNum);
    }
  }
}

//lottoNumArr내 값과 input값 비교하여 cnt 올리고 cnt 개수 따라 등수 및 맞힌 개수 msg 반환
function indicateResMsg() {
  let cnt = 0;

  for (let i = 0; i < lottoNumArr.length - 1; ++i) {
    if (+userNumArr[0] === lottoNumArr[i]) {
      cnt++;
    } else if (+userNumArr[1] === lottoNumArr[i]) {
      cnt++;
    } else if (+userNumArr[2] === lottoNumArr[i]) {
      cnt++;
    } else if (+userNumArr[3] === lottoNumArr[i]) {
      cnt++;
    } else if (+userNumArr[4] === lottoNumArr[i]) {
      cnt++;
    } else if (+userNumArr[5] === lottoNumArr[i]) {
      cnt++;
    }
  }

  const resMsg = `
  당첨번호는:
  ${lottoNumArr[0]} ${lottoNumArr[1]} ${lottoNumArr[2]} ${lottoNumArr[3]} ${lottoNumArr[4]} ${lottoNumArr[5]} ${lottoNumArr[6]} 
  맞힌 개수는:
  ${cnt}
  `;

  if (cnt === 6) {
    alert(`${resMsg}1등입니다!`);
    location.reload();
  } else if (
    cnt === 5 &&
    lottoBonusNum === Number(userNumArr[userNumArr.length - 1])
  ) {
    alert(`${resMsg}2등입니다!`);
    location.reload();
  } else if (cnt === 5) {
    alert(`${resMsg}3등입니다!`);
    location.reload();
  } else if (cnt === 4) {
    alert(`${resMsg}4등입니다!`);
    location.reload();
  } else if (cnt === 3) {
    alert(`${resMsg}5등입니다!`);
    location.reload();
  } else {
    alert(`${resMsg}낙첨입니다!`);
    location.reload();
  }
}
//resultBtn 클릭 시 전체 함수 실행
resultBtn.addEventListener("click", checkUserNums);
