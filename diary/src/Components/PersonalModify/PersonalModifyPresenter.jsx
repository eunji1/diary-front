import React from 'react';
import PropTypes from 'prop-types';

const PersonalModifyPresenter = ({
  // users,
  handleUpdateProfile,
  isSubmitting,
  passwordRegister,
  passwordCheckRegister,
  pwCheck,
  setPwCheck,
}) => (
  <div className="flex flex-col gap-5 min-w-[360px] w-1/2 bg-white shadow-md p-10 rounded-lg">

    <div>
      <h3 className="text-xl font-bold mb-3">계정 보안</h3>
      {pwCheck
        ? (
          <form>
            <div>
              <input
                id="password"
                type="password"
                {...passwordRegister}
            // aria-invalid={!isDirty ? password.invalid : false}
                placeholder="새 비밀번호"
                className="border-2 rounded-md px-3 h-10"
              />
              <input
                id="passwordCheck"
                type="password"
                {...passwordCheckRegister}
            // aria-invalid={!isDirty ? passwordCheck.invalid : false}
                placeholder="비밀번호 확인"
                className="border-2 rounded-md px-3 h-10"
              />
            </div>
            <div>
              <button
                className="w-fit p-1.5 bg-gray-400"
                type="submit"
                onClick={() => setPwCheck(false)}
                disabled={isSubmitting}
              >
                변경내용 저장
              </button>
            </div>
          </form>

        )
        : (
          <form
            className="flex flex-col gap-3"
            onSubmit={handleUpdateProfile}
          >
            <p className="text-sm text-gray-600 font-bold">비밀번호 확인</p>
            <p className="text-sm">계정 설정을 변경하기 전에 비밀번호를 확인해주세요</p>
            <input
              id="passwordCheck"
              type="password"
              {...passwordCheckRegister}
              placeholder="비밀번호 확인"
              className="border-2 rounded-md px-3 h-10"
            />
            <button
              type="submit"
              className="w-fit p-1.5 bg-gray-400"
              onClick={() => setPwCheck(true)}
            >
              비밀번호 일치하면 ok
            </button>
          </form>
        )}

    </div>
  </div>

);

PersonalModifyPresenter.propTypes = {
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
  handleUpdateProfile: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  passwordRegister: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    ref: PropTypes.func,
  }).isRequired,
  passwordCheckRegister: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    ref: PropTypes.func,
  }).isRequired,
  isDirty: PropTypes.bool.isRequired,
  pwCheck: PropTypes.bool.isRequired,
  setPwCheck: PropTypes.func.isRequired,
};

export default PersonalModifyPresenter;
