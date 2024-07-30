let starbucks = [
  {
    name: "카페 라떼",
    icedOnly: false,
  },
  {
    name: "콜드 브루",
    icedOnly: true,
  },
  {
    name: "돌체 라떼",
    icedOnly: false,
  },
  {
    name: "돌체 콜드 브루",
    icedOnly: true,
  },
];

// 여기에 코드를 작성하세요.
// 아이스 전용 커피 배열을 만듭니다.
const icedOnly = starbucks.filter(function (ice) {
  return ice.icedOnly === true;
});

console.log(icedOnly);

// const iceOnly = starbucks.filter(function(파라미터){조건식})

// const arr = [1,2,3,4,5]

// const even = arr.filter(function(number){number/2 === 0})

// [2, 4]

// arr.iceOnly X
