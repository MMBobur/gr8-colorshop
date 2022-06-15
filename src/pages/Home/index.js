import React from 'react';

import Navbar from "./../../components/navbar";
import Banner from "./../../components/banner";
import Categoryes from "./../../components/categoryes";
import Arrivals from "./../../components/arrivals";
import DealOfTheWeek from "./../../components/dealOfTheWeek";
import BestSellers from "./../../components/bestSellers";
import LatestBlogs from "./../../components/latestBlogs";
import Newsletter from "./../../components/newsletter";
import Footer from "./../../components/footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Categoryes />
        <Arrivals />
        <DealOfTheWeek />
        <BestSellers />
        <LatestBlogs />
        <Newsletter />
        <Footer />
    </div>
  );
}
