import React, { useState } from "react";


function Contact(){

  const [data, setData] = useState({
    name:"",
    message:""
  });

  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value});
  };

  const sendWhatsApp = ()=>{
    const msg = `Hello MK Motors,
Name: ${data.name}
Message: ${data.message}`;

    const url=`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(url,"_blank");
  };

  return(
    <section id="contact" className="contact">

      <h2>Contact MK Motors</h2>

      <div className="contact-container">

        {/* Left side details */}
        <div className="contact-info">
          <h3>Showroom Details</h3>

          <p><span>📞 Phone:</span> +91 98765 43210</p>
          <p><span>📧 Email:</span> mkmotors@gmail.com</p>
          <p><span>📍 Address:</span> Anna Nagar, Chennai</p>
          <p><span>🕒 Timing:</span> Mon - Sat (9:00 AM - 8:00 PM)</p>
        </div>

        {/* Right side form */}
        <div className="contact-form">

          <h3>Quick Enquiry</h3>

         <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={data.name}
  onChange={handleChange}
  autoComplete="off"
/>

<textarea
  name="message"
  placeholder="Your Message..."
  rows="5"
  value={data.message}
  onChange={handleChange}
></textarea>

          <button onClick={sendWhatsApp}>Send Enquiry</button>

        </div>

      </div>
    </section>
  );
}

export default Contact;