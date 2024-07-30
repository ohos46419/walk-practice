let tutors = [
  {
    name: "최원장",
    time: "9to6",
  },
  {
    name: "윤창식",
    time: "9to6",
  },
  {
    name: "박가현",
    time: "9to6",
  },
  {
    name: "김병연",
    time: "9to6",
  },
];
// const arr = [1,2,4,5]
// const arr = [{number: 1},{number: 2}]

// 여기에 코드를 작성하세요.
// 멘토링 상태를 확인할 수 있는 불리언 타입의 isMentoring 속성을 추가합니다.

// {
//   name: '최원장',
//   time: '9to6',
// },

// {
//   name: "윤창식",
//   time: "9to6",
// },

const newTutors = tutors.map(function (tutor) {
  return {
    name: tutor.name,
    time: tutor.time,
    isMentoring: true,
  };
});

console.log(newTutors);
// const newTutors = [
//   {
//     name: "최원장",
//     time: "9to6",
//     isMentoring: true,
//   },

//   {
//     name: "윤창식",
//     time: "9to6",
//     isMentoring: true,
//   },
// ];

// 배열.map(function(파라미터){실행문})

// function(){}

// console.log(newTutors);
