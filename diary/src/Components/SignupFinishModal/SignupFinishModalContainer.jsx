import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SignupFinishModalPresenter from './SignupFinishModalPresenter';

const SignupFinishModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  const { email } = router.query || '';
  return (
    <SignupFinishModalPresenter setIsSignup={setIsSignup} email={email} />
  );
};
SignupFinishModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupFinishModalContainer;
