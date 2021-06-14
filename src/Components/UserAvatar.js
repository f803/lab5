import React from "react";

export default function UserAvatar(props) {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt="Avatar"
    />
  );
}
