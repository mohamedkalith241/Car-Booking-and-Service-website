import React from "react";


function Cars() {

  // 🔹 Car Data Array
 const carData = [
  {
    id: 1,
    name: "Maruti Swift VDI",
    price: "₹5,20,000",
    variant: "Diesel | Manual | 2019",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=60"
  },
  {
    id: 2,
    name: "Hyundai i20 Sportz",
    price: "₹6,50,000",
    variant: "Petrol | Manual | 2020",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=60"
  },
  {
    id: 3,
    name: "Honda City VX",
    price: "₹8,90,000",
    variant: "Petrol | Automatic | 2021",

        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=60"
  }
];


  return (
    <section id="cars" className="cars">
      <h2>Featured Cars</h2>

      <div className="car-list">

        {/* 🔹 Map Loop */}
        {carData.map((car) => (
          <div className="car-card" key={car.id}>

            <img src={car.image} alt={car.name} />

            <h3>{car.name}</h3>
            <p className="variant">{car.variant}</p>
            <p className="price">{car.price}</p>

            <button className="enquire-btn">Enquire</button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Cars;
