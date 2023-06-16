import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { POST_SIGNUP_OPT, SIGNUP_FORM } from 'src/Constants/signupConstant';
import useAxios from 'src/hooks/useAxios';
import SignupFormModalPresenter from './SignupFormModalPresenter';

const SignupFormModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  const passwordRef = useRef(null);
  const {
    register,
    getValues,
    handleSubmit,
    formState: {
      isSubmitting, isDirty, errors,
    },
  } = useForm();
  const { operation } = useAxios();
  const handleSignup = handleSubmit(async (resData) => {
    try {
      const res = operation(POST_SIGNUP_OPT(resData));
      if (res.data.code === 'USI10001') {
        router.push(`?page=signup&email=${resData.email}`);
      } else {
        console.log('가입 실패');
      }
    } catch (error) {
      console.log(error);
    }
  });

  passwordRef.current = getValues('password');
  const signupFormArr = SIGNUP_FORM(register, errors, passwordRef);

  return (
    <SignupFormModalPresenter
      setIsSignup={setIsSignup}
      handleSignup={handleSignup}
      signupFormArr={signupFormArr}
      isDirty={isDirty}
      isSubmitting={isSubmitting}
    />
  );
};

SignupFormModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupFormModalContainer;
