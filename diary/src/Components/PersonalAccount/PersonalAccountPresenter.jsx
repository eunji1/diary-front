/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { PERSONAL_CONST } from 'src/Constants/PersonalConstant';

const PersonalAccountPresenter = ({
  users,
  handleUpdateProfile,
  inputImg,
  register,
  isSubmitting,
  router,
}) => (
  <div className="flex flex-col gap-5 min-w-[360px] w-1/2 bg-white shadow-md p-10 rounded-lg">
    <div>
      <h3 className="text-xl font-bold mb-3">{PERSONAL_CONST.ACCOUNT_TITLE}</h3>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleUpdateProfile}
      >
        <div className="flex flex-col gap-5">
          <p className="text-sm text-gray-600 font-bold">{PERSONAL_CONST.MY_PROFILE_IMAGE}</p>
          <div className="flex gap-5">
            <label htmlFor="file">
              <div className=" w-20 h-20 bg-cover rounded-full border border-black">
                <Image
                  src={inputImg || users?.image || '/Logo/pen.svg'}
                  alt="image"
                  className=" w-20 h-20 bg-cover rounded-full border border-black"
                  width="20"
                  height="20"
                  priority
                />
              </div>
              <input
                className="hidden"
                id="file"
                type="file"
                accept="image/*"
                {...register('image')}
              />
            </label>
            <div className="my-auto">
              <input
                id="info"
                type="text"
                placeholder={PERSONAL_CONST.INFO_PLACEHOLDER}
                {...register('info')}
                defaultValue={users?.info || ''}
                className="outline-none border-b-2 border-gray-400 text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600 font-bold">{PERSONAL_CONST.NAME}</p>
          <input
            id="name"
            type="text"
            placeholder={PERSONAL_CONST.NAME}
            {...register('name')}
            defaultValue={users?.name || ''}
            className="border-2 border-gray-300 py-1 px-2.5 rounded"
          />
          <p className="text-sm text-gray-600 font-bold">{PERSONAL_CONST.EMAIL}</p>
          <input
            value={users?.email || ''}
            className="border-2 border-gray-300 py-1 px-2.5 bg-gray-200 text-gray-500 rounded outline-none"
            readOnly
          />
        </div>
        <div>
          <button
            className="w-full bg-orange-300 text-white rounded-md p-2.5 hover:bg-orange-400"
            type="submit"
            disabled={isSubmitting}
          >
            {PERSONAL_CONST.ACCOUNT_SUBMIT}
          </button>
        </div>
      </form>
      <button
        type="button"
        className="text-sm text-red-600 underline"
        onClick={() => { router.push('/Personal?id=userdel'); }}
      >
        {PERSONAL_CONST.DELETE_USER}
      </button>
    </div>
  </div>
);

PersonalAccountPresenter.propTypes = {
  users: PropTypes.shape({
    info: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string,
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number),
        type: PropTypes.string,
      }),
    ]),
  }).isRequired,
  handleUpdateProfile: PropTypes.func.isRequired,
  inputImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default PersonalAccountPresenter;
