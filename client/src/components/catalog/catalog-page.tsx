import { Product } from "@/models/product";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";

function CatalogPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products").then((response) => {
            response.json().then((data) => {
                setProducts(data);
            });
        });
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CatalogPage;
