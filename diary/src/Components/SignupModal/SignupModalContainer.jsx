import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SignupModalPresenter from './SignupModalPresenter';

const SignupModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  const { page } = router.query || '';
  return (
    <SignupModalPresenter
      setIsSignup={setIsSignup}
      page={page || ''}
      router={router}
    />
  );
};
SignupModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupModalContainer;
