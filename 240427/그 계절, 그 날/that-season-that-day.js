const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

function getSeason(year, month, day) {
  // 입력받은 날짜가 존재하는지 확인
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return -1;
  }

  // 윤년 여부 판단
  const isLeap = isLeapYear(year);

  // 2월의 경우 윤년 여부에 따라 일수 조정
  if (month === 2) {
    if (isLeap) {
      if (day > 29) {
        return -1;
      }
    } else {
      if (day > 28) {
        return -1;
      }
    }
  }

  // 계절 판단
  if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Fall";
  } else {
    return "Winter";
  }
}

let result = getSeason(...input)
console.log(result)