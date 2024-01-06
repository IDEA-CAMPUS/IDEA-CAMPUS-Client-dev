"use client";

import Layout from "@/app/_components/layout/Layout";
import Image from "next/image";
import { UserCard } from "@/app/_components/components/card";
import { useEffect, useState } from "react";

interface User {
  name?: string;
  nickName?: string;
  email?: string;
  number?: number;
  registDate?: string;
}

export default function user_manage() {
  const [userData, setUserData] = useState<User[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    //getUserData((response)=>{
    //   setUserData(response)
    // })
    //초기에 유저정보 받아와서 저장하기
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const sortUserData = (option: string) => {
    const sortedData = [...userData].sort((a, b) => {
      if (option === "name") {
        return (a.name || "").localeCompare(b.name || "");
      }
      if (option === "nickName") {
        return (a.nickName || "").localeCompare(b.nickName || "");
      }
      if (option === "email") {
        return (a.email || "").localeCompare(b.email || "");
      }
      if (option === "number") {
        return (a.number || 0) - (b.number || 0);
      }
      if (option === "registDate") {
        return (a.registDate || "").localeCompare(b.registDate || "");
      }
      return 0;
    });
    setUserData(sortedData);
  };

  useEffect(() => {
    sortUserData(selectedOption);
  }, [selectedOption]);

  return (
    <Layout>
      <div className="w-full h-full bg-gray-100 flex flex-col px-[15px] py-[15px] box-border">
        <div className="w-full h-fit-content text-[24px] mb-[15px]">
          회원 관리
        </div>
        <div className="w-full h-fit-content min-h-[200px] bg-white px-[15px] py-[15px] box-border">
          <input
            placeholder="이름으로 검색하세요"
            className="px-[5px] py-[5px] box-border"
          ></input>
          <div className="flex w-full mt-[20px] mb-[10px] ">
            <div className="min-w-[120px] text-[18px] flex items-center ">
              유저 이름{" "}
              <label className="ml-[5px]">
                <input
                  type="radio"
                  value="name"
                  checked={selectedOption === "name"}
                  onChange={() => handleOptionChange("name")}
                  style={{ display: "none" }}
                />
                <Image
                  src="/polygon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={selectedOption === "name" ? "scale-[-1]" : ""}
                  onClick={() => handleOptionChange("name")}
                />
              </label>
            </div>

            <div className="min-w-[200px] text-[18px] flex items-center">
              유저 닉네임
              <label className="ml-[5px]">
                <input
                  type="radio"
                  value="nickName"
                  checked={selectedOption === "nickName"}
                  onChange={() => handleOptionChange("nickName")}
                  style={{ display: "none" }}
                />
                <Image
                  src="/polygon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={selectedOption === "nickName" ? "scale-[-1]" : ""}
                  onClick={() => handleOptionChange("nickName")}
                />
              </label>
            </div>
            <div className="min-w-[370px] text-[18px] flex items-center">
              유저 이메일
              <label className="ml-[5px]">
                <input
                  type="radio"
                  value="email"
                  checked={selectedOption === "email"}
                  onChange={() => handleOptionChange("email")}
                  style={{ display: "none" }}
                />
                <Image
                  src="/polygon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={selectedOption === "email" ? "scale-[-1]" : ""}
                  onClick={() => handleOptionChange("email")}
                />
              </label>
            </div>
            <div className="min-w-[200px] text-[18px] flex items-center">
              유저 연락처
              <label className="ml-[5px]">
                <input
                  type="radio"
                  value="number"
                  checked={selectedOption === "number"}
                  onChange={() => handleOptionChange("number")}
                  style={{ display: "none" }}
                />
                <Image
                  src="/polygon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={selectedOption === "number" ? "scale-[-1]" : ""}
                  onClick={() => handleOptionChange("number")}
                />
              </label>
            </div>
            <div className="min-w-[80px] text-[18px] flex items-center">
              가입 일자
              <label className="ml-[5px]">
                <input
                  type="radio"
                  value="registDate"
                  checked={selectedOption === "registDate"}
                  onChange={() => handleOptionChange("registDate")}
                  style={{ display: "none" }}
                />
                <Image
                  src="/polygon.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={
                    selectedOption === "registDate" ? "scale-[-1]" : ""
                  }
                  onClick={() => handleOptionChange("registDate")}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {/* {userData.map((User, index) => (
              <UserCard key={index} User={User}></UserCard>
            ))} */}
            <UserCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
