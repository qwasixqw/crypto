import './card.css';
import { WithRuBalance } from '../../helpers/hoc/withRuBalance';

function Card({ balance, setBalance, ruBalance }) {
	return (
		<div className='card'>
			<div className='card-block'>
				<h2>Crypto-finance</h2>
				<button onClick={setBalance}>Add money</button>
			</div>

			<div className='card-block'>
				<div>Vlad</div>
				<p>{balance}$</p>
			</div>
		</div>
	);
}

export default WithRuBalance(Card);
