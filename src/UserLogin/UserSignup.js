import React, { useState } from "react";
import { categories } from "../Data/catagoryArray";
import subCategories from "../Data/subCategories";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firbase";

const UserSignup = () => {
  
  const [message, setMessage] = useState({ mess: "", type: "" });
  const [categoryChoose, setCategoryChoose] = useState("");
  const [user, setUser] = useState({
    name: "",
    forumName: "",
    phone: "",
    category: "",
    email: "",
    password: "",
    subCategory: "",
    phone2: "",
    location: "",
    description: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    website: "",
  });

  if(message.mess){
    setTimeout(() => {
      setMessage({ mess: "", type: "" });
    }, 3000);
  }
  const CatagoryUser = () => {
    const handleSelectChange = (e) => {
      setUser({ ...user, category: e.target.value });
      setCategoryChoose(e.target.value);
    };

    return (
      <select
        name="category"
        id="category"
        onChange={handleSelectChange}
        value={user.category}
        required
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    );
  };
  const SubCatagoryUser = () => {
    console.log(subCategories,categoryChoose, "category");
    if (categoryChoose != "undefined") {
      try {
        const res = subCategories.find((obj) =>
          obj.hasOwnProperty(categoryChoose)
        );
        console.log(res, res[categoryChoose], "ram", categoryChoose);
        return (
          <select
            name="subCategory"
            id="subCategory"
            onChange={(e) => setUser({ ...user, subCategory: e.target.value })}
            value={user.subCategory}
          >
            <option value="">Select a sub category</option>
            {res[categoryChoose] &&
              res[categoryChoose].map((subCategory) => (
                <option
                  key={subCategory && subCategory}
                  value={subCategory && subCategory}
                >
                  {subCategory && subCategory}
                </option>
              ))}
          </select>
        );
      } catch (error) {
        console.log("Subcategory Not Found", error);
      }
    }
    return "";
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const {
      name,
      forumName,
      phone,
      category,
      address,
      email,
      password,
      subCategory,
      phone2,
      location,
      description,
      whatsapp,
      facebook,
      instagram,
      website,
    } = user;
    console.log(
      "name:",
      name,
      "forumName:",
      forumName,
      "phone:",
      phone,
      "category:",
      category,
      "email:",
      email,
      "password:",
      password,
      "subCategory:",
      subCategory,
      "phone2:",
      phone2,
      "location:",
      location,
      "description:",
      description,
      "whatsapp:",
      whatsapp,
      "facebook:",
      facebook,
      "instagram:",
      instagram,
      "website:",
      website,
      "submit"
    );
    try {
      const docRef = await addDoc(collection(db, "users_data"), user);
      console.log("Document written with ID: ", docRef.id);
      setMessage({ ...message, mess: "Successfully added", type: "success" });
      setUser({
        name: "",
        forumName: "",
        phone: "",
        category: "",
        email: "",
        password: "",
        subCategory: "",
        phone2: "",
        location: "",
        description: "",
        whatsapp: "",
        facebook: "",
        instagram: "",
        website: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);

      setMessage({ ...message, mess: "add failed", type: "error" });
    }
  };

  return (
    <div>
      <div className="heading-user-login">
        <h1 className="heading-signup">User Signup</h1>
      </div>
      <div className="user-login-div">
        <form
          action="#"
          className="userLoginForm"
          onSubmit={(e) => onSubmitForm(e)}
        >
        
        <div className="left"> 
            <div className="user-name">
                <input
                  type="text"
                  name="Name"
                  id="userName"
                  placeholder="Name :"
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  value={user.name} // Add this to bind the input value
                />
              </div>

              <div className="user-phone">
                <input
                  type="tel"
                  name="Phone"
                  id="userPhone"
                  placeholder="Phone :"
                  required
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  value={user.phone} // Add this to bind the input value
                />
              </div>
              <div className="user-phone2">
                <input
                  type="tel"
                  name="Phone2"
                  id="userPhone2"
                  placeholder="Phone Second :"
                  onChange={(e) => setUser({ ...user, phone2: e.target.value })}
                  value={user.phone2} // Add this to bind the input value
                />
              </div>
              <div className="user-password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password :"
                  required
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  value={user.password} // Add this to bind the input value
                />
              </div>

              <div className="user-email">
                <input
                  type="email"
                  name="Email"
                  id="userEmail"
                  placeholder="Email :"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email} // Add this to bind the input value
                />
              </div>
              <div className="user-location">
                <input
                  type=""
                  name="location"
                  id="userlocation"
                  placeholder="Location :"
                  onChange={(e) => setUser({ ...user, location: e.target.value })}
                  value={user.location} // Add this to bind the input value
                />
              </div>
              <div className="user-category">
              <CatagoryUser />
            </div>
          </div>
        <div className="right">
        {message.type == "success" && (
          <p style={{ color: "green" }}>{message.mess}</p>
        )}
        {message.type == "error" && (
          <p style={{ color: "green" }}>{message.mess}</p>
        )}
            <div className="user-subCategory">
              {categoryChoose && <SubCatagoryUser />}
            </div>
            <div className="user-forum-name">
              <input
                type="text"
                className="user-forum-name-input"
                name="ForumName"
                id="userForumName"
                placeholder="Forum Name :"
                onChange={(e) => setUser({ ...user, forumName: e.target.value })}
                value={user.forumName} // Add this to bind the input value
              />
            </div>
            <div className="user-description">
              <textarea
                name="description"
                id="userDescription"
                cols="20"
                rows="2"
                placeholder="Description"
                onChange={(e) =>
                  setUser({ ...user, description: e.target.value })
                }
                value={user.description} // Add this to bind the input value
              ></textarea>
            </div>
            {/* <div className="user-address">
              <textarea
                name="Address"
                id="userAddress"
                cols="20"
                rows="2"
                placeholder="Address"
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                value={user.address} // Add this to bind the input value
              ></textarea>
            </div> */}
            <div className="user-whatsapp">
              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                placeholder="Whatsapp Number :"
                onChange={(e) => setUser({ ...user, whatsapp: e.target.value })}
                value={user.whatsapp} // Add this to bind the input value
              />
            </div>
            <div className="user-facebook">
              <input
                type="url"
                name="facebook"
                id="facebook"
                placeholder="Facebook Link :"
                onChange={(e) => setUser({ ...user, facebook: e.target.value })}
                value={user.facebook} // Add this to bind the input value
              />
            </div>
            <div className="user-instagram">
              <input
                type="url"
                name="instagram"
                id="instagram"
                placeholder="instagram Link :"
                onChange={(e) => setUser({ ...user, instagram: e.target.value })}
                value={user.instagram} // Add this to bind the input value
              />
            </div>
            <div className="user-website">
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Website Link :"
                onChange={(e) => setUser({ ...user, website: e.target.value })}
                value={user.website} // Add this to bind the input value
              />
            </div>
            <div className="user-submit">
              <button type="submit" className="button-submit">Sign up</button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default UserSignup;
