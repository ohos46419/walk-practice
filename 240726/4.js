// 개인과제에서도 활용함 복습요망

const members = [
  {
    name: "최원장",
    role: "tutor",
  },
  {
    name: "윤창식",
    role: "tutor",
  },
  {
    name: "김병연",
    role: "tutor",
  },
  {
    name: "박가현",
    role: "tutor",
  },
  {
    name: "김멍멍",
    role: "student",
  },
  {
    name: "이야옹",
    role: "student",
  },
];

function getStudents() {
  // hint: 배열 안의 모든 객체를 한 번 반복한다.  (반복문)
  // hint: 반복문 안에서 role이 tutor인 객체의 name을 콘솔에 출력한다 (조건문)

  for (let i = 0; i < members.length; i++) {
    if (members[i].role === "tutor") {
      console.log(members[i].name);
    }
  }
}

// 함수 실행
getStudents();
