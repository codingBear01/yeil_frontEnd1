const body = document.querySelector("body");
const allWrapper = document.querySelector(".wrapper");
const resultBtn = document.querySelector(".result-btn");
let lottoNumArr = [];
let userNumArr = [];
resultBtn.innerText = "결과 확인";

function createNums() {
  while (lottoNumArr.length < 7) {
    let lottoNum = Math.floor(Math.random() * 45);
    if (lottoNumArr.indexOf(lottoNum) < 0) {
      lottoNumArr.push(lottoNum);
    }
  }

  while (userNumArr.length < 7) {
    let userNum = Math.floor(Math.random() * 45);
    if (userNumArr.indexOf(userNum) < 0) {
      userNumArr.push(userNum);
    }
  }
}
createNums();

const bonusLottoNum = lottoNumArr.pop();
const bonusUserNum = userNumArr.pop();

const newLottoPlusDiv = document.createElement("div");
const newUserPlusDiv = document.createElement("div");
newLottoPlusDiv.innerText = "+";
newUserPlusDiv.innerText = "+";

function indicateLottoNums() {
  const newLottoNumBox = document.createElement("div");
  newLottoNumBox.classList.add("lotto-nums");
  allWrapper.appendChild(newLottoNumBox);

  for (let i = 0; i < lottoNumArr.length; i++) {
    const newLottoNumDiv = document.createElement("div");
    newLottoNumDiv.innerText = lottoNumArr[i];
    newLottoNumBox.appendChild(newLottoNumDiv);
  }

  const newLottoBonusNumDiv = document.createElement("div");
  newLottoBonusNumDiv.innerText = bonusLottoNum;
  newLottoNumBox.appendChild(newLottoPlusDiv);
  newLottoNumBox.appendChild(newLottoBonusNumDiv);
}
indicateLottoNums();

function indicateResult() {
  const newUserNumBox = document.createElement("div");
  newUserNumBox.classList.add("user-nums");
  newUserNumBox.classList.add("active");
  allWrapper.appendChild(newUserNumBox);

  for (let i = 0; i < lottoNumArr.length; i++) {
    const newUserNumDiv = document.createElement("div");
    newUserNumDiv.innerText = userNumArr[i];
    newUserNumBox.appendChild(newUserNumDiv);
  }

  const newUserBonusNumDiv = document.createElement("div");
  newUserBonusNumDiv.innerText = bonusUserNum;
  newUserNumBox.appendChild(newUserPlusDiv);
  newUserNumBox.appendChild(newUserBonusNumDiv);

  resultBtn.addEventListener("click", () => {
    newUserNumBox.classList.remove("active");
    if (resultBtn.innerText === "결과 확인") {
      resultBtn.innerText = "RESET";

      const sortedLottoNums = lottoNumArr.sort((a, b) => {
        return a - b;
      });
      const sortedUserNums = userNumArr.sort((a, b) => {
        return a - b;
      });
      let cnt = 0;
      let sum = "";

      for (let i = 0; i < sortedUserNums.length; i++) {
        if (sortedLottoNums[i] === sortedUserNums[i]) {
          cnt++;
          sum += cnt;
        }
      }

      const newCntDiv = document.createElement("div");
      newCntDiv.innerText = `맞춘 개수는 ${cnt}개!`;
      newCntDiv.classList.add("cnt-msg");
      body.appendChild(newCntDiv);

      const newResDiv = document.createElement("div");
      newResDiv.classList.add("result-msg");
      body.appendChild(newResDiv);

      if (cnt === 6) {
        newResDiv.innerText = "1등입니다!";
      } else if (cnt === 5 && bonusLottoNum === bonusUserNum) {
        newResDiv.innerText = "2등입니다!";
      } else if (cnt === 5) {
        newResDiv.innerText = "3등입니다!";
      } else if (cnt === 4) {
        newResDiv.innerText = "4등입니다!";
      } else if (cnt === 3) {
        newResDiv.innerText = "5등입니다!";
      } else {
        newResDiv.innerText = "낙첨입니다!";
      }
    } else {
      resultBtn.innerText = "결과 확인";
      location.reload();
    }
  });
}
indicateResult();
