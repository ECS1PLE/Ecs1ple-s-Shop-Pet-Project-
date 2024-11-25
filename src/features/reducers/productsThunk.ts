import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/fakeStoreApi";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await api.get("/products");
  return response.data;
});
