import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FormContext = React.createContext({ state: '', setState: () => {} });
export const FormProvider = ({ children }) => {
  const [state, setState] = useState('Sebas');
  const value = useMemo(
    () => ({
      state,
      setState
    }),
    [state]
  );
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
FormProvider.propTypes = { children: PropTypes.node.isRequired };
