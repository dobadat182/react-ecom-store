import { useFetchProducts } from '@/hooks/useFetchProducts';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const { product, loading, error } = useFetchProducts(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductDetail;
