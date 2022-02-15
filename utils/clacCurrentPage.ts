const calcCurrentPage = (
  asPath: string,
  itemsLength: number,
  itemsPerPage: number
) => {
  const targetPage = new URLSearchParams(asPath.split("/")[1]).get("page");
  const pageLength = Math.ceil(itemsLength / itemsPerPage);

  if (!targetPage) return 1;
  if (+targetPage > pageLength) {
    return +pageLength;
  }
  if (+targetPage < 1) {
    return 1;
  }
  return +targetPage;
};

export const clacPageInfo = (
  asPath: string,
  itemsLength: number,
  itemsPerPage: number
) => {
  const currnetPage = calcCurrentPage(asPath, itemsLength, itemsPerPage);
  const startIndex = itemsPerPage * (currnetPage - 1);
  const endIndex = itemsPerPage * (currnetPage - 1) + itemsPerPage;
  return { currnetPage, startIndex, endIndex };
};
