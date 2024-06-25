import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const counterSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id === action.payload._id
      );
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
        localStorage.setItem("basket", JSON.stringify([...state.basket]));
      } else {
        state.basket[elemIndex].count++;
        localStorage.setItem("basket", JSON.stringify([...state.basket]));
      }
    },
    setFavorite: (state, action) => {
      let elemIndex = state.favorite.findIndex(
        (elem) => elem._id === action.payload._id
      );
      if (elemIndex === -1) {
        state.favorite = [...state.favorite, { ...action.payload }];
        localStorage.setItem("favorite", JSON.stringify([...state.favorite]));
      } else {
        state.favorite = state.favorite.filter(
          (elem) => elem._id !== action.payload._id
        );
        localStorage.setItem("favorite", JSON.stringify([...state.favorite]));
      }
    },
    removefromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    incrementCount: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id === action.payload._id
      );
      state.basket[elemIndex].count++;
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    decrementCount: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id === action.payload._id
      );
      if (action.payload.count <= 1) {
        state.basket = state.basket.filter(
          (item) => item._id !== action.payload._id
        );
        localStorage.setItem("basket", JSON.stringify([...state.basket]));
      }
      state.basket[elemIndex].count--;
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    removeAll: (state, action) => {
      state.basket = [];
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
  },
});

export const {
  setBasket,
  setFavorite,
  removefromBasket,
  incrementCount,
  decrementCount,
  removeAll,
} = counterSlice.actions;

export default counterSlice.reducer;