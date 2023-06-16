import React from 'react';
import PropTypes from 'prop-types';
import { LOGIN_CONST } from 'src/Constants/LoginConstant';
import { SIGNUP_CONST } from 'src/Constants/signupConstant';
import Button from '../Button/Button';

const SignupFinishModalPresenter = ({ setIsSignup, email }) => (
  <div className="flex flex-col justify-center items-center">
    <p className="w-72 text-center text-gray-600 bg-gray-200 p-3 mt-10">{email}</p>
    <Button
      onClick={() => setIsSignup(false)}
      className="w-72 bg-orange-300 text-white rounded-md mt-10 p-2.5"
      content={LOGIN_CONST.CONTENT_KR}
    />
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">{SIGNUP_CONST.EMAIL_ISNOT_SEND}</span>
      <span
        onClick={() => console.log('이메일을 다시 보냈습니다.')}
        aria-hidden="true"
        type="button"
        className="w-fit text-red-600 cursor-pointer hover:underline"
      >
        {SIGNUP_CONST.EMAIL_RESEND}
      </span>
    </div>
  </div>
);
SignupFinishModalPresenter.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
export default SignupFinishModalPresenter;
