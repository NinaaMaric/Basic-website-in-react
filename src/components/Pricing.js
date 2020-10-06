import React from "react";
import { FaFire, FaUniversalAccess } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize  } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import './Pricing.css'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">

            <Link to="/sing-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h3>$8.99</h3>
                <h3>per month</h3>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10.000 limit </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  choose plan
                </Button>
              </div>
            </Link>

            <Link to="/sing-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h3>$100.9</h3>
                <h3>per month</h3>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>0% Cash Back</li>
                  <li>$10.000 limit </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  choose plan
                </Button>
              </div>
            </Link>

            <Link to="/sing-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize  />
                </div>
                <h3>Diamond</h3>
                <h3>$99.9</h3>
                <h3>per month</h3>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  choose plan
                </Button>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
