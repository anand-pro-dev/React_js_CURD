import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
    const [products, setProducts] = useState([]);  // Change 'product' to 'products' for clarity

    useEffect(() => {
        const apiUrl = "https://simple-curd-24.onrender.com/api/v1/products";

        const fetchProducts = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();  // Await the res.json() call
                setProducts(data);  // Update 'product' to 'products'
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section>
            <ul className="product-list">
                {Array.isArray(products) && products.map((product) => (  // Ensure 'products' is an array
                    <li key={product._id}>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.details}</p>
                            <Link to={`/products/${product._id}`}>View Product</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductsPage;
