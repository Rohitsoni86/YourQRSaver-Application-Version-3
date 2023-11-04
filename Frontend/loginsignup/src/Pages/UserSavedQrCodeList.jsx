import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSavedQRList,
  deleteQRFromList,
} from "../appStore/Features/SaveAndDeleteQR";

export default function UserSavedQrCodeList() {
  // GET TOKEN

  // Rect Redux

  const dispatch = useDispatch();
  const authenticationState = useSelector((state) => state.authentication);

  const userSavedQRList = useSelector((state) => state.savedQRList);

  // DELETING QR CODE

  const deleteQRCode = (objectID) => {
    let tokenF = console.log(objectID);
    console.log(tokenF);

    const myDetailsObj = {
      tokenF: authenticationState.userToken,
      QRId: objectID,
    };
    dispatch(deleteQRFromList(myDetailsObj))
      .unwrap()
      .then((msgRecv) => {
        console.log(msgRecv);
        dispatch(fetchSavedQRList(authenticationState.userToken));
      });
  };

  useEffect(() => {
    console.log(authenticationState.userToken);
    if (authenticationState.userToken) {
      dispatch(fetchSavedQRList(authenticationState.userToken));
    } else {
      return;
    }
  }, []);

  // After fetching Data if Data Comes then map the Data if not come then show nothing

  return (
    <>
      {userSavedQRList.isLoading ? (
        <>
          <h2 className="text-2xl text-black font-bold">
            Please Login First !!
          </h2>
        </>
      ) : (
        <div className="flex flex-wrap gap-10 p-20 justify-center items-center min-h-full">
          {userSavedQRList.QRSavedList.length &&
            userSavedQRList.QRSavedList.map((elem, index) => {
              return (
                <>
                  <div
                    key={elem._id}
                    className="z-5 border-2 shadow-lg relative flex flex-col rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] bg-white undefined"
                  >
                    <div className="h-full w-full">
                      <div className="relative w-full">
                        <img
                          src={elem.DataImageURL}
                          className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                          alt="QR CODE IMAGE"
                        />
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                          <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>

                      <div className="flex items-center justify-center md:items-center  ">
                        <button
                          onClick={() => deleteQRCode(elem._id)}
                          className="linear rounded-[20px] bg-blue-300 w-full px-4 py-2 text-base font-medium text-black transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
}
