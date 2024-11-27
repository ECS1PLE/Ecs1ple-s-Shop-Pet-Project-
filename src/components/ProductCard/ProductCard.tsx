import styles from "./ProductCard.module.scss";

interface Product {
  image: string;
  title: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
