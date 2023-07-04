/* eslint-disable react/forbid-prop-types */
import React, { useLayoutEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import makeFormData from 'src/Utils/makeFormData';
import useAxios from 'src/hooks/useAxios';
import PersonalModifyPresenter from 'src/Components/PersonalModify/PersonalModifyPresenter';

const PersonalModifyContainer = ({ users }) => {
  const [inputImg, setInputImg] = useState(null);
  const [pwCheck, setPwCheck] = useState(false);
  const passwordRef = useRef(null);
  const { response, operation } = useAxios();
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm();
  const img = watch('image');

  useLayoutEffect(() => {
    if (img && img.length) setInputImg(URL.createObjectURL(img[0]));
  }, [img]);

  passwordRef.current = getValues('password');
  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
  });
  const passwordCheckRegister = register('passwordCheck', {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    validate: {
      check: (passwordCheck) => passwordCheck === passwordRef.current || '비밀번호가 다릅니다',
    },
  });

  const handleUpdateProfile = handleSubmit(async (userData) => {
    try {
      await operation({
        method: 'post',
        url: '/users/updateprofile',
        payload: makeFormData({
          image: userData.image[0] || response?.result.image,
          info: userData.info,
          name: userData.name || response?.result.name,
          email: response?.result.email,
          password: response?.result.password,
        }),
        formdata: true,
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <PersonalModifyPresenter
      users={users}
      handleUpdateProfile={handleUpdateProfile}
      inputImg={inputImg}
      register={register}
      isSubmitting={isSubmitting}
      passwordRegister={passwordRegister}
      passwordCheckRegister={passwordCheckRegister}
      isDirty={isDirty}
      pwCheck={pwCheck}
      setPwCheck={setPwCheck}
    />
  );
};
PersonalModifyContainer.propTypes = {
//   imgRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  users: PropTypes.shape({
    info: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number),
      type: PropTypes.string,
    }),
  }).isRequired,
};
export default PersonalModifyContainer;
