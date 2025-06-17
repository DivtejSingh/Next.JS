import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLocalStorage, setInLocalStorage } from "@/app/utills/LocalStorageUtills";
import CategoryModels from "@/app/modal/CategoryModels";
import { ProductsModels } from "@/app/modal/ProductModels";

<<<<<<< HEAD
type MealType = 'breakfast' | 'lunch' | 'dinner';

interface CartState {
  products: ProductsModels[];
  category: CategoryModels[];
  cart: Record<MealType, ProductsModels[]>; // Updated to use Record<MealType, ProductsModels[]>
=======
interface CartState {
  products: ProductsModels[];
  category: CategoryModels[];
  cart: Record<string, ProductsModels[]>; // Dynamic meal type
>>>>>>> master
}

const initialState: CartState = {
  products: [],
  category: [],
<<<<<<< HEAD
  cart: {
    breakfast: (typeof window !== 'undefined' ? getFromLocalStorage("cartBreakfast") : []) || [],
    lunch: (typeof window !== 'undefined' ? getFromLocalStorage("cartLunch") : []) || [],
    dinner: (typeof window !== 'undefined' ? getFromLocalStorage("cartDinner") : []) || [],
  },
=======
  cart: {},
>>>>>>> master
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductsModels[]>) => {
      state.products = action.payload;
    },
    addCategory: (state, action: PayloadAction<CategoryModels[]>) => {
      state.category = action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductsModels>) => {
<<<<<<< HEAD
      const mealType: MealType = action.payload.meal.Name.toLowerCase() as MealType; // Cast to MealType
    
      state.cart[mealType] = state.cart[mealType].filter((item) => item.category !== action.payload.category);
      

      state.cart[mealType].push(action.payload);
      // state.cart[mealType] = [action.payload];

      // Save cart data to localStorage
      setInLocalStorage('cartBreakfast', state.cart.breakfast);
      setInLocalStorage('cartLunch', state.cart.lunch);
      setInLocalStorage('cartDinner', state.cart.dinner);
    },
    resetCart: (state) => {
      state.cart = {
        breakfast: [],
        lunch: [],
        dinner: []
      };
      localStorage.removeItem('cartBreakfast');
      localStorage.removeItem('cartLunch');
      localStorage.removeItem('cartDinner');
=======
      const mealType: string = action.payload.meal.Name.toLowerCase();

      if (!state.cart[mealType]) {
        state.cart[mealType] = [];
      }

      state.cart[mealType] = state.cart[mealType].filter(
        (item) => item.category !== action.payload.category
      );

      state.cart[mealType].push(action.payload);
    },
    resetCart: (state) => {
      state.cart = {};
    },
    loadCartFromLocalStorage: (state) => {
      for (const mealType in state.cart) {
        const storedCart = getFromLocalStorage(`cart${mealType.charAt(0).toUpperCase() + mealType.slice(1)}`);
        if (storedCart) {
          state.cart[mealType] = storedCart;
        }
      }
>>>>>>> master
    },
  },
});

<<<<<<< HEAD
export const { addToCart, addCategory, addProduct, resetCart } = ProductSlice.actions;
=======
export const { addToCart, addCategory, addProduct, resetCart, loadCartFromLocalStorage } = ProductSlice.actions;
>>>>>>> master

export default ProductSlice;
