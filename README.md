# javascript-date-add-substract-time
a simple module with javascript date

Like any other API the Date API is hard to understand and very confusing, but its learning it will make it easier.

I have made a simple modular pattern where in, it is capable of doing addition and substraction in Date API,
this is part of my payroll system project. I made it because I need a way to deal with computing the salary of an employee,
from its timekeeping records, doing it in native Date API is really hard and can leads to sphagetti codes,
so to make it easier I made this. It has the capability of getting the work hours based on the time out and the time in of the employee.

like this:

//substraction;
//the greater time must be in first.
let diff1 = timeparser.diff("18:00", "09:00");//return a date object;
let parsed = timeparser._parse(diff1); //return {hour: 9, minute: 0, second: 0};

//addition;
let add1 = timeparser.add("09:00", "01:00");//return a date object;
let parsed = timeparser._parse(add1); //return {hour: 10, minute: 0, second: 0};

the add and diff function is flexible as it accepts different types;

"01:00" - string;
1 - number;
12345463013214 - milliseconds;
new Date - date object;

