import { formatDate } from './formatDate';

const sortByDate = (arr: any) => {
  let sortedArr = arr.sort((a: any, b: any) => {
    let dateA = formatDate(a.dob);
    let dateB = formatDate(b.dob);
    if (dateB < dateA) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedArr;
};

const sortByName = (arr: any) => {
  return arr.sort((a: any, b: any) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
};

export const sortPeople = (arr: {}[], value: string) => {
  switch (value) {
    case 'name':
      arr = sortByName(arr);
      break;
    case 'age':
      arr = sortByDate(arr);
      break;
    default:
      break;
  }
  return arr;
};
