
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import MainLayout from "./layout/MainLayout"
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import EditProductPage from './pages/EditProductPage';
import ProductDetailsPage, { productLoader } from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProductPage from './pages/AddProductPage';
function App() {

  // return (
  //   <>
  //     My React Porject
  //   </>
  // )


  // add product page
  const addProductAppJs = async (newProduct) => {
    const res = await fetch("https://simple-curd-24.onrender.com/api/v1/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",

      },
      body: JSON.stringify(newProduct),
    });
    return;
  };


  // update product
  const upDdatedProductAppjs = async (product) => {
    const res = await fetch(`https://simple-curd-24.onrender.com/api/v1/products/${product.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",

      },
      body: JSON.stringify(product),
    });
    return;

  };
  const deleteProduct = async (productId) => {
    const res = await fetch(`https://simple-curd-24.onrender.com/api/v1/products/${productId}`,
      {
        method: "DELETE",
      });
    return;

  };


  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProductPage addProductSubmit={addProductAppJs} />} />
        <Route path="/edit-product/:id" element={<EditProductPage upDdatedProductSubmit={upDdatedProductAppjs} />} loader={productLoader} />
        <Route path="/products/:id" element={<ProductDetailsPage deleteProduct={deleteProduct} />} loader={productLoader} />
        <Route path="*" element={<NotFoundPage />} />

      </Route>


    )
  );

  return <RouterProvider router={router} />;

}

export default App
