import React, { useContext } from 'react';
import './filterBlock.css';
import { CoinsContext } from '../../context/coinsContent';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

function FilterBlock({ setCoins }) {
	const coinsContext = useContext(CoinsContext);
	const { coins } = coinsContext;

	const { setValue, value } = useFilterCoins(setCoins, coins);

	return (
		<div className='filter-block'>
			<input onChange={(event) => setValue(event.target.value)} value={value} className='input' type='text' placeholder='Search' />
		</div>
	);
}

export default React.memo(FilterBlock);
