import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { LOGIN_FORM, POST_LOGIN_OPT } from 'src/Constants/LoginConstant';
import { useForm } from 'react-hook-form';
import useAxios from 'src/hooks/useAxios';
import LoginModalPresenter from './LoginModalPresenter';

const LoginModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  // const googleUrl = ((router.state)?.from?.pathname) || '/';

  const loginFormArr = LOGIN_FORM(register);
  const { operation } = useAxios();
  const handleLogin = handleSubmit(async (resData) => {
    try {
      const res = operation(POST_LOGIN_OPT(resData));
      if (res.data.code === 'USI20001') {
        router.push('/Cover');
      }
    } catch (error) {
      console.log(error);
    }
  });
  //  "Email 인증을 하게 되면로 아래 링크에 코드를 보내 여부를 알려주게된다
  // https://sej.mydiary.site/signin?code=${code} "

  // useEffect(() => {
  //   operation(GET_SIGNUP_EMAIL_OPT());
  // }, []);
  return (
    <LoginModalPresenter
      handleLogin={handleLogin}
      isSubmitting={isSubmitting}
      setIsSignup={setIsSignup}
      loginFormArr={loginFormArr}
      // googleUrl={googleUrl}
    />
  );
};
LoginModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default LoginModalContainer;
