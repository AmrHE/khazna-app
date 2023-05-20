import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import SidebarItem from './SidebarItem';
import SidebarSeparator from './SidebarSeparator';
import { sidebarItems } from './sidebarItems';
// import SignoutIcon from '../../../public/signout.svg';
// import removeUserToken from '../../../services/removeUserToken';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { BiChevronLeft, BiUserCircle } from 'react-icons/bi';

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState('');

	// const { t } = useTranslation();
	// const auth = getAuth();
	const router = useRouter();
	// console.log(auth);

	// const user = useAuth();

	// const handleSignOut = () => {
	// 	// DELTE THE REGISTRATION TOKEN
	// 	removeUserToken(auth.currentUser.uid).then(() => {
	// 		signOut(auth)
	// 			.then(() => {
	// 				// Redirect to the home page
	// 				router.push('/');
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	});
	// };

	useEffect(() => {
		setActiveItem(router.route.split('/')[1]);
	}, [router]);

	return (
		<aside className="hidden w-1/5 min-h-screen p-2 capitalize bg-green-base lg:inline text-[#22398C]">
			<div className="flex-col">
				<div className="flex justify-center py-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="144.773"
						height="59.169"
						viewBox="0 0 144.773 59.169"
					>
						<g id="Group_1" data-name="Group 1" transform="translate(0 0)">
							<path
								id="Path_1"
								data-name="Path 1"
								d="M-91.768-5.626c.335-.864-.277-1.832-1.006-1.658l-9.636,2.3-16.738,38.741c10.281.088,12.317-4.448,16.25-13.746,2.658-6.285,8.362-18.494,11.13-25.634"
								transform="translate(147.866 25.359)"
								fill="#22398c"
							/>
							<path
								id="Path_2"
								data-name="Path 2"
								d="M-85.725-5.626c.335-.865-.277-1.832-1.006-1.658l-9.733,2.542L-111.3,29.84c10.253,0,12.317-4.448,16.25-13.746,2.658-6.285,6.559-14.581,9.327-21.72"
								transform="translate(126.233 29.274)"
								fill="#22398c"
							/>
							<path
								id="Path_3"
								data-name="Path 3"
								d="M-237.672-.892c-4.621,1.382-18.934,4.787-24.751,6.266-6.721,1.709-11.552,4.332-13.6,7.492a22.42,22.42,0,0,0-3.036,6.423c-12.8.492-14.59,5.765-17.5,11.62C-298.114,34.034-308.585,58-308.585,58c11.271.379,14.863-7.9,17.89-14.469.3-.659,6.031-14.043,7.317-17.356,1.125-2.9,2.8-6.115,5.743-7.041,2.1-.66,21.691-5.461,25.514-6.421a3.288,3.288,0,0,1,4.051,4.364c-1.745,4.419-7.5,17.461-7.5,17.461l-10.289,23.419c11.12,0,12.674-4.146,16.57-13.105,2.378-5.468,15.326-38.019,16.46-40.768,1.226-2.973-.753-6.2-4.843-4.974"
								transform="translate(308.585 1.158)"
								fill="#22398c"
							/>
							<path
								id="Path_4"
								data-name="Path 4"
								d="M-26.751-36.575c2.075-2.58,4.081-4.989,5.69-7.038.265-.34.854-1.221,1.438-2.054.191-.271.748-1.82-.812-1.815-3.036.011-4.368-.005-7.329-.005S-30.815-44.9-30.938-44.4c.961.005,2.834,0,5.568,0,.483,0,.451.287.2.594s-.573.642-1.067,1.226C-29.256-39-32.945-34.69-34.59-32.307a1.109,1.109,0,0,0,1.04,1.688c1.109,0,1.752-.048,4.718,0,1.024.016,1.226,0,2.081,0,1.173,0,1.454-.17,1.852-1.1.446-1.035.823-1.905.823-1.905h-4.3c-.372,0-.648-.175-.456-.526s1.736-1.985,2.086-2.426"
								transform="translate(137.259 89.403)"
								fill="#22398c"
							/>
							<path
								id="Path_5"
								data-name="Path 5"
								d="M-32.412-36.682a36.379,36.379,0,0,0-.451-3.625c-.451-2.7-.573-4.6-.759-5.854-.074-.525-.308-1.449-1.051-1.449h-1.544c-.35,1-.956,2.452-3.27,9.055s-2.6,7.622-2.6,7.622h2.107c1.12,0,1.284-.212,1.73-1.407.313-.833.679-1.826,1.168-3.1.531-1.38.939-2.548,1.4-3.874.111,1.624.308,3.434.568,6.263.159,1.767-.462,2.282-.536,2.341.488.021,4.511.032,6.342-4.74,1.194-3.11,1.783-5.17,3.7-10.323.393-1.056.557-1.852-.828-1.852h-2.017c-.35,1-.955,2.452-3.27,9.055-.239.69-.467,1.316-.7,1.89"
								transform="translate(155.972 89.542)"
								fill="#22398c"
							/>
							<path
								id="Path_6"
								data-name="Path 6"
								d="M-19.212-34.138h4.528c-.064.17-.128.334-.186.494-.557,1.513-1.046,2.622-1.593,4-.663,1.677-.881,2.218-.881,2.218h1.3c2.16,0,1.905.021,2.579-1.72.892-2.3,1.46-3.7,1.974-5.079,1.263-3.4,1.215-6.666-1.555-8.911a6.187,6.187,0,0,0-3.726-1.173,2.445,2.445,0,0,0-.292-.016h-2.017c-.35,1-.956,2.452-3.27,9.055s-2.6,7.622-2.6,7.622h2.107c1.12,0,1.284-.212,1.73-1.406.313-.833.679-1.826,1.168-3.1.26-.7.5-1.348.727-1.985m1.157-3.312c.345-1,.743-2.118,1.242-3.477a.09.09,0,0,0,.021.016,2.855,2.855,0,0,1,2.611,1.247,3.464,3.464,0,0,1,.43,2.213Z"
								transform="translate(115.204 86.149)"
								fill="#22398c"
							/>
							<path
								id="Path_7"
								data-name="Path 7"
								d="M-19.3-33.924h4.5c-.069.191-.143.377-.212.557-.557,1.513-1.046,2.622-1.592,4-.663,1.677-.881,2.219-.881,2.219h1.3c2.16,0,1.905.021,2.579-1.72.892-2.3,1.459-3.7,1.974-5.079,1.263-3.4,1.215-6.666-1.555-8.912-1.55-1.253-3.694-1.21-5.116-1.178H-19.2c-.35,1-.955,2.452-3.269,9.055s-2.6,7.622-2.6,7.622h2.107c1.12,0,1.284-.212,1.73-1.406.313-.833.68-1.826,1.168-3.1.27-.722.52-1.391.754-2.059m1.157-3.312c.345-.982.733-2.086,1.221-3.418a2.907,2.907,0,0,1,2.59,1.268,3.424,3.424,0,0,1,.435,2.15Z"
								transform="translate(151.819 85.936)"
								fill="#22398c"
							/>
							<path
								id="Path_8"
								data-name="Path 8"
								d="M-19.5-33.888h4.522c-1.98,5.674-2.234,6.581-2.234,6.581H-15.1c1.12,0,1.284-.212,1.73-1.407.313-.833.68-1.826,1.168-3.1,1.194-3.11,1.783-5.17,3.7-10.323.393-1.056.557-1.852-.828-1.852h-2.017c-.308.87-.807,2.091-2.468,6.783h-4.58c.467-1.332,1.019-2.893,1.789-4.941.393-1.056.557-1.852-.828-1.852h-2.017c-.35,1-.956,2.452-3.27,9.055s-2.6,7.622-2.6,7.622h2.107c1.12,0,1.284-.212,1.73-1.407.313-.833.68-1.826,1.168-3.1.281-.727.525-1.4.764-2.07h.048Z"
								transform="translate(102.34 85.877)"
								fill="#22398c"
							/>
							<path
								id="Path_9"
								data-name="Path 9"
								d="M-52.786-.018c-2.24.005-2.268.005-2.321,0-.053.063-4.011,6.007-4.5,6.586-.189.226-.342.4-.468.557a9.36,9.36,0,0,0-1.467-.368.41.41,0,0,0-.074-.011c.331-.931,1.361-3.7,1.814-4.935.389-1.046.552-1.835-.82-1.835-.531.005-.894.005-2,.005-.347.989-.947,2.429-3.239,8.97s-2.676,7.717-2.676,7.717h2.193c1.109,0,1.272-.377,1.714-1.56.31-.826.673-1.809,1.157-3.071.541-1.4.252-.6.725-1.961.047.005.094.016.142.021a4.43,4.43,0,0,1,2.251.807c1.541,1.319,1.809,3.97,1.9,5.764h2.4c.4,0,1.064.084.989-.967-.025-.342-.066-.684-.118-1.014a18.809,18.809,0,0,0-.97-3.911,4.676,4.676,0,0,0-1.172-1.732C-55.784,7.1-52.9,2.6-52.9,2.6l.936-1.262s.717-1.362-.824-1.357"
								transform="translate(131.439 41.9)"
								fill="#22398c"
							/>
							<path
								id="Path_10"
								data-name="Path 10"
								d="M-.049,0h0L-.063.034Z"
								transform="translate(121.252 10.982)"
								fill="#22398c"
							/>
							<path
								id="Path_11"
								data-name="Path 11"
								d="M-130.331-28.185a20.207,20.207,0,0,0-3.879-5.608,9.284,9.284,0,0,0-7.015-2.8,12.808,12.808,0,0,0-9.3,4.383s1.826,2.631,3.42,2.135c1.709-.532,2.322-2.016,5.293-2.073,3.292-.063,4.883,1.976,6.217,4.617a.224.224,0,0,1-.039.254,14.909,14.909,0,0,1-8.1,4.4c-2.428.47-10.966.081-14.45-.8l.064-.166,4.444-11.674.014-.04.038-.109a.657.657,0,0,0-.562-.927h-4.266S-169.22-8.2-169.217-8.2c4.57,0,5.936-2.157,7.086-5.163,0,0,1.951-5.069,2.025-5.271h0c0-.012,0-.009,0,0a92.851,92.851,0,0,0,14.38.887A19,19,0,0,0-130.664-25.4a2.709,2.709,0,0,0,.333-2.788m-29.663,9.241h.007c-.036.091-.042.1-.007,0"
								transform="translate(274.864 46.534)"
								fill="#22398c"
							/>
							<path
								id="Path_12"
								data-name="Path 12"
								d="M0-.027H0c0-.009,0-.012,0,0"
								transform="translate(114.759 27.929)"
								fill="#22398c"
							/>
							<path
								id="Path_13"
								data-name="Path 13"
								d="M-.1,0H-.109C-.144.1-.139.087-.1,0"
								transform="translate(114.979 27.595)"
								fill="#22398c"
							/>
							<path
								id="Path_14"
								data-name="Path 14"
								d="M-107.549-54.031c.98-2.211,3.457-9.035,3.457-9.035.221-.626,1.275-3.489,1.465-4.031a.657.657,0,0,0-.562-.927l-4.253,0s-2.483,7.166-3.646,9.838c-1.191,2.736-1.662,3.981-5.41,4.105a15.539,15.539,0,0,1-3.1-.122,2.1,2.1,0,0,1-1.618-2.732l0-.014c1.3-4.053,3.226-8.256,4.636-12.277a.657.657,0,0,0-.562-.927c-1.125,0-4.518,0-4.518,0l-.087.238c-.177.383-.509.959-.865,1.84-5.222-.138-10.612.026-14.362,3.777-2.383,2.383-3.5,7.206-1.962,10.238a9.259,9.259,0,0,0,7.9,4.885,9.3,9.3,0,0,0,6.319-2.035,8.052,8.052,0,0,0,4.78,2.035h3.986c3.829,0,6.776-1.2,8.4-4.858M-126.995-56.8a3.852,3.852,0,0,1-4.131,2.741,3.984,3.984,0,0,1-3.563-2.85,4.7,4.7,0,0,1,1.95-4.988,11.7,11.7,0,0,1,8.5-1.745c-.792,2-1.851,4.67-2.755,6.843"
								transform="translate(215.899 77.963)"
								fill="#22398c"
							/>
							<path
								id="Path_15"
								data-name="Path 15"
								d="M0-8.551A2.551,2.551,0,0,0,2.551-6,2.551,2.551,0,0,0,5.1-8.551,2.551,2.551,0,0,0,2.551-11.1,2.551,2.551,0,0,0,0-8.551"
								transform="translate(118 13.818)"
								fill="#22398c"
							/>
							<path
								id="Path_16"
								data-name="Path 16"
								d="M0-8.551A2.551,2.551,0,0,0,2.551-6,2.551,2.551,0,0,0,5.1-8.551,2.551,2.551,0,0,0,2.551-11.1,2.551,2.551,0,0,0,0-8.551"
								transform="translate(135.295 13.818)"
								fill="#22398c"
							/>
							<path
								id="Path_17"
								data-name="Path 17"
								d="M-8.551,0A2.551,2.551,0,0,0-11.1,2.551,2.551,2.551,0,0,0-8.551,5.1,2.551,2.551,0,0,0-6,2.551,2.551,2.551,0,0,0-8.551,0"
								transform="translate(121.242 2.716)"
								fill="#22398c"
							/>
							<path
								id="Path_18"
								data-name="Path 18"
								d="M-8.551-17.1A2.551,2.551,0,0,0-6-19.653,2.551,2.551,0,0,0-8.551-22.2,2.551,2.551,0,0,0-11.1-19.653,2.551,2.551,0,0,0-8.551-17.1"
								transform="translate(98.507 24.92)"
								fill="#22398c"
							/>
							<path
								id="Path_19"
								data-name="Path 19"
								d="M-8.551-17.1A2.552,2.552,0,0,0-6-19.653,2.551,2.551,0,0,0-8.551-22.2,2.551,2.551,0,0,0-11.1-19.653,2.551,2.551,0,0,0-8.551-17.1"
								transform="translate(92.376 24.92)"
								fill="#22398c"
							/>
						</g>
					</svg>
				</div>

				<div className="flex justify-around my-5 border-t border-solid border-slate-300 pt-5">
					<div className="flex">
						<AiOutlineWhatsApp className="mr-2" size={'1.25rem'} />
						<BsFillTelephoneFill />
					</div>
					<div className="font-semibold">المزيد</div>
					<div>
						<FaChevronRight size={'1.25rem'} />
					</div>
				</div>

				<div className="flex justify-around my-5">
					<div className="flex">
						<BiChevronLeft size={'1.5rem'} />
					</div>
					<div className="font-semibold">مازن هشام احمد</div>
					<div>
						<BiUserCircle size={'1.5rem'} />
					</div>
				</div>

				<div className="border-y border-solid py-4 border-slate-300">
					<div className="flex justify-end text-right">
						<div className="w-3/4">
							اكسب 50ج على كل حساب يتفعل بالرابط ده! ابعته لزمايلك دلوقتي
						</div>
					</div>

					<div className="flex justify-around my-3">
						<button className="bg-blue-800 w-28 text-white border-2 border-slate-300 py-1 rounded-md">
							ابعت الرابط
						</button>
						<button className="rounded-md w-28 py-1 border-2 border-green-600 border-solid">
							MP956
						</button>
					</div>
				</div>
			</div>

			{sidebarItems
				.filter((item) => item.group === 1)
				.map((item) => (
					<SidebarItem
						key={item.name}
						onClick={() => setActiveItem(item.link)}
						name={item.name}
						icon={item.icon}
						link={
							router?.query?.farmId
								? item.link?.split('/')[1] === ''
									? `/farms/${router?.query?.farmId} `
									: `${item.link}/${router?.query?.farmId}`
								: item.link
						}
						active={activeItem}
					/>
				))}
			<SidebarSeparator />
			<div className="text-xl text-center font-semibold">اعدادات كارت خذنة</div>
			<SidebarSeparator />
			{sidebarItems
				.filter((item) => item.group === 2)
				.map((item) => (
					<SidebarItem
						key={item.name}
						active={activeItem}
						name={item.name}
						icon={item.icon}
						link={
							router?.query?.farmId
								? item.link?.split('/')[1] === ''
									? `/farms/${router?.query?.farmId} `
									: `${item.link}/${router?.query?.farmId}`
								: item.link
						}
						onClick={() => setActiveItem(item.link)}
					/>
				))}
		</aside>
	);
};

export default Sidebar;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['home'])),
		},
	};
}
