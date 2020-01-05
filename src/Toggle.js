import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import DishForm from "./DishForm";

const Toggle = () => {
  const [showMessage, setShowMessage] = useState(false);
  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;
  return (
    <>
      {showMessage ? (
        <DishForm setShowMessage={setShowMessage} />
      ) : (
        <button onClick={() => setShowMessage(!showMessage)}>
          Open Dish Form
        </button>
      )}
    </>
  );
};

export default Toggle;
