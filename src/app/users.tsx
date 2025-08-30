import { Plus } from "lucide-react";
import { useEffect } from "react";
import SearchBar from "../components/search-bar";
import ErrorMessage from "../components/ui/error-message";
import LoadingSpinner from "../components/ui/loading-spinner";
import UserCard from "../components/user-card";
import { useGetUsersQuery } from "../store/api/userApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openModal } from "../store/slices/modalSlice";
import { updateFilteredUsers } from "../store/slices/searchSlice";
import type { UserType } from "../types/api-types";

const Users = () => {
	const dispatch = useAppDispatch();
	const {
		data: usersResponse,
		isLoading,
		error,
		refetch,
	} = useGetUsersQuery();

	const { searchTerm, filteredUsers } = useAppSelector(
		(state) => state.search
	);

	useEffect(() => {
		if (usersResponse?.data) {
			dispatch(
				updateFilteredUsers({
					users: usersResponse.data,
					searchTerm,
				})
			);
		}
	}, [usersResponse?.data, searchTerm, dispatch]);

	const handleUserClick = (user: UserType) => {
		dispatch(
			openModal({ type: "user-details", data: { userId: user.id } })
		);
	};

	const handleAddUserClick = () => {
		dispatch(openModal({ type: "add-user" }));
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center min-h-[400px]">
				<LoadingSpinner size="lg" />
			</div>
		);
	}

	if (error) {
		return (
			<ErrorMessage
				message="Failed to load users. Please check your connection and try again."
				onRetry={() => refetch()}
			/>
		);
	}

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

				<button
					onClick={handleAddUserClick}
					className="bg-white text-black flex flex-row items-center gap-x-1.5 rounded-xl py-2.5 px-2 hover:bg-gray-100 transition-colors"
				>
					<span>
						<Plus className="text-black" />
					</span>
					Add new
				</button>
			</div>

			<div className="mb-6">
				<SearchBar />
				{searchTerm && (
					<div className="mt-2 text-sm text-gray-600">
						{filteredUsers.length} user
						{filteredUsers.length !== 1 ? "s" : ""} found
					</div>
				)}
			</div>

			{filteredUsers.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
					{filteredUsers.map((user) => (
						<UserCard
							key={user.id}
							user={user}
							onClick={() => handleUserClick(user)}
						/>
					))}
				</div>
			) : searchTerm ? (
				<div className="text-center py-12">
					<p className="text-gray-500 text-lg">
						No users found matching "{searchTerm}"
					</p>
				</div>
			) : (
				<div className="text-center py-12">
					<p className="text-gray-500 text-lg">No users found</p>
				</div>
			)}
		</div>
	);
};

export default Users;
