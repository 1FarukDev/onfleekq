import React from "react";
import Navbar from "../layouts/NavBar";
import AnalyticCard from "./analyticCard";
import "../styles/home_dashboard_style.css";
import TransactionCard from "./transactionCard";
import TimeCard from "./timeCard";

const HomeDashboard = () => {
  const analyticCardProps = [
    {
      id: 0,
      text: "Visitor",
      graph: "jj",
      number: "10,000",
    },
    {
      id: 1,
      text: "Visitor",
      graph: "jj",
      number: "10,000",
    },
    {
      id: 2,
      text: "Visitor",
      graph: "jj",
      number: "10,000",
    },
  ];

  return (
    <main>
      <Navbar />
      <main className="dashboard_body">
        <div className="analytic_card_body">
          <div className="analytic_card">
            {analyticCardProps.map((prop, index) => {
              const isLast = index === analyticCardProps.length - 1;
              return (
                <AnalyticCard
                  number={prop.number}
                  text={prop.text}
                  graph={prop.graph}
                  key={index}
                  isLast={isLast}
                />
              );
            })}
          </div>
          <div>
            <div>
              <TimeCard />
            </div>
          </div>
        </div>

        <div className="transaction_card">
          <TransactionCard />
        </div>
      </main>
    </main>
  );
};

export default HomeDashboard;
