import Sidebar from '../side-bar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
		<div>
			<Sidebar />
			<Outlet />
		</div>
  );
}

export default DashboardLayout