import type { UserType } from "../types/api-types";
import Avatar from "./avatar";

type Props = {
	user: UserType;
	onClick?: () => void;
};

const UserCard = ({ user, onClick }: Props) => {
	return (
		<div
			className="group relative flex flex-col items-center justify-center rounded-lg bg-[#1E1E1E] shadow w-full py-6 cursor-pointer hover:bg-[#2A2A2A] transition-colors duration-200"
			onClick={onClick}
		>

			<div className="flex flex-col items-center justify-center gap-y-4">
				<Avatar
					src={user.avatar || ""}
					alt={user.name}
					className=""
					size={92}
				/>

				<div className="flex-col items-center gap-y-2 flex">
					<div className="font-bold text-white">
						<p>{user.name}</p>
					</div>
					<div className="text-sm text-[#BBBBBB]">
						<p>{user.email}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
