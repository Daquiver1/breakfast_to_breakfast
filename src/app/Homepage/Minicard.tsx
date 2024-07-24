import React from 'react';

const Minicard = ({ icon, text }) => {
  return (
    <div className="bg-slate-300 w-[14rem] h-[4rem] rounded-[10px] text-[12px] flex flex-col items-center justify-center">
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default Minicard;
