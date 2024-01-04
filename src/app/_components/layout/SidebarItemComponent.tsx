import React, { useState } from "react";
import Link from "next/link";

type SidebarItem = {
  url: string | null;
  id: string;
  label: string;
  children?: SidebarItem[];
};

const SidebarItemComponent: React.FC<{
  item: SidebarItem;
  currentPage: string | null;
  setCurrentPage: (page: string | null) => void;
}> = ({ item, currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
    setCurrentPage(item.url);
  };

  const isTopLevel = item.id === "1";
  const isCurrentPage = currentPage === item.url;

  const handleClick = () => {};

  return (
    <div className="mt-2">
      {isTopLevel ? (
        <div
          className={`cursor-pointer p-2 rounded-md transition-colors duration-300 ${
            isCurrentPage ? "bg-yellow-300" : ""
          } text-black`}
          onClick={handleItemClick}
        >
          {item.label}
        </div>
      ) : (
        <Link href={item.url ? `/${item.url}` : "#"}>
          <div
            className={`cursor-pointer p-2 rounded-md transition-colors duration-300 ${
              isCurrentPage ? "bg-yellow-300" : ""
            } text-black`}
            onClick={handleItemClick}
          >
            {item.label}
          </div>
        </Link>
      )}
      {isOpen && item.children && (
        <ul className="ml-4">
          {item.children.map((child) => (
            <li key={child.id}>
              <SidebarItemComponent
                item={child}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItemComponent;
