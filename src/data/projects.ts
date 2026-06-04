export interface Project {
	slug: string;
	title: string;
	category: string;
	date: string;
	description: string;
	credits?: { role: string; name: string; url: string }[];
	cover: string;
	folder?: string;
	photos?: string[];
	featured?: boolean;
}

const HU_MONTHS = ['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'];

export function formatDate(date: string): string {
	const [year, month, day] = date.split('-').map(Number);
	return `${year}. ${HU_MONTHS[month - 1]} ${day}.`;
}

export const projects: Project[] = [
	{
		slug: 'co-lee-2025',
		title: 'Co Lee',
		category: 'Koncert',
		date: '2025-09-27',
		description: 'Debrecen, Víztorony\nSupport: Indigó.',
		cover: '/images/co lee 2025.09.27/DSC04409 (2).jpg',
		folder: 'images/co lee 2025.09.27',
	},
	{
		slug: 'ameliore-x-mixymo-x-pearly-x-catfight',
		title: 'Ameliore × Mixymo × Pearly × Cat Fight',
		category: 'Editorial',
		date: '2025-09-04',
		description: 'Ruha- és ékszermárka közös stúdiós shootja 2025 szeptemberében. A shootot Csepeli Dalma szervezte, aki engem is meghívott fotósként.',
		credits: [
			{ role: 'Szervező / Fotós', name: 'Csepeli Dalma', url: 'https://www.instagram.com/dalmacsepeli/' },
			{ role: 'Modell', name: 'Seres Lukács', url: 'https://www.instagram.com/a_l_u_k_e/' },
			{ role: 'Ruha', name: 'Ameliore Studios', url: 'https://www.instagram.com/ameliorestudios/' },
			{ role: 'Ruha', name: 'Cat Fight Thrift', url: 'https://www.instagram.com/catfight_thrift/' },
			{ role: 'Ékszer', name: 'Pearly Jewels', url: 'https://www.instagram.com/pearlyjewels.hu/' },
			{ role: 'Sapka', name: 'Mixymo Custom Cap', url: 'https://www.instagram.com/mixymo_custom_cap/' },
			{ role: 'Stúdió', name: 'Aether Art Space', url: 'https://www.instagram.com/aether.art.space/' },
		],
		cover: '/images/Ameliore Studios x Mixymo Custom Cap x Pearly Jewels x cat fight thrift 2025 sept 4/DSC02720 másolat.jpg',
		folder: 'images/Ameliore Studios x Mixymo Custom Cap x Pearly Jewels x cat fight thrift 2025 sept 4',
	},
	{
		slug: 'kavezo',
		title: 'Kávézó',
		category: 'Kávézó',
		date: '2026-05-07',
		description: 'Kávézós fotósorozat. Különböző időpontokban készült képek egybe gyűjtve.',
		cover: '/images/kávézó/DSC01905.jpg',
		folder: 'images/kávézó',
	},
	{
		slug: 'campus-fesztival-2025',
		title: 'Campus Fesztivál 2025',
		category: 'Koncert',
		date: '2025-06-25',
		description: 'Campus Fesztivál 2025 — Debrecen. Koncertfotók a fesztivál négy napjáról.',
		cover: '/images/campus fesztival 2025/DSC08928-Enhanced-NR.jpg',
		folder: 'images/campus fesztival 2025',
		featured: true,
	},
	{
		slug: 'greece-2024',
		title: 'Görögország 2024',
		category: 'Más',
		date: '2024-09-30',
		description: 'Görögországban készült fotósorozat 2024 szeptemberében. Iskolai szervezésű Erasmus kirándulás keretében.',
		cover: '/images/greece 2024 september/DSC08694.jpg',
		folder: 'images/greece 2024 september',
		featured: true,
	},
];
