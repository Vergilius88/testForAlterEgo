// export const getCurrentDateTimeString = () => {
//     const today = new Date();
//     const date = `${today.getFullYear().toString().padStart(2, "0")}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
//     const time = `${today.getHours().toString().padStart(2, "0")}-${today.getMinutes().toString().padStart(2, "0")}-${today.getSeconds().toString().padStart(2, "0")}`;
//     return `${date}_${time}`;
// };

// export const dateInIsoFormat = (date: any) => {
//     return date ? new Date(Date.parse(date)).toISOString() : date;
// };

// export const dateForInput = (deduction?: any) => {
//     const timezoneMs = -new Date().getTimezoneOffset() * 60000;
//     if (deduction) { return new Date(Date.now() + timezoneMs - deduction).toISOString().split(".")[0]; }
//     else { return new Date(Date.now() + timezoneMs).toISOString().split(".")[0]; }

// };
export const timeInSec = () => Math.ceil(new Date().getTime() / 1000);
