import React from "react";
import Avatar from "./avatar";

type Props = {
	name: string;
	gmail: string;
};

const UserCard = ({ name, gmail }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg bg-[#1E1E1E] shadow w-full py-6">
			<div className="flex flex-col items-center justify-center gap-y-4">
				<Avatar src="" alt="" className="" size={92} />

				<div className="flex flex-col items-center gap-y-2 ">
					<div className="font-bold">
						<p>{name}</p>
					</div>
					<div className="text-sm text-[#BBBBBB]">
						<p>{gmail}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
