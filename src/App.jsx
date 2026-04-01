import "./App.css";
import Banner from "./Component/Banner";
import CartDy from "./Component/CartDy";
import Footer from "./Component/Footer";
import Models from "./Component/Models";
import NavBar from "./Component/NavBar";

import { useState } from "react";
import Pricing from "./Component/Pricing";
import GetStarted from "./Component/GetStarted";
import ReadyToTransform from "./Component/ReadyToTransform";
import StatsSection from "./Component/StatsSection";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  console.log(carts);

  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      <StatsSection/>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-30"
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-30"
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "cart" && <CartDy carts={carts} setCarts={setCarts} />}
      {activeTab === "model" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}
      <GetStarted/>
      <Pricing/>
      <ReadyToTransform/>
      <Footer />
    </>
  );
}

export default App;
