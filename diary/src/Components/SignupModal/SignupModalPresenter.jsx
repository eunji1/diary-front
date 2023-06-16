/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { SIGNUP_CONST } from 'src/Constants/signupConstant';
import SignupFinishModalContainer from '../SignupFinishModal/SignupFinishModalContainer';
import SignupFormModalContainer from '../SignupFormModal/SignupFormModalContainer';

// ?page=signup&email=44@sd.com
const SignupModalPresenter = ({ setIsSignup, page }) => (
  <>
    <div className="flex flex-col justify-center gap-1">
      <span className="text-2xl mb-2 font-bold text-center">
        {page === 'signup' ? SIGNUP_CONST.EMAIL_AUTH_PAGE : SIGNUP_CONST.SIGNUP_PAGE}
      </span>
      <div className="text-gray-400 text-sm text-center">
        {page === 'signup'
          ? SIGNUP_CONST.EAMIL_AUTH_TEXT_LIST.map((text) => <p key={v4()}>{text}</p>)
          : SIGNUP_CONST.SIGNUP_TEXT_LIST.map((text) => <p key={v4()}>{text}</p>)}
      </div>
    </div>
    {page === 'signup'
      ? <SignupFinishModalContainer setIsSignup={setIsSignup} />
      : <SignupFormModalContainer setIsSignup={setIsSignup} />}
  </>
);

SignupModalPresenter.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
export default SignupModalPresenter;
