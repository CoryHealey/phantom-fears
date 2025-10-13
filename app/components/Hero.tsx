import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/phantom-play.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-red-600/100 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold text-shadow-lg text-shadow-red-900">
            Phantom Fears
          </h1>
          <h3 className="mb-5 text-3xl text-shadow-red-900">CRUSHin MN</h3>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
