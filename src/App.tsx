import { Routes, Route } from "react-router";
import DashboardLayout from "./components/layout/dashboard-layout";
import Home from "./app/home";

function App() {
	return (
		<div className=" h-full">
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
