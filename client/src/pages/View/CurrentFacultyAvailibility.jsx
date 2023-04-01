import { useState } from "react";

export default function CurrentFacultyAvailability() {
  const [faculty, setFaculty] = useState({
    name: "",
    isAvail: false,
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
