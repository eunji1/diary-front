import { REGEX } from './constants';

export const SIGNUP_CONST = {
  EMAIL_AUTH_PAGE: '이메일 인증',
  EAMIL_AUTH_TEXT_LIST: ['마지막 단계입니다!',
    '인증 메일이 아래의 메일 주소로 전송되었습니다.',
    '24시간 이내로 인증을 완료해주세요!'],
  SIGNUP_PAGE: '회원가입',
  SIGNUP_TEXT_LIST: ['간편하게 회원가입하고', '다이어리를 이용해보세요'],
  TEMPORARY_BUTTON: '제출완료! 메일 전송 페이지 가보기',
  EMAIL_ISNOT_SEND: '메일을 못 받으셨나요? ',
  EMAIL_RESEND: '이메일 다시 보내기',
  SUBMIT: '제출',
  IS_ALREADY_SIGNUP: '이미 회원이신가요? ',
  GO_LOGIN: '로그인 하러가기',
};

export const SIGNUP_FORM = (register, errors, passwordRef) => ([
  {
    id: 'name',
    type: 'text',
    register: register('name', {
      required: { value: true, message: '이름을 입력해주세요' },
      pattern: { value: REGEX.name, message: '이름을 다시 확인해주세요' },
    }),
    invalid: errors.name,
    placeholder: '이름',
  },
  {
    id: 'email',
    type: 'text',
    register: register('email', {
      required: { value: true, message: '이메일을 입력해주세요' },
      pattern: { value: REGEX.email, message: '이메일 형식을 입력해주세요' },
    }),
    invalid: errors.email,
    placeholder: '이메일',
  },
  {
    id: 'password',
    type: 'password',
    register: register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요' },
      minLength: { value: 4, message: '4자리이상 입력해주세요' },
      maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
    }),
    invalid: errors.password,
    placeholder: '비밀번호',
  },
  {
    id: 'passwordCheck',
    type: 'password',
    register: register('passwordCheck', {
      required: { value: true, message: '비밀번호를 입력해주세요' },
      minLength: { value: 4, message: '4자리이상 입력해주세요' },
      validate: {
        check: (passwordCheck) => passwordCheck === passwordRef.current || '비밀번호가 다릅니다',
      },
    }),
    invalid: errors.passwordCheck,
    placeholder: '비밀번호 확인',
  },
]);

export const POST_SIGNUP_OPT = (resData) => ({
  method: 'post',
  url: '/users/signup/',
  payload: {
    email: resData.email,
    password: resData.password,
    name: resData.name,
    image: '',
  },
});
