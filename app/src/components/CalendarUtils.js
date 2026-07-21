// Month Names
export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May", 
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]


//  Week Days
export const WEEK_DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];


// Todays Date
export const today = () => new Date();

// Start of Month
export const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

// Format Month

export const formatMonth = (date) => {
    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

