import { Routes, Route } from "react-router";
import DashboardLayout from "./components/layout/dashboard-layout";
import Home from "./app/home";
import Users from "./app/users";

function App() {
	return (
		<div className=" h-full">
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route index element={<Home />} />
					<Route path="/users" element={<Users />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
