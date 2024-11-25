import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsThunk";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsState {
  items: Product[];
  favorites: number[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductsState = {
  items: [],
  favorites: [],
  loading: false,
  error: null,
  searchQuery: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    sortByPrice: (state, action: PayloadAction<"asc" | "desc">) => {
      state.items = state.items.sort((a, b) =>
        action.payload === "asc" ? a.price - b.price : b.price - a.price
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { toggleFavorite, setSearchQuery, sortByPrice } =
  productsSlice.actions;

export default productsSlice.reducer;
