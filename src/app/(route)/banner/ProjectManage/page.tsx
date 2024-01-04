"use client";

import Layout from "@/app/_components/layout/Layout";
import React, { useState } from "react";
import "next/link";
import Banner_page from "@/app/_components/banner/Banner_page";
import PaginationButtons from "@/app/_components/components/PaginationButtonsProps";

const ProjectManage = () => {
  const itemsPerPage = 10;
  const totalItems = 100; //최대 게시글 게수
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  //추후 최대 게시글 작동 방식 api보고 찾을 것.

  const [currentPage, setCurrentPage] = useState(1);

  const bannerPageList = Array.from({ length: itemsPerPage }, (_, index) => (
    <Banner_page
      key={index}
      id={(currentPage - 1) * itemsPerPage + index + 1}
      title={"test"}
      register={"test"}
      day={"test"}
    />
  ));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <main className="w-full h-full bg-gray-200 text-black">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="items-center text-lg">배너 관리 - 프로젝트 관리 배너</p>
        </div>
        <div className="flex-col mx-6 p-5 h-screen bg-white">
          <div className="flex items-center justify-between w-full">
            <input
              className="w-64 h-8 px-4 text-gray-200 border border-gray-300 rounded-lg"
              placeholder="제목으로 검색하세요"
            ></input>
          </div>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex items-center">
              <div className="flex text-lg">
                <p className="ml-1">배너 번호</p>
                <p className="ml-12">배너 제목</p>
              </div>
            </div>
            <div className="flex items-center mr-20">
              <div className="flex text-lg">
                <p className="mr-1">등록자</p>
                <p className="mr-4 ml-12">등록 일자</p>
              </div>
            </div>
          </div>
          {bannerPageList}
          <div className="flex items-center justify-between mt-8">
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectManage;
