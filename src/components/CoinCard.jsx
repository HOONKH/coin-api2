const CoinCard = ({ coinPrice }) => {
  return (
    <li className="gap-4 flex items-center">
      <img
        className="w-20"
        src={`./images/${coinPrice.market.substring(4)}.png`}
        alt={coinPrice.market.substring(4)}
      />
      <span className="ml-2 font-black">{coinPrice.market.substring(4)}</span>
      <span className="ml-2 font-black">
        {coinPrice.trade_price.toLocaleString()}
      </span>
    </li>
  );
};
export default CoinCard;
