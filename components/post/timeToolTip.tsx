import { fromNow } from "../../utils/dateHandler";

type TimeToolTipProps = {
  publishedDate: string;
};

const TimeToolTip = ({ publishedDate }: TimeToolTipProps) => {
  return (
    <div className=" pt-0.5 pb-1 pr-2  flex items-center content-center">
      <p className=" pr-1">{fromNow(publishedDate)}</p>
      <div className="flex relative items-center justify-center pl-1 text-gray-500">
        <p>{publishedDate.split(":").slice(0, -1).join(":")}</p>
      </div>
    </div>
  );
};

export default TimeToolTip;
