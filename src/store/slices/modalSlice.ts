import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ModalType = 'add-user' | 'user-details' | 'edit-user' | 'delete-user' | 'confirm-action';

export interface ModalState {
    isOpen: boolean;
    type: ModalType | null;
    data?: Record<string, unknown>;
}

const initialState: ModalState = {
    isOpen: false,
    type: null,
    data: undefined,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ type: ModalType; data?: Record<string, unknown> }>) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload.data;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = null;
            state.data = undefined;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
