function sendit() {
  const username = document.getElementById("username");
  const useremail = document.getElementById("useremail");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");

  const expNameText = /^[가-힣]+$/;
  const expEmailText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

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

  return true;
}
