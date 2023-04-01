export const updateSubject = (day, slotId, newSlotData, setTimetable) => {
  setTimetable((prevState) => {
    const updatedDay = prevState.days.find((d) => d.day === day);

    if (!updatedDay) {
      return prevState;
    }

    const updatedSlot = updatedDay.timeslots[slotId - 1];
    if (!updatedSlot) {
      return prevState;
    }
    const updatedSlotObj = {
      ...updatedSlot,
      Subject: newSlotData,
    };

    const updatedDayObj = {
      ...updatedDay,
      timeslots: updatedDay.timeslots.map((s) =>
        s.id === slotId ? updatedSlotObj : s
      ),
    };

    const updatedDays = prevState.days.map((d) =>
      d.day === day ? updatedDayObj : d
    );
    return { ...prevState, days: updatedDays };
  });
};

export const updateFaculty = (
  day,
  slotId,
  classroom,
  timeslot,
  type,
  newSlotData,
  setTimetable
) => {
  setTimetable((prevState) => {
    const updatedDay = prevState.days.find((d) => d.day === day);

    if (!updatedDay) {
      return prevState;
    }

    const updatedSlot = updatedDay.timeslots[slotId - 1];
    if (!updatedSlot) {
      return prevState;
    }
    const updatedSlotObj = {
      ...updatedSlot,
      Classroom: classroom,
      Timeslot: timeslot,
      Type: type,
      Faculty: newSlotData,
    };

    const updatedDayObj = {
      ...updatedDay,
      timeslots: updatedDay.timeslots.map((s) =>
        s.id === slotId ? updatedSlotObj : s
      ),
    };

    const updatedDays = prevState.days.map((d) =>
      d.day === day ? updatedDayObj : d
    );
    return { ...prevState, days: updatedDays };
  });
};
