import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAxios from 'src/hooks/useAxios';
import PersonalDeletePresenter from './PersonalDeletePresenter';

const PersonalDeleteContainer = ({ users }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { operation } = useAxios();

  return (
    <PersonalDeletePresenter
      users={users}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      operation={operation}
    />
  );
};
PersonalDeleteContainer.propTypes = {
  users: PropTypes.shape({
    info: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.oneOfType(PropTypes.string, PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number),
      type: PropTypes.string,
    })),
  }).isRequired,
};
export default PersonalDeleteContainer;
