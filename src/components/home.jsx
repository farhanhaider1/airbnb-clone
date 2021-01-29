import React from "react";
import "../css/home.css";
import Banner from "./banner";
import Card from "./card";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        ></Card>
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
          title="Entire Homes"
          description="Comfortable private places, with rooms for friends and family."
        ></Card>
        <Card
          src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480"
          title="Pets welcome"
          description="Pet-friendly stays for you and your furry friends."
        ></Card>
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Penthouse in NYC"
          description="Enjoy the amazing sights on New York City with this stunning penthouse."
          price="$400/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1611048268428-c7dddc465ee7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
          title="1 bedroom apartment"
          description="Superhost with great amenities and a wall street nearby"
          price="$2000/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1599056515035-c609ccce31b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="2 Bedroom apartment with brooklyn bridge views."
          description="Stunning apartment available at a premium location."
          price="$199/night"
        />
      </div>
    </div>
  );
};

export default Home;
