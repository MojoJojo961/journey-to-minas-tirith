import React from "react";
import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <h2>Thank you — See you in Minas Tirith!</h2>
  ) : (
    <form onSubmit={handleSubmit} className="rsvp">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
}
