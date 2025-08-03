import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form">
      <label>
        Full Name:
        <input type="text" name="name" required onChange={handleChange} />
      </label>

      <label>
        Date:
        <input type="date" name="date" required onChange={handleChange} />
      </label>

      <label>
        Time:
        <input type="time" name="time" required onChange={handleChange} />
      </label>

      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Info:
        <input type="text" name="contact" required onChange={handleChange} />
      </label>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
