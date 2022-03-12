import { useState } from "react";
import { fromNow } from "../../utils/dateHandler";

type TimeToolTipProps = {
  publishedDate: string;
};

const TimeToolTip = ({ publishedDate }: TimeToolTipProps) => {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);

  const mouseEvt = {
    onMouseEnter: () => setIsToolTipVisible(true),
    onMouseLeave: () => {
      setIsToolTipVisible(false);
    },
  };

  return (
    <div
      className=' pt-0.5 pb-1 pr-2  flex items-center content-center'
      {...mouseEvt}
    >
      <p className='cursor-pointer pr-1'>{fromNow(publishedDate)}</p>
      <img
        className='w-4 h-4 mt-0.5 cursor-pointer'
        src='/images/info.svg'
        alt='info-icon'
      />
      <div
        className={`${
          isToolTipVisible ? "visible" : "hidden"
        } flex relative items-center justify-center pl-1`}
      >
        <p>{publishedDate.split(":").slice(0, -1).join(":")}</p>
      </div>
    </div>
  );
};

export default TimeToolTip;
