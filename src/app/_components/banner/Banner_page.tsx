import React from "react";

interface BannerProps {
  id: number;
  title: string;
  register: string;
  day: string;
}

const Banner_page: React.FC<BannerProps> = ({ id, title, register, day }) => {
  //백엔드에서 배너 번호도 같이 저장하는 지 여부 확인
  return (
    <main className="w-full">
      <hr className="w-full border-gray-300"></hr>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            <p className="w-4 ml-8">{id}</p>
            <p className="w-22 ml-20">{title}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <p className="w-24 mr-1">{register}</p>
            <p className="w-20 mr-2">{day}</p>
          </div>
          <button className="bg-red-500 h-8 p-1 m-1 rounded-md hover:bg-red-600">
            삭제하기
          </button>
        </div>
      </div>
      <hr className="w-full border-gray-300"></hr>
    </main>
  );
};

export default Banner_page;
