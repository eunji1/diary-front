/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import useAxios from 'src/hooks/useAxios';
import { GET_PERSONAL_OPT } from 'src/Constants/PersonalConstant';
import { useRouter } from 'next/router';
import PersonalPresenter from './PersonalPresenter';

const PersonalContainer = () => {
  const { response, operation } = useAxios();
  const router = useRouter();
  console.log('get', response);

  useEffect(() => {
    operation(GET_PERSONAL_OPT());
  }, []);

  return (
    <PersonalPresenter
      users={response?.result || {}}
      router={router}
    />
  );
};

export default PersonalContainer;
