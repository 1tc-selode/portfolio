export async function onRequest(context) {
	const { request, next } = context;
	const url = new URL(request.url);

	if (url.pathname.toLowerCase().startsWith('/images/')) {
		const referer = request.headers.get('Referer') || '';
		const host = url.hostname;

		// Allow if request comes from the same site
		const isInternal = referer && (
			referer.includes(host) ||
			referer.includes('seletyeodett')
		);

		if (!isInternal) {
			return Response.redirect('https://' + host + '/', 302);
		}
	}

    if (url.pathname.toLowerCase().startsWith('/videos/')) {
		const referer = request.headers.get('Referer') || '';
		const host = url.hostname;

		// Allow if request comes from the same site
		const isInternal = referer && (
			referer.includes(host) ||
			referer.includes('seletyeodett')
		);

		if (!isInternal) {
			return Response.redirect('https://' + host + '/', 302);
		}
	}

	return next();
}
