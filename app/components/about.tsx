import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-full p-12 text-stone-900">
      <div className="w-full mx-auto p-12">
        <h2 className="text-4xl font-semibold">A little more about me</h2>
      </div>
      <div className="flex flex-row gap-12 p-4">
        <div>
          <Image
            src={"/yo.jpg"}
            width={600}
            height={600}
            alt="portrait of Paula Sánchez Mayor"
            className="rounded-xl"
          ></Image>
        </div>
        <div className="flex flex-col justify-center w-1/3 mx-auto">
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
