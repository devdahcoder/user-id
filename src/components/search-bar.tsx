import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearSearch, setSearchTerm } from "../store/slices/searchSlice";

interface SearchBarProps {
	className?: string;
}

const SearchBar = ({ className = "" }: SearchBarProps) => {
	const dispatch = useAppDispatch();
	const { searchTerm } = useAppSelector((state) => state.search);
	const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(setSearchTerm(localSearchTerm));
		}, 300);

		return () => clearTimeout(timer);
	}, [localSearchTerm, dispatch]);

	const handleClearSearch = () => {
		setLocalSearchTerm("");
		dispatch(clearSearch());
	};

	return (
		<div className={`relative ${className}`}>
			<div className="relative">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
				<input
					type="text"
					placeholder="Search user by name"
					value={localSearchTerm}
					onChange={(e) => setLocalSearchTerm(e.target.value)}
					className="w-full pl-10 pr-10 py-3 bg-[#1E1E1E] rounded-lg focus:none placeholder:text-[#616161] placeholder:text-sm"
				/>
				{localSearchTerm && (
					<button
						onClick={handleClearSearch}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
					>
						<X className="w-5 h-5" />
					</button>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
