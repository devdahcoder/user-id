import { Outlet } from "react-router";
import Header from "../header";
import Sidebar from "../side-bar";

const DashboardLayout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="ml-[15rem] w-full min-h-screen">
				<Header />
				<main className="px-7 py-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
