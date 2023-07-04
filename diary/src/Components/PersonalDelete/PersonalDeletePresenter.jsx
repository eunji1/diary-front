import React from 'react';
import PropTypes from 'prop-types';
import { PERSONAL_CONST, POST_USER_DELETE } from 'src/Constants/PersonalConstant';
import { v4 } from 'uuid';
import Button from 'src/Components/Button/Button';

const PersonalDeletePresenter = ({
  users, isChecked, setIsChecked, operation,
}) => (
  <div className="flex flex-col gap-5 min-w-[360px] w-1/2 bg-white shadow-md p-10 rounded-lg">
    <div>
      <h2 className="text-xl font-bold mb-3">{PERSONAL_CONST.DELETE_USER}</h2>
      <div className="flex flex-col gap-3">
        <h3 className="text-red-600 font-bold">{PERSONAL_CONST.REAL_WANT_DELETE}</h3>
        <div className="text-sm text-gray-700">
          {PERSONAL_CONST.DELETE_EXPLAIN.map((line) => <p key={v4()} className="mt-1">{line}</p>)}
        </div>
        <p>{PERSONAL_CONST.INPUT_EMAIL}</p>
        <input
          className="border-2 border-gray-300 py-1 px-2.5 rounded"
          type="text"
          placeholder={users?.email}
        />
        <div>
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(true)} />
          <span className="text-sm">{PERSONAL_CONST.LAST_CHECKBOX}</span>
        </div>
        <Button
          disabled={!isChecked}
          onClick={() => operation(POST_USER_DELETE)}
          className={`px-1.5 py-1 text-white rounded ${isChecked ? 'bg-gray-600' : 'bg-gray-300'}`}
          content="계정삭제"
        />
      </div>
    </div>
  </div>
);

PersonalDeletePresenter.propTypes = {
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
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  operation: PropTypes.func.isRequired,
};
export default PersonalDeletePresenter;
