import React, { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return <h2>Thank you! We can’t wait to celebrate with you!</h2>;

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h2>RSVP</h2>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
}
