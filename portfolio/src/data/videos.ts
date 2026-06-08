export interface Video {
	slug: string;
	title: string;
	category: string;
	date: string;
	cover: string;
	url: string;
	description: string;
	credits?: { role: string; name: string; url: string }[];
	folder?: string;
}

export const videos: Video[] = [
	{
		slug: 'ganba-mango-matcha',
		title: 'Mango matcha',
		category: 'Kávézó',
		date: '2025-08-26',
		cover: '/images/kávézó/Képernyőfelvétel (185).png',
		url: 'https://youtu.be/jQCWLC7hlzE?si=zKBz9l8ZPylkLiJN',
		folder: '',
		description: 'Debrecen - Ganba Coffe',
	},
	{
		slug: 'ganba-the-milk',
		title: 'The milk',
		category: 'Kávézó',
		date: '2025-10-03',
		cover: '/images/kávézó/Képernyőfelvétel (180).png',
		url: 'https://youtu.be/P22r8lOWah8',
		folder: '',
		description: 'Debrecen - Ganba Coffe',
	},
	{
		slug: 'ameliore-common-ground-i-2026-02-20',
		title: 'COMMON GROUND I/IV',
		category: 'Shorts',
		date: '2026-02-20',
		cover: '/images/common ground/Képernyőfelvétel (175).png',
		url: 'https://youtu.be/r9c9HM_NoQ0',
		credits: [
			{ role: 'Ruha', name: 'Amélioré Studios', url: 'https://www.instagram.com/ameliorestudios/' },
			{ role: 'Modell', name: 'Layla Hosny', url: 'https://www.instagram.com/laylaaahosnyy/' },
			{ role: 'Modell', name: 'Armin Polanen', url: 'https://www.instagram.com/arminpolanen/' },
			{ role: 'Modell', name: 'Jul Eran', url: 'https://www.instagram.com/jul.eran/' },

		],
		folder: 'images/common ground',
		description: '',
	},
	{
		slug: 'ameliore-common-ground-ii-2026-02-20',
		title: 'COMMON GROUND II/IV',
		category: 'Shorts',
		date: '2026-02-20',
		cover: '/images/common ground/Képernyőfelvétel (173).png',
		url: 'https://www.youtube.com/watch?v=sI93SZeLndM',
		credits: [
			{ role: 'Ruha', name: 'Amélioré Studios', url: 'https://www.instagram.com/ameliorestudios/' },
			{ role: 'Modell', name: 'Layla Hosny', url: 'https://www.instagram.com/laylaaahosnyy/' },
			{ role: 'Modell', name: 'Armin Polanen', url: 'https://www.instagram.com/arminpolanen/' },
			{ role: 'Modell', name: 'Jul Eran', url: 'https://www.instagram.com/jul.eran/' },

		],
		folder: 'images/common ground',
		description: '',
	},
	{
		slug: 'marslakók-real-jarat',
		title: 'Marslakók — REAL JÁRAT',
		category: 'Videóklip',
		date: '2026-01-01',
		cover: '/images/marslakok real jarat/marslakokrealjarat.png',
		url: 'https://www.youtube.com/watch?v=wVHqRU9VJlg',
		folder: 'images/marslakok real jarat',
		description: 'Az első klippem amit valaha csináltam, a Marslakóknak készítettem a REAL JÁRAT zenéjükre.',
		credits: [
			{ role: 'Rendező / Operatőr / Vágó', name: 'Seletye Odett', url: '' },
			{ role: 'Zene', name: 'Marslakók', url: 'https://www.instagram.com/marslakok._/' },
			{ role: 'Szöveg', name: 'SAEH', url: 'https://www.instagram.com/nardaiaron/' },
			{ role: 'Szöveg', name: 'Shiro', url: 'https://www.instagram.com/shiro_2278/' },
			{ role: 'Producer', name: 'Trashyno', url: 'https://www.instagram.com/trashyno__/' },
			{ role: 'Producer', name: 'Shiro', url: 'https://www.instagram.com/shiro_2278/' },
			{ role: 'Mix & Master', name: 'Trashyno', url: 'https://www.instagram.com/trashyno__/' },
			{ role: 'Kiadó', name: 'Raw Techniques Records', url: 'https://www.instagram.com/rawtechniques/' },
		],
	},
	{
		slug: 'gyuris-debrecen-2026-03-06',
		title: 'Gyuris',
		category: 'Koncert',
		date: '2026-03-06',
		cover: '/images/gyuris debrecen 2026.03.06/thumbnail.png',
		url: 'https://youtu.be/I0_si-sfPYs',
		folder: 'images/gyuris debrecen 2026.03.06',
		description: 'Gyuris koncertvideója, amit 2026 márciusában készítettem a debreceni Víztoronykertben.',
	},
];
