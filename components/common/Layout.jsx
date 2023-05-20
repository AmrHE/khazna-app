import React, { useEffect, useState } from 'react';
// import SubNavbar from './common/Navbar/SubNavbar';

import { Sidebar } from '../index';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import firebaseClient from '../firebaseClient';
// import 'react-toastify/dist/ReactToastify.css';
// import getIotActivityLog from '../services/getIotActivityLog';

const Layout = ({ children }) => {
	// 1. TO SOLVE THE COLLAPSIBLE SIDEBAR ISSUE, ADD THE ONBOARDING SCREEN TO THIS COMPONENT CONDITIONALLY IF WE HAVE A LOGGED IN USER

	// 2. THEN ADD THE LAYOUT COMPONENT TO THE _app.jsx COMPONENT

	// 3. AND FINALLY REMOVE THE LAYOUT COMPONENT & ONBOARDING COMPONENT FROM ALL THE PAGES

	return (
		<>
			{/* <SubNavbar /> */}

			<div className="flex">
				<Sidebar />
				<div className="w-full lg:w-5/6">{children}</div>
			</div>
		</>
	);
};

export default Layout;
