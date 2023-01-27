import {format} from "date-fns";

export const getTime = (time) => {
    return format(new Date(Number(time) * 1000), "HH:mm");
};
export function getDate(date) {
    return format(new Date(date * 1000), "d LLL");
}