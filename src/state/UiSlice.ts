import { createSlice } from "@reduxjs/toolkit";
import { IUiState } from "../types/state";

const initialState: IUiState = {
  isModalOpen: false,
  isMobileNavOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openMobileNav: (state) => {
      state.isMobileNavOpen = true;
    },
    closeMobileNav: (state) => {
      state.isMobileNavOpen = false;
    },
  },
});

export const { openModal, closeModal, closeMobileNav, openMobileNav } = uiSlice.actions;
export default uiSlice.reducer;
