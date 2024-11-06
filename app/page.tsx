import React from "react";
import Row from "@/components/Row";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse h-full min-h-0">
      {[...Array(10)].map((_, index) => (
        <Row key={index}>
          {/* Adding content specifically to Row 2 (second row from the bottom) */}
          {index === 1 && (
            <div className="flex justify-between w-full px-4">
              {/* Display 5 images spread out evenly */}
              {[...Array(5)].map((_, imgIndex) => (
                <img
                  key={imgIndex}
                  src="/vault.png"
                  alt="Vault"
                  className="flex-grow h-20 object-contain" // Adjust height as needed
                />
              ))}
            </div>
          )}
        </Row>
      ))}
    </div>
  );
};

export default Home;
