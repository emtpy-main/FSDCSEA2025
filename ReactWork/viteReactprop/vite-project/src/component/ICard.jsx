import React from "react";

const ICard = ({ data }) => {
  const { name, age, branch, college, location } = data;

  return (
    <div className="main-component">
      <div className="img">
        <img
          src="https://passport-photo.online/images/cms/prepare_lookintothecamera_860144524c.webp?quality=80&format=webp&width=1920"
          width={100}
          height={170}
          alt="student"
        />
      </div>
      <div>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Branch: {branch}</h4>
        <h4>College: {college}</h4>
        <h4>Location: {location}</h4>
      </div>
    </div>
  );
};

export default ICard;
