export function WithRuBalance(Components) {
	return (props) => {
		const { balance } = props;
		const ruBalance = balance * 90;

		return <Components {...props} ruBalance={ruBalance} />;
	};
}
