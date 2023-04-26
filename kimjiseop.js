import inquirer from "inquirer";
// inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성되어있다.
// then 메서드로 입력받은 데이터를 전달할 수 있습니다.

// Q1 랜덤으로 배열의 인덱스를 셔플(섞는) 함수 로직을 작성
// 단, 마지막 confirm은 항상 마지막 인덱스여야 한다.
function exampleOne(array) {
  let shuffledArray = array.slice(0, -1); // 마지막 요소를 제외한 나머지 요소 셔플
  let indexOfLength = shuffledArray.length;

  while (indexOfLength !== 0) {
    let randomIndex = Math.floor(Math.random() * indexOfLength);
    indexOfLength--;

    [shuffledArray[indexOfLength], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[indexOfLength],
    ];
  }

  const lastIndex = array.length - 1;
  shuffledArray.push(array[lastIndex]); // 셔플된 배열의 맨 끝에 마지막 요소 추가

  return shuffledArray;
}

let questionArray = [
  {
    type: "input",
    name: "name",
    message: '당신의 이름은 무엇입니까?',
  },
  {
    type: 'list',
    name: 'like foods',
    message: '당신이 좋아하는 음식은 무엇입니까?',
    choices: ['치킨', '피자', '돼지고기', '소고기']
  },
  {
    type: 'list',
    name: 'like fruits',
    message: '당신이 좋아하는 과일은 무엇입니까?',
    choices: ['사과', '딸기', '복숭아', '수박']
  },
  {
    type: 'input',
    name: 'hate foods',
    message: '당신이 싫어하는 음식은 무엇입니까?'
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '제출합니까?'
  }
];

// Q2 아래의 작성된 .prompt()는 인자로 배열을 요구하므로
// 위에 작성한 exampleOne을 활용하여 입력데이터를 실행할 때마다 섞어 출력하도록 하시오.
// 공부법으로 유명한 flash card 로직입니다.

inquirer
  .prompt(exampleOne(questionArray))
  .then((answer) => {
    console.log('Answer: ', answer);
  })

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: '당신의 이름은 무엇입니까?'
//     },
//     {
//       type: 'list',
//       name: 'like food',
//       message: '당신이 좋아하는 음식은 무엇입니까?',
//       choices: ['바나나우유', '딸기우유', '초코우유', '흰 우유']
//     },
//     {
//       type: 'confirm',
//       name: 'confirm',
//       message: '확실합니까?'
//     }
//   ])
//   .then((answer) => {
//     console.log('Answer: ', answer);
//   })