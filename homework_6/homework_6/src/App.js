import React from "react";
import { AddProductForm } from "./feature/products/AddProductForm";
import { ProductsList } from "./feature/products/ProductsList";
import { EditProductForm } from "./feature/products/EditProductForm";

function App() {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <ProductsList />
      <EditProductForm />
    </div>
  );
}

export default App;