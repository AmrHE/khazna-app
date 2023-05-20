import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarItem = ({ active, name, icon, link }) => {
	const router = useRouter();

	// console.log(active);
	// console.log(link);

	return (
		<div
			// onClick={handleItemClick}
			className={`flex items-center p-2 justify-end my-3 rounded-md cursor-pointer max-h-10 sidebar-item ${
				active === link.split('/')[1] ? 'sidebar-item_active' : ''
			}`}
		>
			<span className="font-normal ltr:pr-3 rtl:pl-3 text-[#22398C]">
				{name}
			</span>
			<Image
				src={icon}
				className={
					router?.locale === 'ar' ? 'flip_image sidebar-icon' : 'sidebar-icon'
				}
				width={30}
				height={30}
			/>
		</div>
	);
};

export default SidebarItem;
