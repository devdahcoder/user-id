import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../../types/api-types';

interface SearchState {
  searchTerm: string;
  filteredUsers: UserType[];
  isSearching: boolean;
}

const initialState: SearchState = {
  searchTerm: '',
  filteredUsers: [],
  isSearching: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.isSearching = action.payload.length > 0;
    },
    setFilteredUsers: (state, action: PayloadAction<UserType[]>) => {
      state.filteredUsers = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.filteredUsers = [];
      state.isSearching = false;
    },
    updateFilteredUsers: (state, action: PayloadAction<{ users: UserType[]; searchTerm: string }>) => {
      const { users, searchTerm } = action.payload;
      if (!searchTerm) {
        state.filteredUsers = users;
      } else {
        const filtered = users.filter((user) => {
          const searchLower = searchTerm.toLowerCase();
          return (
            user.name.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower)
          );
        });
        state.filteredUsers = filtered;
      }
    },
  },
});

export const { setSearchTerm, setFilteredUsers, clearSearch, updateFilteredUsers } = searchSlice.actions;
export default searchSlice.reducer;
