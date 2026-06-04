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
		slug: 'marslakók-real-jarat',
		title: 'Marslakók — REAL JÁRAT',
		category: 'Videóklip',
		date: '2024-01-01',
		cover: '/images/marslakok real jarat/marslakokrealjarat.png',
		url: 'https://www.youtube.com/watch?v=wVHqRU9VJlg',
		folder: 'images/marslakok real jarat',
		description: 'Az első klippem amit valaha csináltam, a Marslakóknak készítettem a REAL JÁRAT zenéjükre.',
		credits: [
			{ role: 'Rendező / Operatőr / Vágó', name: 'Seletye Odett', url: '' },
			{ role: 'Szöveg', name: 'Shiro, SAEH', url: '' },
			{ role: 'Producer', name: 'Trashyno, Shiro', url: '' },
			{ role: 'Mix & Master', name: 'Trashyno', url: '' },
			{ role: 'Kiadó', name: 'Raw Techniques Records', url: '' },
		],
	},
];
