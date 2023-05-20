// import cropsIcon from '../../../public/cropsIcon.svg';
// import SensorsIcon from '../../../public/sensors.svg';
// import FarmsIcon from '../../../public/home.svg';
// import WeatherIcon from '../../../public/weather.svg';
// import SoilIcon from '../../../public/soil.svg';
import TasksIcon from '../../public/tasks.svg';
// import ReportsIcon from '../../../public/reports.svg';
// import TeamIcon from '../../../public/team.svg';
// import SettingsIcon from '../../../public/settings.svg';
// import mapsIcon from '../../../public/maps.svg';

export const sidebarItems = [
	{
		name: 'الرئيسية',
		icon: TasksIcon,
		group: 1,
		link: '/',
	},
	{
		name: 'مفردات المرتب',
		icon: TasksIcon,
		group: 1,
		link: '/weather',
	},
	{
		name: 'الشروط و الاحكام',
		icon: TasksIcon,
		group: 1,
		link: '/soil',
	},
	{
		name: 'الاسئلة الشائعة',
		icon: TasksIcon,
		group: 1,
		link: '/sensors',
	},
	{
		name: 'المستحقات الشهرية',
		icon: TasksIcon,
		group: 1,
		link: '/team',
	},
	// {
	// 	name: 'home:sidebar_tasks_btn',
	// 	// icon:TasksIcon,
	// 	group: 2,
	// 	link: '/tasks',
	// },
	// {
	// 	name: 'home:sidebar_reports_btn',
	// 	// icon:TasksIcon,
	// 	group: 2,
	// 	link: '/reports',
	// },
	// {
	// 	name: 'home:sidebar_crops_btn',
	// 	// icon:TasksIcon,
	// 	group: 3,
	// 	link: '/crops',
	// },
	{
		name: 'تفعيل خدمة وقتي',
		icon: TasksIcon,
		group: 2,
		link: '/maps',
	},
	{
		name: 'ايقاف كارت خذنة مفقود او مسروق',
		icon: TasksIcon,
		group: 2,
		link: '/my-settings',
	},
];
