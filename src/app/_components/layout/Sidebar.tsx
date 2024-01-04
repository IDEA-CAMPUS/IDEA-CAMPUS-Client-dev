import React, { useState } from "react";
import SidebarItemComponent from "./SidebarItemComponent";
// 사이드바 항목 타입 정의
type SidebarItem = {
  id: string;
  label: string;
  url: string | null;
  children?: SidebarItem[];
};

// 전체 사이드바 컴포넌트
const Sidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  // 예시 데이터
  const sidebarData: SidebarItem[] = [
    {
      id: "1",
      label: "배너관리",
      url: "null",
      children: [
        {
          id: "1.1",
          label: "아디이어 존 관리 배너",
          url: "banner/IdeaManage",
        },
        {
          id: "1.2",
          label: "프로젝트 관리 배너",
          url: "banner/ProjectManage",
        },
        {
          id: "1.3",
          label: "홈화면 배너",
          url: "banner/HomeManage",
        },
        {
          id: "1.4",
          label: " 배너 등록",
          url: "banner/Registration",
        },
      ],
    },
    {
      id: "2",
      label: "회원 관리",
      url: null,
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md w-64 min-h-screen">
      {sidebarData.map((item) => (
        <SidebarItemComponent
          key={item.id}
          item={item}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

export default Sidebar;
