import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

export const ItemListContainer = () => {

    const { idCategory } = useParams();
    const [loading, setLoading] = useState(true);
    const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		//PARA QUE CUANDO CAMBIE LA URL (cambia la categoria) Y SE VUELVE A EJECUTAR EL USEEFFECT SE INICIALE EN TRUE
		setLoading(true);

		// LLAMO A LA FUNCION QUE ME BUSCA LOS ITEMS CON LA CATEGORIA DE LA URL
		getItems(idCategory)
			// GUARDO LA RESPUESTA EN EL ESTADO PARA ALMACENAR MIS PRODUCTOS
			.then((response) => setMyProducts(response))
			// DESPUES DE RECIBIR Y GUARDAR EN MI ESTADO LOS PRODUCTOS FILTRADOS O NO, CAMBIO MI ESTADO DE CARGANDO A FALSO PARA PODER VER MIS CARDS
			.finally(
				//SIMULO UN RETRASO DE 2 SEGUNDOS
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
		// idCategory EN EL ARRAY DE DEPENDENCIA PARA GENERAR UN NUEVO CICLO DEL USEEFFECT AL CAMBIAR ENTRE CATEGORIAS
	}, [idCategory]);

	//ESTA FUNCION DEVUELVE UNA PROMESA CON LOS PRODUCTOS FILTRADOS O NO , SEGUN idCategory
	const getItems = (valueToFilter) => {
		// DEVUELVE LA RESPUESTA
		return new Promise((resolve) => {
			if (valueToFilter === undefined) {
				// AL NO EXISTIR CATEGORIA ( HOME = " / ") DEVUELVO TODOS LOS PRODUCTOS
				resolve(products);
			} else {
				// AL EXISTIR CATEGORIA ES PORUQE ESTAMOS EN UNA URL category/:idCategory
				// TRAER LOS PORDUCTOS YA FILTRADOS POR CATEGORIA
				resolve(
					products.filter((item) => item.category === valueToFilter)
				);
			}
		});
	};


	return loading ? (
		<Loading />
	) : (
		<section className="container--ItemListContainer">

			<h2 className="itemListContainer--title">
				{idCategory === undefined ? "PRODUCTOS" : idCategory}
			</h2>
			<div className="container--cards">
				<ItemList myProducts={myProducts} />
			</div>
		</section>
	);
};