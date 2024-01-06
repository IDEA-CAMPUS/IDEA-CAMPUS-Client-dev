import { Interface } from "readline";
import { AdminButton, BanButton } from "./button";

interface User {
  name?: string;
  nickName?: string;
  email?: string;
  number?: number;
  registDate?: string;
  ban: boolean;
  admin: boolean;
}

export const UserCard = ({ User }: { User?: Interface }) => {
  return (
    <div className="flex w-full h-[40px] items-center border border-x-0 border-y-gray-400">
      <div className="min-w-[120px] text-[18px] flex items-center ml-[5px]">
        김길동
        {/* User.name */}
      </div>
      <div className="min-w-[200px] text-[18px] flex items-center">
        Nickname
        {/* User.nickName */}
      </div>
      <div className="min-w-[370px] text-[18px] flex items-center">
        abcdefghijklnm@gmail.com
        {/* User.email */}
      </div>
      <div className="min-w-[200px] text-[18px] flex items-center">
        01082199102
        {/* User.number */}
      </div>
      <div className="min-w-[80px] text-[18px] flex items-center">
        2024.1.19
        {/* User.registDate */}
      </div>

      <BanButton ban={false} />
      {/* <BanButton ban={User.ban} /> */}
      <AdminButton admin={false} />
      {/* <AdminButton admin={User.admin} /> */}
    </div>
  );
};
