import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonalDeletePresenter from './PersonalDeletePresenter';

const PersonalDeleteContainer = ({ users }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log('del', isChecked);
  return (
    <PersonalDeletePresenter users={users} isChecked={isChecked} setIsChecked={setIsChecked} />
  );
};
PersonalDeleteContainer.propTypes = {
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
export default PersonalDeleteContainer;
