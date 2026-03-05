import React, { useState } from "react";


function Cars() {

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
      name: "Nissan VX",
      price: "₹8,90,000",
      variant: "Petrol | Automatic | 2021",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 4,
      name: "Mercedes Benz Q8",
      price: "₹32,00,000",
      variant: "Diesel | Automatic | 2022",
      image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 5,
      name: "Mercedes Benz Alantra",
      price: "₹14,50,000",
      variant: "Petrol | Manual | 2023",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=60"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < carData.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

 

  return (
    <section id="cars" className="cars">
      <h2>Featured Cars</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={prevSlide}>❮</button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 410}px)` }}
          >
            {carData.map((car) => (
              <div className="car-card" key={car.id}>
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p className="variant">{car.variant}</p>
                <p className="price">{car.price}</p>
             <button onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})}>
  Enquire
</button>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
}

export default Cars;