/*
//1~1000을 담을 empty array 생성
let numArr = [];

//for문 1부터 10000까지 돌면서 숫자 생성 후 numArr에 push
for (let i = 1; i <= 10000; i++) {
  //i값 숫자이기 때문에 문자열 활용 위해 문자로 변경 후 push
  numArr.push(String(i));
}

//cnt(8의 개수) 초기값 설정
let cnt = 0;

//numArr.length(idx.0~9999)만큼 반복하는 for문 작성
for (let i = 0; i < numArr.length; i++) {
  //numArr 하나하나 for문 돌면서 하나의 문자로 쪼개주는 for문 작성
  let splitedArr = numArr[i].split("");
  //splitedArr의 값 하나의 길이만큼 도는 for문 작성
  for (let j = 0; j < numArr[i].length; j++) {
    //만약 splitedArr의 값이 8이라면 cnt를 +1 해주는 if문 작성
    if (splitedArr[j] === "8") {
      cnt++;
    }
  }
}
//console창에 결과값 출력
console.log(cnt);

-----김찬호 강사님의 조언

오 좋네요
지금 보면 단락이 크게 두 개로 나뉘는 거 같은데
첫 번째는 배열을 구성하는거고
두 번째는 거기서 하나씩 꺼내서 카운팅을 하잖아요?
이걸 합쳐도 될 것 같으네
같은데
그럼 배열을 만들 필요도 없을수도..??
아마도??
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
*/

//the result made by according to teacher's advice
let cnt = 0;
for (let i = 1; i <= 10000; i++) {
  let num = String(i);
  let splitedNum = num.split("");

  for (let j = 0; j < splitedNum.length; j++) {
    if (splitedNum[j] === "8") {
      cnt++;
    }
  }
}
console.log(cnt);
