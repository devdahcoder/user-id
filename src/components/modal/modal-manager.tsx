import {
	useCreateUserMutation,
} from "../../store/api/userApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModal } from "../../store/slices/modalSlice";
import AddUserModal from "./add-user-modal";
import UserDetailsModal from "./user-details-modal";

const ModalManager = () => {
	const dispatch = useAppDispatch();
	const { isOpen, type, data } = useAppSelector((state) => state.modal);

	const [createUser] = useCreateUserMutation();
	const handleClose = () => {
		dispatch(closeModal());
	};

	const handleAddUser = async (userData: {
		name: string;
		location: string;
		dob?: string;
	}) => {
		try {
			await createUser(userData).unwrap();
			handleClose();
		} catch (error) {
			console.error("Failed to create user:", error);
		}
	};

	if (!isOpen || !type) {
		return null;
	}

	const renderModal = () => {
		switch (type) {
			case "add-user":
				return (
					<AddUserModal
						onClose={handleClose}
						onSave={handleAddUser}
					/>
				);
			case "user-details":
				return (
					<UserDetailsModal
						userId={data?.userId as string}
						onClose={handleClose}
					/>
				);
			default:
				return null;
		}
	};

	return renderModal();
};

export default ModalManager;
