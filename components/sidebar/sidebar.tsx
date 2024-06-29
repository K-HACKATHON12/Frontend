import './customScrollbar.css';
import { MenuAccordion } from './accordion';
import { QuickAccess } from './quick-access';


export const Sidebar = () => {
	return (
		<aside className="w-96 p-4 h-screen overflow-y-auto custom-scrollbar m-3">
			<QuickAccess />
			<div className="text-xs mt-3">
				Service
			</div>
			<MenuAccordion />
		</aside>
	);
};
