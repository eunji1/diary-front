/* eslint-disable react/forbid-prop-types */
import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import useAxios from 'src/hooks/useAxios';
import { POST_PERSONAL_UPDATE_OPT } from 'src/Constants/PersonalConstant';
import { useRouter } from 'next/router';
import PersonalAccountPresenter from './PersonalAccountPresenter';

const PersonalAccountContainer = ({ users }) => {
  const { operation } = useAxios();
  const router = useRouter();
  const [inputImg, setInputImg] = useState(null);
  console.log('users', users);
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const img = watch('image');
  useLayoutEffect(() => {
    if (img && img.length) setInputImg(URL.createObjectURL(img[0]));
  }, [img]);

  const handleUpdateProfile = handleSubmit(async (userData) => {
    try {
      const res = await operation(POST_PERSONAL_UPDATE_OPT(userData, users));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <PersonalAccountPresenter
      users={users}
      handleUpdateProfile={handleUpdateProfile}
      inputImg={inputImg}
      register={register}
      isSubmitting={isSubmitting}
      router={router}
    />
  );
};

PersonalAccountContainer.propTypes = {
  users: PropTypes.shape({
    info: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    image: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number),
      type: PropTypes.string,
    }),
  }).isRequired,
};
export default PersonalAccountContainer;
