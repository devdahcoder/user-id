import { File, MapPin, Phone, Plus } from "lucide-react";
import { useGetUserByIdQuery } from "../../store/api/userApi";
import Avatar from "../avatar";
import ErrorMessage from "../ui/error-message";
import LoadingSpinner from "../ui/loading-spinner";
import UserInformation from "../user-information";

type Props = {
	userId: string;
	onClose: () => void;
};

const UserDetailsModal = ({ userId, onClose }: Props) => {
	const { data: user, isLoading, error } = useGetUserByIdQuery(userId);

	if (isLoading) {
		return (
			<div className="z-50 fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black/50">
				<div className="bg-[#1E1E1E] w-[430px] py-5 rounded-2xl flex items-center justify-center">
					<LoadingSpinner size="lg" />
				</div>
			</div>
		);
	}

	if (error || !user) {
		return (
			<div className="z-50 fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black/50">
				<div className="bg-[#1E1E1E] w-[430px] py-5 rounded-2xl">
					<ErrorMessage
						message="Failed to load user details"
						onRetry={() => window.location.reload()}
					/>
				</div>
			</div>
		);
	}

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className="z-50 fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black/50">
			<div className="bg-[#1E1E1E] w-[430px] py-5 rounded-2xl">
				<div className="flex flex-col w-11/12 mx-auto my-0 gap-y-14">
					<div className="flex flex-row items-center justify-between">
						<div className="font-bold text-[17px]">
							<p>User Details</p>
						</div>

						<button
							onClick={onClose}
							className="text-black flex flex-row items-center justify-center rounded-full w-8 h-8 bg-[#181818] hover:bg-[#2a2a2a] transition-colors"
						>
							<Plus className="text-white rotate-45" />
						</button>
					</div>

					<div className="flex flex-col gap-y-8">
						<div className="flex flex-col items-center justify-center gap-y-4">
							<Avatar
								src={user.avatar || ""}
								alt={user.name}
								className=""
								size={92}
							/>

							<div className="flex flex-col items-center gap-y-2">
								<div className="font-bold text-lg bg-gray-400 px-2 py-0.5">
									<p>{user.name}</p>
								</div>
								<div className="text-sm text-[#BBBBBB]">
									<p>{user.email}</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-y-7">
							<UserInformation
								icon={
									<Phone
										size={20}
										className="text-[#3B82F6]"
									/>
								}
								details={user.phone || "N/A"}
								type="Phone"
							/>
							<UserInformation
								icon={
									<MapPin
										size={20}
										className="text-[#3B82F6]"
									/>
								}
								details={user.location || "N/A"}
								type="Location"
							/>
							<UserInformation
								icon={
									<File
										size={20}
										className="text-[#3B82F6]"
									/>
								}
								details={formatDate(user.dob)}
								type="DOB"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsModal;
