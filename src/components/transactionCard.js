import React from "react";
import EditIcon from "../assets/icons/edit icon.png";
import "../styles/transaction_card_style.css";
import ProgressBar from "./progressbar";
const TransactionCard = () => {
  return (
    <main className="card_body">
      <div className="edit_icon_container">
        <img src={EditIcon} alt="Edit Icon" className="edit_icon" />
      </div>
      <div className="transaction_progress_bar_container">
        <div></div>
        <div className="progress_component">
          <ProgressBar />
        </div>
        <div className="transaction_price">10,000</div>
      </div>
      <div className="card_text">
        <div>My card</div>
        <div>..</div>
      </div>
    </main>
  );
};

export default TransactionCard;
