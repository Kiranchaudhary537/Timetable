import { useState } from "react";

function isCurrentTimeInTimeslot(timeslot) {
  // Get the current time
  const currentTime = new Date();

  // Extract the start and end times from the timeslot string
  const [startTimeStr, endTimeStr] = timeslot.split(' to ');
  const startTimeParts = startTimeStr.match(/(\d+):(\d+)\s+(am|pm)/i);
  const endTimeParts = endTimeStr.match(/(\d+):(\d+)\s+(am|pm)/i);

  // Convert the start and end times to Date objects
  const startHour = parseInt(startTimeParts[1], 10) + (startTimeParts[3].toLowerCase() === 'pm' ? 12 : 0);
  const startMinute = parseInt(startTimeParts[2], 10);
  const endHour = parseInt(endTimeParts[1], 10) + (endTimeParts[3].toLowerCase() === 'pm' ? 12 : 0);
  const endMinute = parseInt(endTimeParts[2], 10);
  const startTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), startHour, startMinute);
  const endTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), endHour, endMinute);

  // Compare the current time with the start and end times
  const isCurrentTimeInTimeslot = currentTime.getTime() >= startTime.getTime() && currentTime.getTime() <= endTime.getTime();

  return isCurrentTimeInTimeslot;
}

function isTimeslot1InTimeslot2(timeslot1, timeslot2) {
  // Extract the start and end times from the timeslot strings
  const [startTimeStr1, endTimeStr1] = timeslot1.split(' to ');
  const [startTimeStr2, endTimeStr2] = timeslot2.split(' to ');
  const startTimeParts1 = startTimeStr1.match(/(\d+):(\d+)\s+(am|pm)/i);
  const endTimeParts1 = endTimeStr1.match(/(\d+):(\d+)\s+(am|pm)/i);
  const startTimeParts2 = startTimeStr2.match(/(\d+):(\d+)\s+(am|pm)/i);
  const endTimeParts2 = endTimeStr2.match(/(\d+):(\d+)\s+(am|pm)/i);

  // Convert the start and end times to Date objects
  const startHour1 = parseInt(startTimeParts1[1], 10) + (startTimeParts1[3].toLowerCase() === 'pm' ? 12 : 0);
  const startMinute1 = parseInt(startTimeParts1[2], 10);
  const endHour1 = parseInt(endTimeParts1[1], 10) + (endTimeParts1[3].toLowerCase() === 'pm' ? 12 : 0);
  const endMinute1 = parseInt(endTimeParts1[2], 10);
  const startHour2 = parseInt(startTimeParts2[1], 10) + (startTimeParts2[3].toLowerCase() === 'pm' ? 12 : 0);
  const startMinute2 = parseInt(startTimeParts2[2], 10);
  const endHour2 = parseInt(endTimeParts2[1], 10) + (endTimeParts2[3].toLowerCase() === 'pm' ? 12 : 0);
  const endMinute2 = parseInt(endTimeParts2[2], 10);
  const startTime1 = new Date(2000, 0, 1, startHour1, startMinute1);
  const endTime1 = new Date(2000, 0, 1, endHour1, endMinute1);
  const startTime2 = new Date(2000, 0, 1, startHour2, startMinute2);
  const endTime2 = new Date(2000, 0, 1, endHour2, endMinute2);

  // Compare the timeslots
  const isTimeslot1InTimeslot2 = startTime1 >= startTime2 && endTime1 <= endTime2;

  return isTimeslot1InTimeslot2;
}

export default function CurrentFacultyAvailability() {
  const [faculty, setFaculty] = useState({
    name: "",
    isAvail: false,
  });
 
  const [formData, setFormData] = useState({
    name: "",
    timeslot: "",
    day:"",
  });

  return (
    <>
      <div class="flex h-full">
        <div class="w-3/5  flex items-center justify-center h-full">
          <div class="bg-white shadow-lg rounded-lg">
            {faculty.isAvail == true ? (
              <>
                <div class="px-4 py-2 border-b border-gray-200">
                  <h2 class="text-lg font-medium text-gray-800">Card Header</h2>
                </div>
                <div class="px-4 py-2 m-5 ">
                  <p class="text-gray-700">Card body content goes here</p>
                </div>
              </>
            ) : (
              <>
                <div class="px-4 py-2 border-b border-gray-200">
                  <h2 class="text-gray-800 text-center">Faculty Status</h2>
                </div>
                <div class="px-4 py-2 m-5">
                  <p class="text-red-700">
                    Select faculty from faculty status box
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div class="w-2/5 border-l-2 flex items-center justify-center h-full ">
          <div class="bg-white shadow-lg rounded-lg p-16 border">
            <h4 class="text-lg font-bold mb-4">Search Faculty Status</h4>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col">
                <label class="text-gray-700 mb-2" for="names">
                  Faculty Name
                </label>
                <select
                  class="border border-gray-400 rounded-lg px-3 py-2"
                  id="names"
                >
                  <option value="john">John</option>
                  <option value="jane">Jane</option>
                  <option value="bob">Bob</option>
                </select>
              </div>


              <div class="flex flex-col">
                <label class="text-gray-700 mb-2" for="time">
                  Timeslot
                </label>

                
                <select
                  class="border border-gray-400 rounded-lg px-3 py-2"
                  id="time"
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <div class="flex flex-col">
                <label class="text-gray-700 mb-2" for="days">
                  Days of the Week
                </label>
                <select
                  class="border border-gray-400 rounded-lg px-3 py-2"
                  id="days"
                >
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>
              </div>
              <button className="rounded bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 m-1 text-white px-3 py-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
