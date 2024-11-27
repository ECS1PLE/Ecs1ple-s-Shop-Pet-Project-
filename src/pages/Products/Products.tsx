import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/reducers/productsThunk";
import { RootState } from "../../store/store";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.scss";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector<RootState, ProductsState>(
    (state) => state.products
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = items
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    );

  const uniqueCategories = Array.from(
    new Set(items.map((product) => product.category))
  );

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.productsPage}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Поиск товара..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="">Все категории</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.productsList}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
