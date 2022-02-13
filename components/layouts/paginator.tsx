import Link from "next/link";

export type PaginatorProps = {
  length: number;
  itemsPerPage: number;
  currnetPage: number;
  tag?: string;
};

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

  const renderItems = () =>
    allItems.map((number) => {
      const className = `${number == currnetPage && "bg-black"}`;
      return (
        <Link
          key={number}
          href={{
            query: tag
              ? {
                  tag,
                  page: number,
                }
              : {
                  page: number,
                },
          }}
          passHref
        >
          <li className={className}>{number}</li>
        </Link>
      );
    });
  return <ul className='flex justify-center items-center'>{renderItems()}</ul>;
}
