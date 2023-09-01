import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../Firbase";
import ProfleImage from "../images/userR.png";
import ProfleImage2 from "../images/profile_icon.png";
const GetDataFirebase = (props) => {
  const [Data, setData] = useState("");
  useEffect(() => {
    getDataApi().then((result) => {
      setData(result);
    });
  }, []);

  const getDataApi = async () => {
    try {
      var DataGet = [];
      const querySnapshot = await getDocs(collection(db, "users_data"));
      for (let i = 0; i < querySnapshot._snapshot.docChanges.length; i++) {
        DataGet.push(
          querySnapshot._snapshot.docChanges[i].doc.data.value.mapValue.fields
        );
        // console.log(DataGet, "querySnapshot");
      }
      return DataGet;
    } catch (e) {
      console.log(e);
    }
  };
  console.log(
    Data,
    Data && Data.map((item) => item.category.stringValue),

    props.subCategories,
    "data",
    "Props.Page:",
    props.page
  );
  const HtmlContent = (item, key) => {
    return (
      <div className="profile-page">
        {/* <h2>
          {(item.subCategory.stringValue === "" && key==0) && item.category.stringValue }
        </h2> */}
        <div className="card" key={item.id}>
          <div className="profile-div profileimage">
            {ProfleImage && (
              <img
                src={ProfleImage}
                className="profileImage"
                alt={ProfleImage}
              />
            )}
          </div>
          <div className="profile-div profile-name">
            {item.name.stringValue && "Name: " + item.name.stringValue}
          </div>
          <div className="profile-div profile-phone">
            <Link
              className="contactLink contact-whatsapp"
              to={`tel:${item.phone.stringValue}`}
            >
              {item.phone.stringValue && "Phone: " + item.phone.stringValue}
            </Link>
          </div>
          <div className="profile-div profile-phone2">
            <Link
              className="contactLink contact-whatsapp"
              to={`tel:${item.phone2.stringValue}`}
            >
              {item.phone2.stringValue && "Phone: " + item.phone2.stringValue}
            </Link>
          </div>
          <div className="profile-div profile-category">
            {item.category.stringValue &&
              "category: " + item.category.stringValue}
          </div>
          <div className="profile-div profile-subCategory">
            {item.subCategory.stringValue &&
              "subCategory: " + item.subCategory.stringValue}
          </div>

          <div className="profile-div profile-website">
            <Link
              className="contactLink contact-whatsapp"
              to={item.website.stringValue}
            >
              {item.website.stringValue &&
                "website: " + item.website.stringValue}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card-main">
      {Data &&
        Data.map((item, key) => {
          if (
            item.category.stringValue === props.page &&
            item.subCategory.stringValue === props.subCategories
          ) {
            return HtmlContent(item, key);
          } else if (
            item.category.stringValue === props.page &&
            item.subCategory.stringValue === ""
          ) {
            return HtmlContent(item, key);
          } else return;
        })}
    </div>
  );
};

export default GetDataFirebase;
