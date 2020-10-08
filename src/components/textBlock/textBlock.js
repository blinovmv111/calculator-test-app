import React from "react";
import "./textBlock.scss";

const TextBlock = ({ id }) => {
  const date = new Date().toLocaleDateString();
  return (
    <div className="text-block">
      <h2 className="title">Текстовая страница</h2>
      <p>
        Это простая текстовая страница для <br></br>
        отображения параметров роута. Параметры: <br></br>- id: {id} <br></br>-
        date: {date}
      </p>
    </div>
  );
};

export default TextBlock;
