import React from 'react';

function MainScreen() {
  return (
    <div className="container">
      <header>
        <h1>Ruth Ilgunas Violin</h1>
      </header>
      <section className="about">
        <h2>About</h2>
        <p>
          !-- Lorem Ipsum text here describing services, pricing, etc. --
        </p>
      </section>
      <section className="media">
        <h2>Media</h2>
        {/* Images and audio clips to be inserted */}
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Contact Number: [Phone Number]</p>
        <p>Email: [Email Address]</p>
        <div className="calendar-widget">
          {/* Calendar widget code goes here */}
        </div>
      </section>
    </div>
  );
}

export default MainScreen;
