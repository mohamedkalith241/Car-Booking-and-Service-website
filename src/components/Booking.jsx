import React, { useState } from "react";

function Booking(){

  const [form,setForm] = useState({
    name:"",
    phone:"",
    car:"",
    service:"General Service",
    date:"",
    time:"10:00 AM"
  });

  // service prices
  const prices = {
    "General Service":"₹1500",
    "Oil Change":"₹900",
    "Full Service":"₹3500",
    "AC Repair":"₹2000",
    "Denting & Painting":"₹5000"
  };

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const sendWhatsApp=()=>{

    const msg =
`🚗 MK Motors Service Booking

Customer: ${form.name}
Phone: ${form.phone}
Car: ${form.car}

Service: ${form.service}
Estimated Price: ${prices[form.service]}

Date: ${form.date}
Time Slot: ${form.time}`;

    const url=`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(url,"_blank");
  };

  return(
    <section id="booking" className="booking">

      <h2>Schedule Your Car Service</h2>

      <div className="booking-container">

        {/* left */}
        <div className="booking-info">
          <h3>Why Service With Us?</h3>
          <ul>
            <li>✔ Experienced Mechanics</li>
            <li>✔ Genuine Spare Parts</li>
            <li>✔ Same Day Delivery</li>
            <li>✔ Free Pickup & Drop</li>
          </ul>
        </div>

        {/* right */}
        <div className="booking-form">

          <input type="text" name="name" placeholder="Customer Name" onChange={handleChange}/>
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange}/>
          <input type="text" name="car" placeholder="Car Model" onChange={handleChange}/>

          <select name="service" onChange={handleChange}>
            <option>General Service</option>
            <option>Oil Change</option>
            <option>Full Service</option>
            <option>AC Repair</option>
            <option>Denting & Painting</option>
          </select>

          <div className="price">
            Estimated Price: {prices[form.service]}
          </div>

          <input type="date" name="date" onChange={handleChange}/>

          <select name="time" onChange={handleChange}>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>4:00 PM</option>
            <option>6:00 PM</option>
          </select>

          <button onClick={sendWhatsApp}>Confirm Booking</button>

        </div>

      </div>
    </section>
  );
}

export default Booking;