/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useLayoutEffect, useEffect, useRef, useState,
} from 'react';
// import { useForm } from 'react-hook-form';
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
    <PersonalPresent
      onChange={onChange}
      users={response?.result || {}}
  // passwordRegister={passwordRegister}
  // passwordCheckRegister={passwordCheckRegister}
  // isDirty={isDirty}
  // errors={errors}
  // handleSignup={handleSignup}
      postModify={postModify}
      imgRef={imgRef}
    />
  );
};

export default PersonalContainer;
