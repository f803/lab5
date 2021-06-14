import React from "react";
import UserAvatar from "./UserAvatar";

export default function UserCard(props) {
  return (
    <div className="userCard">
      <UserAvatar src={props.user.picture.large} width={150} height={150} />
      <p>
        <p> Имя: {props.user.name.first}</p>
        <p> Фамилия: {props.user.name.last} </p>
      </p>
      <p>Город: {props.user.location.city}</p>
      <p>Телефон: {props.user.phone}</p>
    </div>
  );
}
