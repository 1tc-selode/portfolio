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
		slug: 'kain 2026-03-06',
		title: 'Kain',
		category: 'Koncert',
		date: '2026-03-06',
		description: 'Debrecen, Víztorony - Gyuris\nSupport: Kain',
		cover: '/images/kain 2026-03-06/DSC07708-Enhanced-NR.jpg',
		folder: 'images/kain 2026-03-06',
	},
	{
		slug: 'gyuris 2026-03-06',
		title: 'Gyuris',
		category: 'Koncert',
		date: '2026-03-06',
		description: 'Debrecen, Víztorony\nSupport: Kain',
		cover: '/images/gyuris 2026-03-06/DSC08097-Enhanced-NR-2.jpg',
		folder: 'images/gyuris 2026-03-06',
	},
	{
		slug: 'ameliore-common-ground-2026-02-20',
		title: 'COMMON GROUND',
		category: 'Editorial',
		date: '2026-02-20',
		description: '',
		credits: [
			{ role: 'Ruha', name: 'Amélioré Studios', url: 'https://www.instagram.com/ameliorestudios/' },
			{ role: 'Modell', name: 'Layla Hosny', url: 'https://www.instagram.com/laylaaahosnyy/' },
			{ role: 'Modell', name: 'Armin Polanen', url: 'https://www.instagram.com/arminpolanen/' },
			{ role: 'Modell', name: 'Jul Eran', url: 'https://www.instagram.com/jul.eran/' },

		],
		cover: '/images/common ground photos/DSC06612.jpg',
		folder: 'images/common ground photos',
	},
	{
		slug: 'ameliore-crew-2026-01-24',
		title: 'AMÉLIORÉ CREW',
		category: 'Editorial',
		date: '2026-01-24',
		description: '',
		credits: [
			{ role: 'Ruha', name: 'Amélioré Studios', url: 'https://www.instagram.com/ameliorestudios/' },
			{ role: 'Modell', name: 'Molnár Virág', url: 'https://www.instagram.com/_molnar.virag_/' },
			{ role: 'Modell', name: 'Gyönki Dorina', url: 'https://www.instagram.com/dorrcii/' },
			{ role: 'Modell', name: 'Seres Lukács', url: 'https://www.instagram.com/a_l_u_k_e/' },

		],
		cover: '/images/ameliore crew 2026-01-24/DSC05678.jpg',
		folder: 'images/ameliore crew 2026-01-24',
	},
	{
		slug: 'elefant-2025-11-29',
		title: 'Elefánt',
		category: 'Koncert',
		date: '2025-11-29',
		description: 'Szeged - IH Rendezvényközpont',
		cover: '/images/elefant 2025-11-29/DSC03943-Enhanced-NR.jpg',
		folder: 'images/elefant 2025-11-29',
	},
	{
		slug: 'filo-2025-11-22',
		title: 'FILO',
		category: 'Koncert',
		date: '2025-11-22',
		description: 'Szeged - Jate Klub',
		cover: '/images/filo 2025-11-22/DSC00437-Enhanced-NR-2.jpg',
		folder: 'images/filo 2025-11-22',
	},
	{
		slug: 'analog-balaton-2025-11-09',
		title: 'Analog Balaton',
		category: 'Koncert',
		date: '2025-11-09',
		description: 'Debrecen, Klinika Egyetemi Klubb.',
		cover: '/images/analog balaton 2025-11-09/DSC08124-Enhanced-NR másolat2.jpg',
		folder: 'images/analog balaton 2025-11-09',
	},
	{
		slug: 'villogezma-2025-10-31',
		title: 'Gezma Villő',
		category: 'Editorial',
		date: '2025-10-31',
		description: '',
		credits: [
			{ role: 'Modell', name: 'Gezma Villő', url: 'https://www.instagram.com/villogezma/' },
		],
		cover: '/images/villogezma 2025-10-31/DSC05949.jpg',
		folder: 'images/villogezma 2025-10-31',
	},
	{
		slug: 'hairkraft-2025',
		title: 'HAIR/KRAFT 2025',
		category: 'Más',
		date: '2025-10-28',
		description: 'A Hair/Kraft egy fodrász- és barber szakmai esemény, ahol élő bemutatók, trendek és inspirációs show-k zajlanak.',
		credits: [
			{ role: 'Esemény', name: 'Hair/Kraft', url: 'https://www.instagram.com/hairkraft__/' },
			{ role: 'Szervező', name: 'Beke Balázs', url: 'https://www.instagram.com/bekebalazs_/' },
		],
		cover: '/images/hairkraft 2025/DSC05783-Enhanced-NR.jpg',
		folder: 'images/hairkraft 2025',
	},
	{
		slug: 'co-lee-2025',
		title: 'Co Lee & Indigo',
		category: 'Koncert',
		date: '2025-09-27',
		description: 'Debrecen, Víztorony\nSupport: Indigó.',
		cover: '/images/co lee 2025.09.27/DSC04409 (2).jpg',
		folder: 'images/co lee 2025.09.27',
	},
	{
		slug: 'ameliore-x-mixymo-x-pearly-x-catfight',
		title: 'Amélioré × Mixymo × Pearly × Cat Fight',
		category: 'Editorial',
		date: '2025-09-04',
		description: 'Ruha- és ékszermárka közös stúdiós shootja 2025 szeptemberében. A shootot Csepeli Dalma szervezte, aki engem is meghívott fotósként.',
		credits: [
			{ role: 'Szervező / Fotós', name: 'Csepeli Dalma', url: 'https://www.instagram.com/dalmacsepeli/' },
			{ role: 'Modell', name: 'Seres Lukács', url: 'https://www.instagram.com/a_l_u_k_e/' },
			{ role: 'Ruha', name: 'Amélioré Studios', url: 'https://www.instagram.com/ameliorestudios/' },
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
		title: 'Görögország',
		category: 'Más',
		date: '2024-09-30',
		description: 'Görögországban készült fotósorozat 2024 szeptemberében. Iskolai szervezésű Erasmus kirándulás keretében.',
		cover: '/images/greece 2024 september/DSC08694.jpg',
		folder: 'images/greece 2024 september',
		featured: true,
	},
];
