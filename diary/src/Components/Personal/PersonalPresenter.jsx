/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { PERSONAL_CONST } from 'src/Constants/PersonalConstant';
import { v4 } from 'uuid';
import PersonalModifyContainer from 'src/Components/PersonalModify/PersonalModifyContainer';
import NavBarContainer from 'src/Components/NavBar/NavBarContainer';
import PersonalAccountContainer from 'src/Components/PersonalAccount/PersonalAccountContainer';
import PersonalDeleteContainer from 'src/Components/PersonalDelete/PersonalDeleteContainer';

const PersonalPresenter = ({ users, router }) => {
  const { id } = router.query || '';
  return (
    <>
      <NavBarContainer yearInMonth={new Date().getFullYear()} />
      <div className="flex h-screen justify-center items-center bg-orange-200">
        <div className="w-3/5">
          <div className="flex justify-center">
            {(!id || id === 'account') && <PersonalAccountContainer users={users} />}
            {id === 'modify' && <PersonalModifyContainer users={users} />}
            {id === 'userdel' && <PersonalDeleteContainer users={users} />}
            <div className="flex flex-col gap-1 mt-8 text-white">
              {PERSONAL_CONST.TAG.map((ele) => (
                <div
                  key={v4()}
                  className={`bg-${ele.color}-600 w-5 h-16 rounded-r shadow hover:after:content-['|'] hover:cursor-pointer`}
                  onClick={() => router.push(`/Personal?id=${ele.query}`)}
                  aria-hidden="true"
                >
                  {ele.icons}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PersonalPresenter.propTypes = {
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
  router: PropTypes.object.isRequired,
};

export default PersonalPresenter;
