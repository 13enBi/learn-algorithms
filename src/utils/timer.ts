export const timeout = (time = 2000) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});
