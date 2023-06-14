/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import useAxios from 'src/hooks/useAxios';
import { GET_PERSONAL_OPT } from 'src/Constants/PersonalConstant';
import { useRouter } from 'next/router';
import PersonalPresenter from './PersonalPresenter';
// inputImg : 이미지 들어가는 <div>
// files : 이미지 정보
// userImage : 이미지(files)를 form 데이터로 변환된 정보를 담고 있는 state

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
