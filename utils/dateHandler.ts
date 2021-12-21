import moment from "moment";
import "moment/locale/ko";

export const fromNow = (date: string) => moment(date).fromNow();
