import React, { useEffect, useState } from "react";

export const UpdateRow = ({ isModified, handleUpdate }) => {
  const [buttonStr, setButtonStr] = useState("Update");
  useEffect(() => {
    setButtonStr(isModified ? "Reset" : "Update");
  }, [isModified]);
  return <button onClick={handleUpdate}>{buttonStr}</button>;
};
