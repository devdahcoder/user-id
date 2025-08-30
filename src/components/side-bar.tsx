import React from "react";
import LogoSvgIcon from "../assets/logo-svg-icon";
import { SidebarLinks } from "../constant";
import { useLocation } from "react-router";

const Sidebar = () => {
	const location = useLocation();
	return (
		<aside
			className="fixed top-0 h-screen md:w-[15rem] pt-8 bg-[#1E1E1E]"
			aria-label="Main navigation"
		>
			<div className="hidden md:flex flex-col gap-y-14">
				<div className="flex flex-row pl-12 w-full">
					<LogoSvgIcon />
				</div>

				<nav
					className="flex flex-col pl-6"
					aria-label="Primary navigation"
				>
					<ul
						className="flex flex-col items-start gap-y-2.5"
						role="list"
					>
						{SidebarLinks.map(
							(
								{
									id,
									label,
									icon: Icon,
									route,
									disabled,
									onClick,
								},
								index
							) => (
								<li key={`${id}--${index}`} className="w-full">
									{route ? (
										<a
											href={route}
											className={`relative flex flex-row items-center gap-x-4 px-4 py-2.5 transition-colors duration-200 hover:bg-[#222222] focus:outline-none ${
												disabled
													? "opacity-50 cursor-not-allowed"
													: "cursor-pointer"
											} ${
												location.pathname === route
													? "before:content-[' '] before:absolute before:h-full before:w-0.5 before:bg-white before:top-0 before:left-0 bg-[#222222]"
													: ""
											}`}
											aria-label={`Navigate to ${label}`}
											aria-disabled={disabled}
											tabIndex={disabled ? -1 : 0}
										>
											<div className="w-6 h-6 flex items-center justify-center text-[hsba(120, 1%, 71%, 1)]">
												{React.createElement(Icon, {
													className: "w-6 h-6",
													"aria-hidden": "true",
												})}
											</div>
											<span className="text-[17px] font-light text-[hsba(120, 1%, 71%, 1)]">
												{label}
											</span>
										</a>
									) : onClick ? (
										<button
											onClick={onClick}
											className={`flex flex-row items-center gap-x-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full text-left ${
												disabled
													? "opacity-50 cursor-not-allowed"
													: "cursor-pointer"
											}`}
											aria-label={label}
											aria-disabled={disabled}
											disabled={disabled}
											tabIndex={disabled ? -1 : 0}
										>
											<div className="w-6 h-6 flex items-center justify-center text-gray-600">
												{React.createElement(Icon, {
													className: "w-5 h-5",
													"aria-hidden": "true",
												})}
											</div>
											<span className="text-base font-medium text-gray-900">
												{label}
											</span>
										</button>
									) : (
										<div className="flex flex-row items-center gap-x-3 px-4 py-3">
											<div className="w-6 h-6 flex items-center justify-center text-gray-600">
												{React.createElement(Icon, {
													className: "w-5 h-5",
													"aria-hidden": "true",
												})}
											</div>
											<span className="text-base font-medium text-gray-900">
												{label}
											</span>
										</div>
									)}
								</li>
							)
						)}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
