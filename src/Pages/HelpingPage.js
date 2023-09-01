import React, { useState } from "react";
import GetDataFirebase2 from "./GetDataFirebase2";
import subCategories from "../Data/subCategories";
const HelpingPage = (props) => {
  const [selectedItem, setSelectedItem] = useState("");
  console.log(selectedItem);

  return (
    <div className="Subcategory-div-main">
      <h2>{props.pageName && props.pageName}</h2>
      <div className="sub-Category-div">
        {subCategories[props.index][props.pageName] &&
          subCategories[props.index][props.pageName].map((item, index) => {
            return (
              <div
                className={`Subcategory ${
                  selectedItem === item ? "active_btn" : ""
                }`}
                onClick={() => {
                  setSelectedItem(item);
                }}
                key={index}
              >
                {item}
              </div>
            );
          })}
      </div>
      <GetDataFirebase2 page={props.pageName} subCategories={selectedItem} />
    </div>
  );
};

export default HelpingPage;
