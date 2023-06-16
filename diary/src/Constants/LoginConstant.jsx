import { REGEX } from './constants';

export const LOGIN_CONST = {
  CONTENT: 'LOGIN',
  FORM_NAME: '이름',
  FORM_EMAIL: '이메일',
  FORM_PASSWORD: '비밀번호',
  CONTENT_KR: '로그인',
  EXPLAIN_SIGNUP: '아직 회원이 아니라면? ',
  GO_SIGNUP: '회원가입 하러가기',
  EXPLAIN_LOSS_PASSWORD: '비밀번호를 잃어버렸다면? ',
  FIND_PASSWORD: '비밀번호 찾기? ',
  GOOGLE_SIMPLE: '구글로 간편 로그인',
};

export const LOGIN_FORM = (register) => ([
  {
    id: 'email',
    type: 'email',
    register: register('email', {
      required: { value: true, message: '이메일을 입력해주세요' },
      pattern: { value: REGEX.email, message: '이메일 형식을 입력해주세요' },
    }),
    placeholder: 'test@email.com',
  },
  {
    id: 'password',
    type: 'password',
    register: register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요' },
      minLength: { value: 4, message: '4자리이상 입력해주세요' },
      maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
    }),
    placeholder: '**********',
  },
]);

export const POST_LOGIN_OPT = (resData) => ({
  method: 'post',
  url: '/users/signin/',
  payload: {
    email: resData.email,
    password: resData.password,
    name: '',
    image: '',
  },
});

export const GET_SIGNUP_EMAIL_OPT = () => ({
  method: 'get',
  url: '/email-verify/:email/ssak1088@gmail.com',
});
