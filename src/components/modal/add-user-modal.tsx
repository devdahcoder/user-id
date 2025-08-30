import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
	onClose: () => void;
	onSave: (userData: {
		name: string;
		dob: string;
		location: string;
	}) => void;
};

const AddUserModal = ({ onClose, onSave }: Props) => {
	const [formData, setFormData] = useState({
		name: "",
		dob: "",
		location: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(formData);
	};

	return (
		<div className="z-50 fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black/50">
			<div className="bg-[#1E1E1E] w-[430px] py-5 rounded-2xl">
				<div className="flex flex-col w-11/12 mx-auto my-0 gap-y-8">
					<div className="flex flex-row items-center justify-between">
						<div className="font-bold text-[17px]">
							<p>Add New User</p>
						</div>

						<button
							onClick={onClose}
							className="text-black flex flex-row items-center justify-center rounded-full w-8 h-8 bg-[#181818] hover:bg-[#2a2a2a] transition-colors"
						>
							<Plus className="text-white rotate-45" />
						</button>
					</div>

					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-y-6"
					>
						<div className="flex flex-col gap-y-5">
							<div className="flex flex-col gap-y-2">
								<label
									htmlFor="name"
									className="text-sm text-[#BBBBBB] flex items-center gap-x-2"
								>
									Name
								</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											name: e.target.value,
										}))
									}
									className="bg-[#2A2A2A] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:font-light placeholder:text-sm"
									placeholder="E.g John"
									required
								/>
							</div>
							<div className="flex flex-col gap-y-2">
								<label
									htmlFor="location"
									className="text-sm text-[#BBBBBB] flex items-center gap-x-2"
								>
									Location
								</label>
								<input
									type="text"
									value={formData.location}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											location: e.target.value,
										}))
									}
									className="bg-[#2A2A2A] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:font-light placeholder:text-sm"
									placeholder="E.g Boston, USA"
									required
								/>
							</div>

							<div className="flex flex-col gap-y-2">
								<label htmlFor="dob" className="text-sm text-[#BBBBBB] flex items-center gap-x-2">
									Date of Birth
								</label>
								<input
									type="date"
									value={formData.dob}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											dob: e.target.value,
										}))
									}
									className="bg-[#2A2A2A] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:font-light placeholder:text-sm"
									placeholder="Enter email address"
									required
								/>
							</div>
						</div>

						<div className="flex flex-row gap-x-3 pt-4">
							<button
								type="submit"
								disabled={
									!formData.name ||
									!formData.dob ||
									!formData.location
								}
								className={`flex-1 ${
									!formData.name ||
									!formData.dob ||
									!formData.location
										? "bg-[#3C3C3C] text-[#898989]"
										: "bg-white text-black"
								}
							 py-2 px-4 rounded-lg transition-colors`}
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUserModal;
