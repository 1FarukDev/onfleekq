import React from "react";
import "../styles/analytic_card_style.css";

const AnalyticCard = ({ graph, text, number,id }) => {
  return (
    <main className="card_wrapper">
      <div>{graph}</div>
      <div>
        <div>{text}</div>
        <div>{number}</div>
      </div>
    </main>
  );
};

export default AnalyticCard;
