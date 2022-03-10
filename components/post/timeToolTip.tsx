import { fromNow } from "../../utils/dateHandler";

type TimeToolTipProps = {
  publishedDate: string;
};

const TimeToolTip = ({ publishedDate }: TimeToolTipProps) => {
  return (
    <div className='mt-0.5'>
      <p className='cursor-pointer'>{fromNow(publishedDate)}</p>
    </div>
  );
};

export default TimeToolTip;
