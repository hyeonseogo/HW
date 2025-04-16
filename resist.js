function sendit() {
  const username = document.getElementById("username");
  const useremail = document.getElementById("email");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpwr");
  const userrenumber1 = document.getElementById("residentnum1");
  const userrenumber2 = document.getElementById("residentnum2");

  const expNameText = /^[가-힣]+$/;
  const expEmailText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expJuminNum1 = /^\d{6}$/;
  const expJuminNum2 = /^\d{7}$/;

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

  if (!expJuminNum1.test(userrenumber1.value)) {
    alert("주민등록번호를 입력해주세요.");
    userrenumber1.focus();
    return false;
  }
  if (!expJuminNum2.test(userrenumber2.value)) {
    alert("주민등록번호를 입력해주세요.");
    userrenumber2.focus();
    return false;
  }
  function jumincheck() {
    alert("주민등록번호를 입력해주세요.");
  }

  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  const fullnum = userrenumber1.value + userrenumber2.value;
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(fullnum[i], 10) * weights[i];
  }

  const check = (11 - (sum % 11)) % 10;

  if (check === parseInt(fullnum[12], 10)) {
    alert("유효한 주민등록번호입니다.");
  } else {
    alert("유효하지 않은 주민등록번호입니다.");
  }

  return true;
}
