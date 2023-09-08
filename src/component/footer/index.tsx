import React from "react";
// import { useNavigate } from "react-router";
import color from "../../constant";
import { AppLogo, AppLogo2 } from "../../assets";

const style = {
  footer: {
    // height: "auto",
    // height: "150px",
  },
  mainContainer: {
    border: "2px",
    height: "130px",
    color: "#ffff",
    background: `linear-gradient(to bottom right,${color.primaryColorThree} 38%,  ${color.primaryColorTwo} 100%)`,
    // background: `linear-gradient(to bottom right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo} )`,
    borderRadius: "10px",
  },
  cursor: {
    cursor: "pointer",
    fontSize:"13px",
  },
};


export default function AppFooter() {
  return (
    <div
      style={style.footer}
      className="row d-flex justify-content-center align-items-end m-0 mb-2 px-2"
    >
      <div
        style={style.mainContainer}
        className="col-12  p-0 d-flex align-items-center justify-content-md-end  justify-content-center "
      >
        <div className=" text-end p-2" >
          <span className="pe-2">
            <strong style={style.cursor}>Free Classifieds in Pakistan</strong>
          </span>
          <span className="pe-2" style={style.cursor}>
            . © 2023 - Onwords <img width="150px" height="180px" src={AppLogo2} />
          </span>
        </div>
      </div>
    </div>
  )
}

