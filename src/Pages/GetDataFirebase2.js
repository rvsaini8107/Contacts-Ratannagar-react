import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firbase";
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
    "Props.Page:",props.page,
   

  );
  const HtmlContent = (item,key) => {
    return (
      <>
        <h2>
          {/* {(item.subCategory.stringValue === "" && key==0) && item.category.stringValue } */}
        </h2>
        <div className="card" key={item.id} >
          Name: {item.name.stringValue}
          <br />
          Phone: {item.phone.stringValue}
          <br />
          category: {item.category.stringValue}
          <br />
          password: {item.password.stringValue}
          <br />
          subCategory: {item.subCategory.stringValue}
          <br />
          phone2: {item.phone2.stringValue}
          <br />
          website: {item.website.stringValue}
          <br />
          website: {item.website.stringValue}
        </div>
      </>
    );
  };

  return (
    <div className="card-main">
      {Data &&
        Data.map((item,key) => {
          if (
            item.category.stringValue === props.page &&
            item.subCategory.stringValue === props.subCategories
          ) {
            return HtmlContent(item,key);
          } else if (
            (item.category.stringValue === props.page &&
            item.subCategory.stringValue === "")
          ) {
            return HtmlContent(item,key);
          } else return;
        })}
    </div>
  );
};

export default GetDataFirebase;
