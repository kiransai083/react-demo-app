import * as React from "react";
import { useParams } from "react-router-dom";

export const ChildRoute = () => {
  const { name } = useParams();

  return <p>{name}</p>;
};
