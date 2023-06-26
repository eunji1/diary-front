/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { LOGIN_CONST } from 'src/Constants/LoginConstant';
import { v4 } from 'uuid';
// import getGoogleUrl from 'src/Utils/getGoogleUrl';

const LoginModalPresenter = ({
  handleLogin,
  isSubmitting,
  setIsSignup,
  loginFormArr,
  // googleUrl,
}) => (
  <div className="flex flex-col justify-center gap-1">
    <p className="text-2xl mb-2 font-bold text-center">{LOGIN_CONST.CONTENT}</p>
    <form onSubmit={handleLogin}>
      <div className="flex justify-center m-3">
        <div className="flex flex-col justify-around">
          <p className="px-3">{LOGIN_CONST.FORM_EMAIL}</p>
          <p className="px-3">{LOGIN_CONST.FORM_PASSWORD}</p>
        </div>
        <div className="flex flex-col justify-between gap-1">
          {loginFormArr.map((element) => (
            <input
              key={v4()}
              id={element.id}
              type={element.type}
              placeholder={element.placeholder}
              className="border-2 rounded-md h-10 px-3"
              defaultValue={element.defaultValue}
              {...element.register}
            />
          ))}
        </div>
      </div>
      <div className="m-6">
        <button
          className="w-full bg-orange-300 text-white rounded-md p-2.5"
          type="submit"
          disabled={isSubmitting}
        >
          {LOGIN_CONST.CONTENT_KR}
        </button>
      </div>
    </form>
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">{LOGIN_CONST.EXPLAIN_SIGNUP}</span>
      <span
        onClick={() => setIsSignup(true)}
        aria-hidden="true"
        className="w-fit text-blue-900 cursor-pointer hover:underline"
      >
        {LOGIN_CONST.GO_SIGNUP}
      </span>
    </div>
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">{LOGIN_CONST.EXPLAIN_LOSS_PASSWORD}</span>
      <span
        onClick={() => setIsSignup(true)}
        aria-hidden="true"
        className="w-fit text-blue-900 cursor-pointer hover:underline"
      >
        {LOGIN_CONST.FIND_PASSWORD}
      </span>
    </div>
    {/* <button
      type="button"
      className="bg-gray-300 p-2 px-10 rounded-xl"
    >
      <a href={getGoogleUrl(googleUrl)}>
        {LOGIN.GOOGLE_SIMPLE}
      <a href={getGoogleUrl(googleUrl)}>
        {LOGIN.GOOGLE_SIMPLE}
      </a>
    </button> */}
  </div>
);
LoginModalPresenter.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  loginFormArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    register: PropTypes.shape({
      name: PropTypes.string,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
      ref: PropTypes.func,
    }).isRequired,
    placeholder: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
  })),
  isSubmitting: PropTypes.bool.isRequired,
  setIsSignup: PropTypes.func.isRequired,
  // googleUrl: PropTypes.string.isRequired,
};

LoginModalPresenter.defaultProps = {
  loginFormArr: PropTypes.arrayOf(PropTypes.shape({
    invalid: PropTypes.isNotNull,
  })),
};
export default LoginModalPresenter;
