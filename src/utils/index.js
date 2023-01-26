export const getTime = (time) => {
    const unixTime = (time - 10800) * 1000;
    const date = new Date(unixTime);
    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();

    return `${hours}:${minutes}`;
};