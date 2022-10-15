import { fromNow } from "../../utils/dateHandler";

type TimeToolTipProps = {
  publishedDate: string;
};

const TimeToolTip = ({ publishedDate }: TimeToolTipProps) => {
  return (
    <div className=" pt-0.5 pb-1 pr-2  flex items-center content-center">
      <p className=" pr-1">{fromNow(publishedDate)}</p>
    </div>
  );
};

export default TimeToolTip;
