import { useEffect, useState } from "react";
import { getProductById, currency } from "home/products";
import { useParams } from "react-router-dom";

const PDPContent = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		if (id) {
			getProductById(id).then((data) => setProduct(data));
		} else {
			setProduct(null);
		}
	}, [id]);

	if (!product.id) return null;

	return (
		<div className="grid grid-cols-2 gap-5">
			<div>
				<img src={product.image} alt={product.name} className="" />
			</div>
			<div>
				<div className="flex">
					<h1 className="text-3xl font-bold flex-grow">{product.name}</h1>
					<div className="text-2xl font-bold flex-end">{currency.format(product.price)}</div>
				</div>
				<div className="mt-4">{product.description}</div>
				<div className="mt-4">{product.longDescription}</div>
			</div>
		</div>
	);
};

export default PDPContent;
