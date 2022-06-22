import React from "react";
import image4 from "../../images/image4.jpg";
import { Card } from "react-bootstrap";

const ProfilePhoto = () => {
  return (
    <>
      <Card.Img variant="top" src={image4} alt="myprofileimage" />
    </>
  );
};
export default ProfilePhoto;
