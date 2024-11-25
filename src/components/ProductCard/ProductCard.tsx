import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
