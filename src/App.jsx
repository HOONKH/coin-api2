import axios from "axios";
import { useEffect, useState } from "react";

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
    <main className="min-h-screen flex justify-center items-center">
      <ul></ul>
    </main>
  );
};

export default App;
