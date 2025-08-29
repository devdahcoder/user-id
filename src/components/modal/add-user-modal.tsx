import ModalFrame from '../frames/modal-frame';

const AddUserModal = () => {
	return (
		<div className="z-50 fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black/50">
			<ModalFrame />
		</div>
	);
};

export default AddUserModal