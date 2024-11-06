// components/Row.tsx
import React from "react";

interface RowProps {
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-grow w-full border-b border-gray-700">
      {children}
    </div>
  );
};

export default Row;
