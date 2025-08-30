import { Route, Routes } from "react-router";
import Home from "./app/home";
import Users from "./app/users";
import DashboardLayout from "./components/layout/dashboard-layout";
import ModalManager from "./components/modal/modal-manager";

function App() {
	return (
		<div className=" h-full">
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route index element={<Home />} />
					<Route path="/users" element={<Users />} />
				</Route>
			</Routes>
			<ModalManager />
		</div>
	);
}

export default App;
