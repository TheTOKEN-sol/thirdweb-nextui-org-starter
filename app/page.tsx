import React from "react";
import Row from "@/components/Row";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {[...Array(10)].map((_, index) => (
        <Row key={index} />
      ))}
    </div>
  );
};

export default Home;
