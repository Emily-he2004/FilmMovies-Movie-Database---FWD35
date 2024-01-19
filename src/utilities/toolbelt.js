
// This file is for shared functions to use throughout the app for efficiency.


function formatReleaseDate(date) {
    // convert a string that looks like:
    // 2023-11-09 and makes it look like:
    // Nov 9, 2023
    const dateObject = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
}




export {formatReleaseDate};