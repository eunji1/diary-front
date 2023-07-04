import { BiMessageAltEdit, BiUserPin } from 'react-icons/bi';
import makeFormData from 'src/Utils/makeFormData';

export const PERSONAL_CONST = {
  TAG: [
    {
      query: 'account', color: 'red', icons: <BiUserPin size="18" />,
    },
    {
      query: 'modify', color: 'orange', icons: <BiMessageAltEdit size="18" />,
    },
  ],
  ACCOUNT_TITLE: '회원 정보',
  MY_PROFILE_IMAGE: '내 프로필 사진',
  INFO_PLACEHOLDER: '"나를 소개해보세요"',
  NAME: '이름',
  EMAIL: 'email',
  ACCOUNT_SUBMIT: '변경내용 저장',
  DELETE_USER: '계정 삭제',
  REAL_WANT_DELETE: '정말로 계정을 삭제할까요?',
  DELETE_EXPLAIN: ['계정을 삭제하면', '모든 데이터가 영구적으로 삭제됩니다.',
    '삭제를 원하신다면', '확인을 위해 나의 계정을 입력해주세요'],
  INPUT_EMAIL: '나의 계정 입력',
  LAST_CHECKBOX: '내 모든 데이터가 삭제됨을 이해했습니다.',
};

export const GET_PERSONAL_OPT = () => ({
  method: 'get',
  url: '/users/getprofile',
});

export const POST_PERSONAL_UPDATE_OPT = (userData, users) => ({
  method: 'post',
  url: '/users/updateprofile',
  payload: makeFormData({
    image: userData.image[0] || users?.image,
    info: userData.info || users?.info,
    name: userData.name || users?.name,
    email: users?.email,
    password: users?.password,
  }),
  formdata: true,
});

export const POST_USER_DELETE = {
  method: 'post',
  url: 'users/delete',
};
