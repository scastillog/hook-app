import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FormContext = React.createContext({ state: '', setState: () => {} });
export const FormProvider = ({ children }) => {
  const { state, setState } = useState('Sebas');
  return <FormContext.Provider value={{ state, setState }}>{children}</FormContext.Provider>;
};
FormProvider.propTypes = { children: PropTypes.node.isRequired };
