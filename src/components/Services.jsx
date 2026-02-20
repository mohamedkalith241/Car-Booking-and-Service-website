import React from "react";


function Services(){
  return(
    <section id="services" className="services">

      <h2>Our Services</h2>

      <div className="services-frame">

        <div className="service-item">
          <div className="icon">🔧</div>
          <h3>General Service</h3>
          <p>Complete vehicle inspection and maintenance.</p>
        </div>

        <div className="service-item">
          <div className="icon">🛢</div>
          <h3>Oil Change</h3>
          <p>Engine oil & filter replacement with premium oils.</p>
        </div>

        <div className="service-item">
          <div className="icon">❄</div>
          <h3>AC Repair</h3>
          <p>Cooling issues, gas refill and AC compressor repair.</p>
        </div>

        <div className="service-item">
          <div className="icon">🎨</div>
          <h3>Denting & Painting</h3>
          <p>Body repair, scratch removal and full painting.</p>
        </div>

        <div className="service-item">
          <div className="icon">🧰</div>
          <h3>Engine Work</h3>
          <p>Engine diagnostics and major repairs.</p>
        </div>

        <div className="service-item">
          <div className="icon">🚘</div>
          <h3>Car Checkup</h3>
          <p>Pre-purchase inspection & road test support.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;