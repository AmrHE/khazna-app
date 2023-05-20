module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				base: '0px 5px 12px 0px rgba(0, 0, 0, 0.05)',
			},
			colors: {
				green: {
					palest: '#F4F9F8',
					pale: '#EEFAF0',
					lightest: '#27D994',
					lighter: '#08A178',
					lighterWOpacity: 'rgba(8, 161, 120, 0.09)',
					light: '#2FA84F',
					lightWOpacity: 'rgba(47, 168, 79, 0.18)',
					base: '#E3E7EA',
					baseWOpacity: 'rgba(22, 107, 65, 0.16)',
					dark: '#14532D',
					darker: '#0F573B',
				},

				mapButtons: {
					bg: '#F4F4F4',
				},
				offwhite: {
					base: '#F5F5F5',
				},
				status: {
					blue: '#069697',
					blueWOpacity: 'rgba(47, 159, 248, 0.04)',
					yellow: '#F3AA18',
					yellowWOpacity: 'rgba(190, 222, 158, 0.11)',
					gold: '#CDB05E',
					gray: '#5E6366',
					red: '#FE0000',
					redWOpacity: 'rgba(254, 0, 0, 0.8)',
					green: '#49B365',
					lightgreen: '#22C55E',
					lightergreen: '#DCFCE7',
				},
				blue: {
					base: '#2F9FF8',
				},
				link: {
					blue: '#4F46E5',
				},
				gray: {
					lighter: '#6F747A',
					lighterWOpacity: 'rgba(40, 40, 40, 0.2)',
					light: '#8392AB',
					lightWOpacity: 'rgba(16, 16, 16, 0.66)',
					base: '#7B809A',
				},
			},
			spacing: {
				18: '4.5rem',
				26: '6.5rem',
				74: '18.5rem',
				76: '19rem',
				78: '19.5rem',

				82: '20.5rem',
				84: '21rem',
				86: '21.5rem',
				88: '22rem',
				90: '22.5rem',
				92: '23rem',
				94: '23.5rem',

				104: '26rem',
				112: '28rem',
				116: '29rem',
				118: '29.5rem',
				119: '29.75rem',
				120: '30rem',
				128: '32rem',
				130: '32.8rem',
			},
		},
	},
};
