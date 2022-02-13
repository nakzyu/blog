import moment from "moment";
import "moment/locale/ko";

export const toDate = (date: string) => moment(date);
export const fromNow = (date: string) => moment(date).fromNow();
