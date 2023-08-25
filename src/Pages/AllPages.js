import React from "react";
import GetDataFirebase2 from "./GetDataFirebase2";
import HelpingPage from "./HelpingPage";

//  Guest House
export const GusthousePage = () => {
 return <GetDataFirebase2 page={"Guest Houses"} subCategories={""} />;
};

// Temples
export const TemplePage = () => {
 return <GetDataFirebase2 page={"Temples"} subCategories={""} />;
};
  // governments
export const GovtPage = () => {
 return <HelpingPage index={2} pageName="Governments" />;
};

// Hospitals
export const HospitalPage = () => {
 return <HelpingPage index={4} pageName="Hospitals" />;
};

// Iron Industries
export const IronIndustriesPage = () => {
 return <div className=""> 
   <GetDataFirebase2 page={"Iron Industries"} subCategories={""} />
 </div> 
};

// Wooden Industries
export const WoodenIndustriesPage = () => {
 return  <div className=""> 
  <GetDataFirebase2 page={"Wooden Industries"} subCategories={""} />
 </div>
};

// Masjids
export const MasjitPage = () => {
 return <GetDataFirebase2 page={"Masjids"} subCategories={""} />
};

// private page
export const PrivateJobPage = () => {
 return <HelpingPage index={3} pageName="Private Workers" />;
};

// schools
export const SchoolPage = () => {
 return <HelpingPage index={1} pageName="Schools" />;
};
// Shops page
export const ShopsPage = () => {
 return <HelpingPage index={0} pageName="Shops" />;
};

// 