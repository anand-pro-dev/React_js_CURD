import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ProductDetailsPage({ deleteProduct }) {
    const product = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = async (productId) => {

        const confirm = window.confirm('Are you sure you want to delete this product');
        if (!confirm) return;
        await deleteProduct(productId);
        return navigate(`/products`);
    }
    return (
        <section className="product-detals-page">
            <div className="p-d-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="p-d-info">
                <Link to="/products">Back to Product List</Link>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.details}</p>
                <Link to={`/edit-product/${product._id}`}>Edit Product</Link>
                <button onClick={() => onDeleteClick(product._id)}> Delete Product</button>
            </div>
        </section>
    );
}

const productLoader = async ({ params }) => {
    const res = await fetch(`https://simple-curd-24.onrender.com/api/v1/products/${params.id}`);
    const data = await res.json();
    return data;
};

export { ProductDetailsPage as default, productLoader };
