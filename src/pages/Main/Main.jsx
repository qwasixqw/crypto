import main from './main.module.css';
import Card from '../../components/Card/Card.jsx';
import CoinsList from '../../components/CoinsList/CoinsList.jsx';
import FilterBlock from '../../components/FilterBlock/FilterBlock.jsx';
import { useMemo } from 'react';

function Main({ balance, setBalance, coins, setCoins }) {
    // const filterExpensiveCoins = () => {
    //     console.log('---func work');
    //     return filteredCoins.filter((coin) => coin.price > 1000);
    // }
    // // const expensiveCoins = filterExpensiveCoins();
    // const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);

	return (
		<main className={main.main}>
			<Card balance={balance} setBalance={setBalance} />
			<FilterBlock setCoins={setCoins} coins={coins} />
			{coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
		</main>
	);
}

export default Main;
