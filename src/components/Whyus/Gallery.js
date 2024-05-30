import React from "react";
import './Gallery.css';
import hatch from '../asset/cars/etiostoyota.jpg';
import sedan from '../asset/cars/maruticiaz.webp';
import mpv from '../asset/cars/innova.webp';
import suv from '../asset/cars/renaultduster.jpg';


const Gallery = () => {
  return (
    <>
      <div className="heads">
        WELCOME TO GET YOUR'S! A self drive rental service that will take you
        anywhere you wish to go in your own style. We at GET YOUR'S is an
        enthusiastic team that is heartedly focused to evolve the way you move
        around places in your choice of car that suits your style. GET YOUR'S gives
        you a convenient way to drive with your freedom and personal space.
        Whether you are a youth or a family person, a business man and a rough
        and tough traveler, its time to embellish your driving experience with U
        Drive!
      </div>
      <div className="headig">Cars that match your Style</div>
      <div className="contt">
       

        <div className="fsection">
        <div>
          <h2>Youthful Hatcbacks</h2>
          <p className="para">
            A day out with friends or a date with someone special, a road trip
            dream or a shopping trip, we have got fast and hassle free
            hatchbacks for all your plans. So, no need to carry heavy bags
            around or wait for taxi on the road side. It is the time to go for
            your most memorable rides in a convenient way in our self drive
            Youthful Hatchbacks. For all the young car lovers, you can now drive
            around in our Youthful Hatchbacks for your sheer indulgence and
            bliss whenever you wish to. How cool is that? Moreover it's also a
            fantastic value of money! So, go explore with GET YOUR'S!
          </p>
        </div>
        <div>
            <img className="im" src={hatch} alt="pic"/>
        </div>
        </div>

        <div className="lsection">
        <div>
            <img className="im2" src={sedan} alt="pic"/>
        </div>
        <div>
          <h2>High-End Sedans</h2>
          <p className="para">
            These cars have been specially categorized for corporate sector. For
            all your corporate needs including business travel, corporate
            events, corporate parties, client entertaining and many more, we
            guarantee you the professionalism and first-class experience. We at
            GET YOUR'S understand the corporate sector well. We value our clients
            and discern their needs and so we have come up with the cars that
            suit your needs well. Whether to pick up a client from airport, on a
            meeting on the way, our self drive High-end Sedans will solve your
            purposes. We also have the best corporate packages to provide the
            client with excellence and premium service. So, take care of your
            work while we take care of your ride.
          </p>
        </div>
        </div>

        <div className="fsection">
        <div>
          <h2> Astonishing MPV's</h2>
          <p className="para">
            Parties, social events, weddings, festivals or any occasion that
            calls for transport, we have now got you the right choice of self
            drive cars for all your special days. Your family occasions should
            be the memorable days to cherish forever, and every part of the day
            should be special, including the transportation. You can now have
            the best of time with our self drive Astonishing MPV's. Whether you
            want to visit your loved ones or for big occasions when you want a
            car right outside your house for a few days, hire a GET YOUR'S Distinct
            Sedan to drive hassle free and reach your destination with elegance
            and sophistication.
          </p>
        </div>
        <div>
            <img className="im" src={mpv} alt="pic"/>
        </div>
        </div>
        <div className="lsection">
        <div>
            <img className="im2" src={suv} alt="pic"/>
        </div>
        <div>
          <h2> Tough and Off-Road SUV's</h2>
          <p className="para">
            For all the riders who like to live large and ride big, GET YOUR'S has
            got the most plushy and luxuriant self drive SUVs and MUVs. Whether
            you are a adventurous group who loves to drive to mountains, deserts
            or snowy places; or a big family that likes to ride together, U
            Drive has now got the most comfortable self drive SUVs and MUVs to
            seat up all of you together in style so that no one misses out the
            fun. GET YOUR'S Tough and Off-Road self drive vehicles are a cool way
            to get around for short and long distance. So, its your time to get
            behind the wheel and go places in swanky GET YOUR'S SUVs and MUVs. Call
            us now to Ride and Rejoice with GET YOUR'S!
          </p>
        </div>
        </div>
      </div>
    </>
  );};
export default Gallery;
