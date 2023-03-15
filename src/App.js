import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState({
    firstName: "Gift",

    lastName: "smith",
  });
  const [giftCard, setGiftCard] = useState({
    text: "free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });
  console.log(setGiftCard);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const spendGiftCard = () => {
    setGiftCard((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        text: "Your coupon has been used🤦‍♀️",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  };
  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        customer:
        <input value={name.firstName} onChange={handleChange} />
        <input value={name.lastName} onChange={handleChange} />
      </h2>

      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>

      {giftCard.valid}
      <div>
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      </div>
    </div>
  );
}
