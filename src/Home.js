import React, { useState, useEffect } from "react";
import { interval } from "rxjs";

import "./Home.css";

import Product from "./Product";

function Home() {
  const [bannerImage, setBannerImage] = useState();
  useEffect(() => {
    const bannerImages = [
      "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268995_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/WeeklyBuild/112020/112020_UK_OS_GW_TAYLOR_ORIGINALS_3000x1200._CB415525102_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/PRIVATE_LABEL/MERAKI/GW_Campaign/GW_HERO_DESKTOP_3000x1200._CB403312265_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/02/Gateway/Events/2020/AMZ_SMB_Q4_Desktop_Gateway_UK_2x._CB415610764_.jpg",
    ];
    const length = bannerImages.length;
    let index = Math.floor(Math.random() * length);

    setBannerImage(bannerImages[index++]);
    const subscriber = interval(5000).subscribe((curIndex) => {
      setBannerImage(bannerImages[(curIndex + index) % length]);
    });
    return () => {
      subscriber.unsubscribe();
    };
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bannerImage} alt="" />
        <div className="home__row">
          <Product
            id={12345}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
          />
          <Product
            id={12346}
            title="Samsung Galaxy M31 Mobile Phone; Sim Free Smartphone - Red [Amazon Exclusive] (UK Version)"
            price={200}
            image="https://images-na.ssl-images-amazon.com/images/I/719RZUuirjL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12347}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={28.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61Ag%2BMuw1eL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id={12348}
            title="Streaking Kittens: This Is The Second Expansion of Exploding Kittens Card Game - Family-Friendly Party Games - Card Games For Adults, Teens & Kids"
            price={5.59}
            image="https://images-na.ssl-images-amazon.com/images/I/81o0Q1Wo7YL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={12349}
            title="Graduation Birthday Gifts for Daughter from Mum - to My Daughter Leather Journal - Enjoy the Ride and Never Forget the Way Home Notebook - 120 Page Travel Diary Journal Back to School Gifts for Girls"
            price={6.77}
            image="https://images-na.ssl-images-amazon.com/images/I/61nLikFH2HL._AC_SL1001_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12351}
            title="PUTORSEN® Adjustable Monitor Stand Riser for Computer, iMac, PC, Printer, Laptop with Tablet & Phone Holder, Cable Management Slot, up to 10KG"
            price={9.94}
            image="https://images-na.ssl-images-amazon.com/images/I/71j0DqPMNRL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
