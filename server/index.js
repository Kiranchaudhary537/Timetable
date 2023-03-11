const convertTime = (timeStr) => {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "P.M") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};

const checkCurrent = (starttime, endtime) => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  console.log(hh + " " + mm);
  starttime = convertTime(starttime);
  endtime = convertTime(endtime);
  let [shours, sminutes] = starttime.split(":");
  let [ehours, eminutes] = endtime.split(":");
  console.log(shours + " " + sminutes);
  console.log(ehours + " " + eminutes);
  if (shours < hh && ehours > hh) {
    return true;
  } else if (shours == hh && sminutes <= mm) {
    return true;
  } else if (ehours == hh && eminutes < mm) {
    return true;
  } else {
    return false;
  }
};

// 9:30 A.M - 10:30 A.M

const check = () => {
  str = "12:30 A.M - 10:30 P.M";
  const [starttime, endtime] = str.split("-");
  if (checkCurrent(starttime.trim(), endtime.trimStart()) == true) {
    console.log("yes");
  } else {
    console.log("no");
  }
};

check();
