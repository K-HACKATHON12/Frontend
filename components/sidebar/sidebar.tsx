// components/Sidebar.tsx
import './customScrollbar.css';
import { MenuAccordion } from './accordion';
import { QuickAccess } from './quick-access';
import { Details } from './details';

export const Sidebar = () => {
	return (
		<aside className="min-w-96 max-w-96 p-4 h-screen overflow-y-auto custom-scrollbar m-3">
			<QuickAccess />
			<div className="text-xs mt-3">서비스</div>
			<MenuAccordion />
			<Details />
		</aside>
	);
};
