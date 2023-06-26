/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import useAxios from 'src/hooks/useAxios';
import { GET_PERSONAL_OPT } from 'src/Constants/PersonalConstant';
import { useRouter } from 'next/router';
import { TEMP_AUTH } from 'src/Constants/constants';
import PersonalPresenter from 'src/Components/Personal/PersonalPresenter';

const PersonalContainer = () => {
  const { response, operation } = useAxios();
  const router = useRouter();
  useEffect(() => {
    if (TEMP_AUTH) operation(GET_PERSONAL_OPT());
  }, []);

  return (
    <PersonalPresenter
      users={response?.result || {}}
      router={router}
    />
  );
};

export default PersonalContainer;
