import React from "react";
import {PiMapPinLineFill} from "react-icons/pi";
import {PiPhonePauseBold} from "react-icons/pi";
import {FaClockRotateLeft} from "react-icons/fa6";
import {MdOutlineAttachEmail} from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4.25">
      {/* address */}
      <div className="flex flex-col gap-4.5">
        <div className="flex items-center gap-3 text-2xl font-bold text-teal-900">
          <span>
            <PiMapPinLineFill />
          </span>
          <span>Address:</span>
        </div>
        <p className="text-teal-600 text-[14px] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          pariatur?
        </p>
      </div>
      {/* phone */}
      <div className="flex items-center gap-3 text-teal-600 text-[14px] font-medium">
        <span className="text-teal-900">
          <PiPhonePauseBold size={20} />
        </span>
        <span>Tel :+9229341037</span>
      </div>
      {/* responese hours */}
      <div className="flex items-center gap-3 text-teal-600 text-[14px] font-medium">
        <span className="text-teal-900">
          <FaClockRotateLeft size={20} />
        </span>
        <span>Response hours: 8 to 20</span>
      </div>
      {/* email */}
      <div className="flex items-center gap-3 text-teal-600 text-[14px] font-medium">
        <span className="text-teal-900">
          <MdOutlineAttachEmail size={20} />
        </span>
        <span>Email: info@onlearn.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
