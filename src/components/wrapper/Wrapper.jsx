import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="p-10 grid grid-cols-4 grid-flow-row gap-5">
            {children}
    </div>
  );
};

export default Wrapper;
