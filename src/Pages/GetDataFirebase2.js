import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../Firbase";
import ProfleImage from "../images/userR.png";
import ProfleImage2 from "../images/profile_icon.png";
import notFoundImg from "../images/notFound.png";
import notDataGetImg from "../images/synchronize.png";
import loadingImg from "../images/loading.gif";
import call from "../images/call.png";
const GetDataFirebase = (props) => {
  const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(false);
  const [dataNoFound, setDataNotFound] = useState(false);
  const [dataNoGet, setDataNotGet] = useState(false);
  useEffect(() => {
    getDataApi().then((result) => {
      setData(result);
    });
  }, []);
  console.log(dataNoGet, "dataNoGetttttt");
  const getDataApi = async () => {
    try {
      var DataGet = [];
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "users_data"));
      console.log(querySnapshot, "data Loading time");
      setLoading(false);
      if (querySnapshot._snapshot.docChanges.length === 0) {
        setDataNotGet(true);
      } else {
        setDataNotGet(false);
      }
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
      <div
        className="profile-page"
        key={"ProfileCard_id_" + key}
        id={"ProfileCard_id_" + key}
      >
        {/* <h2>
          {(item.subCategory.stringValue === "" && key==0) && item.category.stringValue }
        </h2> */}
        <div className="card" key={"Card_id_" + key} id={"Card_id_" + key}>
          <div className="card-rigth-side">
            {ProfleImage && (
              <div className="profile-div profileimage" key={key} id={item.id}>
                <img
                  src={ProfleImage}
                  className="profileImage"
                  alt={ProfleImage}
                />
              </div>
            )}
          </div>
          <div className="card-left-side">
            {item.forumName.stringValue && (
              <div className="profile-div profile-forum_name">
                {item.forumName.stringValue}
              </div>
            )}
            {item.name.stringValue && (
              <div className="profile-div profile-name">
                {"- " + item.name.stringValue}
              </div>
            )}

            <div className="row-div">
              {item.subCategory.stringValue && (
                <div className="profile-div profile-subCategory">
                  {item.subCategory.stringValue}
                </div>
              )}
              {item.category.stringValue && (
                <div className="profile-div profile-category">
                  {item.category.stringValue}
                </div>
              )}
            </div>

            {/* {item.website.stringValue && (
              <div className="profile-div profile-website">
                <Link
                  className="contactLink contact-whatsapp"
                  to={item.website.stringValue}
                >
                  {"website: " + item.website.stringValue}
                </Link>
              </div>
            )} */}
            {item.phone.stringValue && (
              <div className="profile-div profile-phone">
                <Link
                  className="contactLink contact-phone"
                  to={`tel:${item.phone.stringValue}`}
                >
                  {call && (
                    <div className="icon icon-phone-Call">
                      <img
                        src={call}
                        alt="call"
                        className="icon-imgg icon-call-card"
                      />{" "}
                      {item.phone.stringValue}
                    </div>
                  )}
                  
                </Link>
              </div>
            )}
            {item.phone2.stringValue && (
              <div className="profile-div profile-phone2">
                <Link
                  className="contactLink contact-whatsapp"
                  to={`tel:${item.phone2.stringValue}`}
                >
                  {call && (
                    <div className="icon icon-phone-Call">
                      <img
                        src={call}
                        alt="call"
                        className="icon-imgg icon-call-card"
                      />{" "}
                      {item.phone2.stringValue}
                    </div>
                  )}
                  
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  const NotFoundFun = () => {
    return (
      <div className="no-data-fond-div">
        <h3 className="notFoundH1">No Data Found</h3>
        {notFoundImg && (
          <img src={notFoundImg} className="notFoundImg" alt="Not Found" />
        )}
      </div>
    );
  };
  const NotGetFun = () => {
    return (
      <div className="no-data-fond-div">
        <h1 className="notFoundH1">
          Data Not Fetched Refresh Pages Once Or Server Issue
        </h1>
        {notDataGetImg && (
          <img src={notDataGetImg} className="notFoundImg" alt="Not Found" />
        )}
      </div>
    );
  };
  const GetDataFunction = (Data, HtmlContent) => {
    const GetDataFunctionSee = Data.filter((item) => {
      if (
        item.category.stringValue === props.page &&
        item.subCategory.stringValue === props.subCategories
      ) {
        return item;
      } else if (
        item.category.stringValue === props.page &&
        item.subCategory.stringValue === ""
      ) {
        return item;
      } else {
        return;
      }
    });
    console.log(GetDataFunctionSee, "GetDataFunctionSeeeeeeeeeeee");
    if (GetDataFunctionSee.length === 0) {
      return !dataNoGet ? NotFoundFun() : NotGetFun();
    }
    return GetDataFunctionSee.map((item, key) => {
      return HtmlContent(item, key);
    });
  };

  return (
    <div className="card-main">
      {Loading && loadingImg && (
        <img src={loadingImg} className="loadingImg" alt="Loading..." />
      )}
      {/* {dataNoFound && (
        <NotFoundFun/>
      )} */}
      {Data && GetDataFunction(Data, HtmlContent)}
    </div>
  );
};

export default GetDataFirebase;
