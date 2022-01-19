export const dateStringToDate = (dateString: string): Date => {
	const datePart = dateString.split("/").map((value: string): number => {
		return parseInt(value);
	});
	//Months in a date constructor are 0 indexed.
	return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
