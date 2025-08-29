import BellSvgIcon from "../assets/bell-svg-icon";
import Avatar from "./avatar";

const Header = () => {
  return (
		<div className="z-50 sticky top-0 left-0 w-full bg-black">
			<div className="py-6 px-7 w-full flex flex-row items-center justify-between">
				<form className="relative w-full max-w-xs">
					<input
						type="search"
						placeholder="Search"
						className="w-full rounded-full bg-[#181818] py-2.5 pl-12 pr-4 text-sm text-zinc-900 placeholder-[#838383] outline-none  transition-colors"
					/>

					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsba(0, 0%, 51%, 1)] pointer-events-none"
					>
						<path
							d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
							stroke="#838383"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</form>

				<div className="flex flex-row items-center gap-x-5">
					<button className="flex flex-row items-center justify-center bg-[#181818] rounded-full w-10 h-10">
						<BellSvgIcon />
					</button>

					<Avatar src="" alt="" size={40} />
				</div>
			</div>
		</div>
  );
}

export default Header