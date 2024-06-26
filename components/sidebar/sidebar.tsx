import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { quickAccessItems } from "@/components/sidebar/example-data";
import './customScrollbar.css';
import { MenuAccordion } from './accordion';


export const Sidebar = () => {
	return (
		<aside className="w-80 dark:bg-zinc-900 p-4 h-screen overflow-y-auto custom-scrollbar">
			<h1 className="font-bold text-3xl text-black dark:text-gray-200 py-4 text-center">우리들의 강물</h1>
			<div>
				<h2 className="font-bold text-2xl m-2 text-white dark:text-gray-200 py-4">Quick Access</h2>
				<div className="flex flex-col gap-2">
					{quickAccessItems.map((item) => (
						<div key={item.id} className="m-2 flex items-center text-white dark:text-gray-200 px-2 py-1 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
							<FontAwesomeIcon icon={item.icon} className="mr-3 p-3 w-12" />
							{item.name}
						</div>
					))}
				</div>
			</div>
			<h2 className="font-bold text-2xl m-2 text-white dark:text-gray-200 py-4">Service</h2>
			<MenuAccordion />
		</aside>
	);
};
