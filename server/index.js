const faker = require("@faker-js/faker");

const generateFakeData = () => {
  const division = faker.helpers.arrayElement([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ]);
    const semester = faker.helpers.arrayElement([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
    ]);

  const days = [];

  // Generate fake data for each day of the week
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  weekDays.forEach((day) => {
    const dayData = {
      day,
      timeslots: [],
    };

    // Generate fake data for each timeslot of the day
    const timeslots = [
      "08:00 A.M - 09:00 A.M",
      "09:15 A.M - 10:15 A.M",
      "10:30 A.M - 11:30 A.M",
      "11:45 A.M - 12:45 P.M",
      "01:30 P.M - 02:30 P.M",
      "02:45 P.M - 03:45 P.M",
      "04:00 P.M - 05:00 P.M",
    ];
    timeslots.forEach((timeslot) => {
      const timeslotData = {
        Timeslot: timeslot,
        Subject: faker.helpers.arrayElement([
          "Maths",
          "Physics",
          "Chemistry",
          "Biology",
          "Computer Science",
        ]),
        Faculty: faker.name.firstName(),
        Classroom: faker.helpers.arrayElement([
          "101",
          "102",
          "201",
          "202",
          "301",
          "302",
        ]),
      };
      dayData.timeslots.push(timeslotData);
    });

    days.push(dayData);
  });
    const data = { division, semester, days };
    return JSON.stringify(data);
};

console.log(generateFakeData());
