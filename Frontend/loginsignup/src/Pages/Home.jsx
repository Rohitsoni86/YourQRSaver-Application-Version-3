import React, { useState, useEffect } from "react";
// REDUX TOOLKIT

import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const userDetailsstate = useSelector((state) => state.userdetails);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userDetailsstate);
    if (!userDetailsstate.isLoading) {
      console.log(userDetailsstate.userDetailsFetched);
      // setuserPresent(true);
    } else {
      console.log(userDetailsstate.isLoading);
      return;
    }
  }, [userDetailsstate.isLoading]);

  return (
    <>
      {userDetailsstate.isLoading ? (
        <>
          <h2 className="text-2xl text-black font-bold">
            Please Login First !!
          </h2>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <div className="relative mx-10 flex flex-col items-center rounded-[20px] md:w-[400px] md:mx-auto p-4 bg-pink-300 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
            <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <img
                src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
              />
              <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img
                  className="h-full w-full rounded-full"
                  src={userDetailsstate.userDetailsFetched.ProfilePhoto}
                  alt="Profile Photo"
                />
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                {userDetailsstate.userDetailsFetched.FirstName.toUpperCase()}{" "}
                {userDetailsstate.userDetailsFetched.LastName.toUpperCase()}
              </h4>
              <p className="text-base font-normal text-gray-600">
                {userDetailsstate.userDetailsFetched.UserLoginId}
              </p>
            </div>
            <div className="mt-6 mb-3 flex flex-wrap justify-between gap-14 md:!gap-14">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-normal text-gray-600">
                  <span className="text-md font-bold text-black">Email :</span>{" "}
                  {userDetailsstate.userDetailsFetched.Email}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-normal text-gray-600">
                  <span className="text-md font-bold text-black">Role:</span>{" "}
                  {userDetailsstate.userDetailsFetched.Role}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-normal text-gray-600">
                  <span className="text-md font-bold text-black">
                    Nationality :
                  </span>{" "}
                  {userDetailsstate.userDetailsFetched.Nationality}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-normal text-gray-600">
                  <span className="text-md font-bold text-black">Phone :</span>{" "}
                  {userDetailsstate.userDetailsFetched.Phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
