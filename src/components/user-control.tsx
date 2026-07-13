import React from "react";

const UserControl = () => {
  return (
    <div className="flex items-center gap-8">
      <button className="px-5 py-2 rounded-[10px] bg-white text-teal-900">
        LOG IN
      </button>
      <button className="px-5 py-2 rounded-[10px] bg-teal-900 text-white">
        SIGN UP
      </button>
    </div>
  );
};

export default UserControl;
