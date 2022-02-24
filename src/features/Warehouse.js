import { createSlice } from "@reduxjs/toolkit";

import { WarehouseData } from "../WarehouseData";

export const userSlice = createSlice({
  name: "warehouse",
  initialState: { value: WarehouseData },
  reducers: {

    updateData: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.data.name;
          item.cluster = action.payload.data.cluster;
          item.city = action.payload.data.city;
          item.space_available = action.payload.data.space;
          item.is_live = action.payload.data.is_live;
        }
      });
    },
  },
});

export const { updateData } = userSlice.actions;
export default userSlice.reducer;