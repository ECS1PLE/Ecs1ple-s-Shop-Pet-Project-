import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../features/reducers/productsThunk";
import { RootState } from "../../store/store";
import styles from "./ProductDetails.module.scss";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const ProductDetails: React.FC<Product> = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
    // console.log(items);
  }, [dispatch, items.length]);

  const product = items.find((item) => item.id == productId);

  console.log(product);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found. Check product ID or data.</div>;

  return (
    <div className={styles.productDetails}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Back
      </button>
      <div className={styles.productInfo}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
