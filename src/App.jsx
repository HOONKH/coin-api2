import axios from "axios";
import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";
import Slider from "react-slick";

const App = () => {
  const [coinPrice, setCoinPrice] = useState();
  const getCoinPrice = async () => {
    const response = await axios.get(
      "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
    );
    setCoinPrice(response.data);
  };
  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <ul className="w-60 flex flex-col justify-center">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
        >
          {coinPrice ? (
            coinPrice.map((v, i) => {
              return <CoinCard key={i} coinPrice={v} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </Slider>
      </ul>
    </main>
  );
};

export default App;
