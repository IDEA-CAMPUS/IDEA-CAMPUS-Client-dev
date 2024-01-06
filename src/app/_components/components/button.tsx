import { useEffect, useState } from "react";

export const BanButton = ({ ban }: { ban: true | false }) => {
  const [type, setType] = useState(Boolean);

  //정보 초기 설정
  useEffect(() => {
    setType(ban);
  }, []);

  const clickHandle = () => {
    setType(!type);
    //api호출
  };
  return (
    <button
      className={`w-fit-content h-[30px] text-center rounded-lg  text-white ml-[30px] px-[7px] box-border ${
        type ? "bg-blue-400" : "bg-red-400"
      }`}
      onClick={clickHandle}
    >
      {type ? "정지해제" : "정지하기"}
    </button>
  );
};

export const AdminButton = ({ admin }: { admin: true | false }) => {
  const [type, setType] = useState(Boolean);

  //정보 초기 설정
  useEffect(() => {
    setType(admin);
  }, []);

  const clickHandle = () => {
    setType(!type);
    //api호출
  };
  return (
    <button
      className={`w-fit-content h-[30px] text-center rounded-lg  text-white ml-[15px] px-[7px] box-border ${
        type ? "bg-blue-400" : "bg-yellow-400"
      }`}
      onClick={clickHandle}
    >
      {type ? "관리자 해제" : "관리자 부여"}
    </button>
  );
};
