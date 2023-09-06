import "./cartWidget.css";

export const CartWidget = () => {
	return (
		<div className='container--cartWidget'>
			<div className='cart--icon'><img src="https://th.bing.com/th/id/R.fce9fda41b03dd2bb06604f758610f6a?rik=NXUloWiotH%2bIQw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcart-512.png&ehk=KVpHjhvTYPRUSmH9w9W1M8q4liEthXN0Js8No65oqCQ%3d&risl=&pid=ImgRaw&r=0"></img></div>
			<div className='cart--quantity'>5</div>
		</div>
	);
};
