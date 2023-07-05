const ServerComponent = async props => {
	const response = await fetch("https://dummyjson.com/products/1");
	const data = await response.json();
	console.log("Server component " + data.brand);
	return <div>server {data.brand}</div>;
};
export default ServerComponent;
