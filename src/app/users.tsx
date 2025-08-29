import { Plus } from "lucide-react";
import UserCard from "../components/user-card";

const Users = () => {
	return (
		<div className="relative w-full">
			<div className="flex flex-row items-center justify-between mb-8">
				<div className="flex flex-col gap-y-2.5">
					<div className="text-2xl font-semibold">
						<h1>User directory</h1>
					</div>
					<div className="text-[#B3B4B3]">
						<p>Find a list of users below</p>
					</div>
				</div>

				<button className="bg-white text-black flex flex-row items-center gap-x-1.5 rounded-xl py-2.5 px-2">
					<span>
						<Plus className="text-black" />
					</span>
					Add new
				</button>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
				{Array.from({ length: 100 }).map((_, i) => (
					<UserCard
						gmail="jordan.lee@example.com"
						name="Alex Morgan"
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
