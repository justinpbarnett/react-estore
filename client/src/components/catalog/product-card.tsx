import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Product } from "@/models/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="w-[350px] m-4 flex flex-col justify-between">
            <CardHeader className="flex justify-center h-[140] w-auto">
                <img src={product.pictureUrl} alt={product.name} />
            </CardHeader>
            <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <h2 className="text-lg">${product.price.toFixed(2) }</h2>
                <CardDescription className="text-sm">
                    {product.type} / {product.brand}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                    <Link to={`/catalog/${product.id}`}>View Details</Link>
                </Button>
                <Button asChild>
                    <Link to={`/catalog/${product.id}/add-to-cart`}>Add to Cart</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
