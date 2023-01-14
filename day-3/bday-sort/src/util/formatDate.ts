export const formatDate = (dateString: string) => {
  var dateParts: any = dateString.split('/');

  var dateObject: any = new Date(
    +dateParts[2],
    dateParts[1] - 1,
    +dateParts[0]
  );

  return dateObject;
};
