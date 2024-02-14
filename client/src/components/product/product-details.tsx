import { Product } from "@/models/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";

function ProductDetails() {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product", error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/catalog" className="mb-4">
                    Back
                </Link>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src={product.pictureUrl}
                                alt={product.name}
                            />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold mb-2">
                            {product.name}
                        </h2>
                        <p className="text-sm mb-4">{product.description}</p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold">Price:</span>
                                <span className="ml-1">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>
                            <div>
                                <span className="font-bold">Availability:</span>
                                <span className="ml-1">
                                    {product.quantityInStock > 0
                                        ? "In Stock"
                                        : "Out of Stock"}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold">
                                Product Description:
                            </span>
                            <p className="text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                        <Button className="w-full my-4 py-2 px-4 rounded mt-4">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
