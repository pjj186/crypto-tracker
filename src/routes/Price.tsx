import { useQuery } from "react-query";
import { fetchCoinTickers } from "./api";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(["priceInfo", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <p>
            Market Cap : $
            {data?.quotes.USD.market_cap
              .toString()
              .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
          </p>
          <p>1h : {data?.quotes.USD.percent_change_1h}</p>
          <p>24h : {data?.quotes.USD.percent_change_24h}</p>
          <p>7d : {data?.quotes.USD.percent_change_7d}</p>
          <p>
            24h Volume : $
            {data?.quotes.USD.volume_24h
              .toString()
              .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
          </p>
        </>
      )}
    </div>
  );
}

export default Price;
