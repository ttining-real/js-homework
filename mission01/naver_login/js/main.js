const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const userEmail = document.querySelector('.userEmail');
const userPassword = document.querySelector('.userPassword');

function validEmail() {
  if (emailReg(userEmail.value) === false) {
    userEmail.classList.add('is--invalid');
  } else {
    userEmail.classList.remove('is--invalid');
  }
}

function validPassword() {
  if (pwReg(userPassword.value) === false) {
    userPassword.classList.add('is--invalid');
  } else {
    userPassword.classList.remove('is--invalid');
  }
}

const btnLogin = document.querySelector('.btn-login');

function handleClick() {
  let valueId = userEmail.value;
  let valuePw = userPassword.value;

  if (user.id === valueId && user.pw === valuePw) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호가 틀렸습니다.');
  }
}

btnLogin.addEventListener('click', handleClick);
