function sendit() {
  const username = document.getElementById("username");
  const useremail = document.getElementById("email");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpwr");
  const userrenumber = document.getElementById("residentnum");

  const expNameText = /^[가-힣]+$/;
  const expEmailText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expJuminNum = /^\d{13}$/;

  if (!expNameText.test(username.value)) {
    alert("이름은 한글로 입력하세요.");
    username.focus();
    return false;
  }

  if (!expEmailText.test(useremail.value)) {
    alert("유효하지 않은 이메일 형식입니다.");
    username.focus();
    return false;
  }

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expJuminNum.test(userrenumber.value)) {
    alert("13자리 숫자를 입력해주세요.");
    userrenumber.focus();
    return false;
  }

  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(userrenumber[i], 10) * weights[i];
  }

  let check = 11 - (sum % 11);
  if (check === 10) check = 0;
  if (check === 11) check = 1;

  if ((check === parseInt(userrenumber[12]), 10)) {
    alert("유효한 주민등록번호입니다.");
  } else {
    alert("유효하지 않은 주민등록번호입니다.");
  }

  return true;
}
