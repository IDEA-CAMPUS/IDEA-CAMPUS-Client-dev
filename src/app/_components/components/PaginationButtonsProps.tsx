import React from "react";

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderButtons = () => {
    const buttons = [];
    const maxButtons = 5;

    // 현재 그룹의 시작 페이지 및 끝 페이지를 계산합니다.
    const groupNumber = Math.ceil(currentPage / maxButtons);
    const startPage = Math.max(1, (groupNumber - 1) * maxButtons + 1);
    const endPage = Math.min(groupNumber * maxButtons, totalPages);

    // 첫 페이지 버튼
    buttons.push(
      <button
        key={1}
        className={`mx-1 p-2 ${
          currentPage === 1 ? "bg-gray-200" : "bg-yellow-300 text-white"
        }`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        {"<|"}
      </button>
    );

    // 이전 페이지 버튼
    buttons.push(
      <button
        key={"previous"}
        className={`mx-1 p-2 ${
          currentPage === 1 ? "bg-gray-200" : "bg-yellow-300 text-white"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
    );

    // 숫자 페이지 버튼
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <div>
          <button
            key={i}
            className={`mx-1 p-2 ${
              i === currentPage ? "bg-yellow-300 text-white" : "bg-gray-200"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </div>
      );
    }

    // 다음 페이지 버튼
    buttons.push(
      <button
        key={"next"}
        className={`mx-1 p-2 ${
          currentPage === totalPages
            ? "bg-gray-200"
            : "bg-yellow-300 text-white"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    );

    // 마지막 페이지 버튼
    buttons.push(
      <button
        key={totalPages}
        className={`mx-1 p-2 ${
          currentPage === totalPages
            ? "bg-gray-200"
            : "bg-yellow-300 text-white"
        }`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {"|>"}
      </button>
    );

    return buttons;
  };

  return <div className="flex">{renderButtons()}</div>;
};

export default PaginationButtons;
