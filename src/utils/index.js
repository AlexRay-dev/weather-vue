import {format} from "date-fns";

export const getTime = (time) => {
    console.log(time)
    if (typeof time === 'number') {
        return format(new Date(Number(time) * 1000), "HH:mm")
    }
    return 'err'
};
export function getDate(date) {
    return format(new Date(date * 1000), "d LLL");
}