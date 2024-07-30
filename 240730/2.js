let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

tutorNames.forEach(function (tutor) {
  if (
    tutor === "최원장" ||
    tutor === "윤창식" ||
    tutor === "박가현" ||
    tutor === "김병연"
  ) {
    console.log(tutor);
  }
});

// forEach 메서드를 사용해 배열을 순회하세요.

// '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.

// if(조건식){조건식이 true일 때 실행되는 부분}

// tutor === "최원장" || tutor === "윤창식";

// || or
// && and
