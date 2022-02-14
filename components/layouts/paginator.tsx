import Link from "next/link";

export type PaginatorProps = {
  length: number;
  itemsPerPage: number;
  currnetPage: number;
  tag?: string;
};

type LinkProps = {
  children: JSX.Element;
  page: number;
  tag?: string;
};
const GenLink = ({ children, page, tag }: LinkProps) => (
  <Link
    key={page}
    href={{
      query: tag
        ? {
            tag,
            page,
          }
        : {
            page,
          },
    }}
    passHref
  >
    {children}
  </Link>
);

export default function Paginator({
  length,
  itemsPerPage,
  currnetPage,
  tag,
}: PaginatorProps) {
  const pageLength = Math.ceil(length / itemsPerPage);
  const unit = +String(currnetPage)[String(currnetPage).length - 1];
  const remnants = unit ? currnetPage - +unit : currnetPage - 10;

  const allItems = Array(10)
    .fill(null)
    .map((_, i) => {
      const pageVal = remnants + (i + 1);

      if (pageVal > pageLength) return null;
      return pageVal;
    })
    .filter((item) => item !== null) as number[];

  const makePageNumber = () =>
    allItems.map((number) => {
      const className = `${
        number !== currnetPage ? "cursor-pointer " : "text-[#d31900] underline"
      } px-1 font-bold text-m`;
      return (
        <GenLink key={number} page={number} tag={tag}>
          <li className={className}>{number}</li>
        </GenLink>
      );
    });

  const makeButton = (direction: "이전" | "다음") => {
    const page = direction === "이전" ? remnants - 9 : remnants + 11;
    return (
      <GenLink key={direction} page={page} tag={tag}>
        <li className='cursor-pointer px-1 text-m'>{direction}</li>
      </GenLink>
    );
  };

  const renderItems = () => {
    const pageNumbers = makePageNumber();

    const stingified = String(pageLength);
    const lastRemnants = +stingified - +stingified[stingified.length - 1];

    return [
      remnants !== 0 && makeButton("이전"),
      ...pageNumbers,
      currnetPage <= lastRemnants && makeButton("다음"),
    ];
  };

  return (
    <ul className='flex justify-center items-center mt-16 mb-4'>
      {renderItems()}
    </ul>
  );
}
