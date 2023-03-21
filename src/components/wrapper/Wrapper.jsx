import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="p-10 grid grid-flow-row gap-5 place-items-center
    sm:grid-cols-1 
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
    ">
            {children}
    </div>
  );
};

export default Wrapper;
