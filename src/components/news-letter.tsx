import React from "react";
import Button from "./ui/button";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-bold text-teal-900 text-center">
        Stay up to date with the latest courses
      </p>
      <div className="flex items-center relative">
        <input
          type="email"
          placeholder="Enter"
          className="outline-none bg-white py-6 w-full rounded-2xl px-4"
        />
        <Button
          className="absolute right-5 top-1/2 -translate-y-1/2"
          color="secondary"
          size="large"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
