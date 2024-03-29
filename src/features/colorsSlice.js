import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from './const.js';

export const fetchColors = createAsyncThunk(
	"colors/fetchColors",
	async () => {
		const responce = await fetch(COLORS_URL);
		const data = await responce.json();
		return data;
	}
)

const colorsSlice = createSlice({
	name: 'colors',
	initialState: {
		status: 'idle',
		colors: {},
		colorList: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchColors.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchColors.fulfilled, (state, action) => {
				state.status = 'success';
				state.colors = action.payload;
				state.colorList = action.payload
			})
			.addCase(fetchColors.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	}
});

export default colorsSlice.reducer;