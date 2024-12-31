import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loadingSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			loading: loadingReducer,
		},
	});
};

// Infer the type of store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
