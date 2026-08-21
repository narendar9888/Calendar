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




// Todays Date
export const today = () => new Date();


// Format Month

export const formatMonth = (date) => {
    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

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

// Start of Month
export const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};


// daysinmonth function 
export const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};


// getMonth grid

export const getMonthGrid = (date) => {
    const firstDay = startOfMonth(date);

    const totalDay = daysInMonth(date);

    const startWeekDay = firstDay.getDate();

    const grid = []

    let current = 1 - startWeekDay;

    for (let week = 0; week < 6; week++) {
        const row = [];

        for (let day = 0; day < 7; day++) {
            row.push(
                new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    current
                )
            );

            current++;
        }

        grid.push(row);
    }

    return grid;
};

export const isSameDay = (d1, d2) => {
    return (
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear()
    );
};




export const isToday = (date) => {
    return isSameDay(date, new Date());
};