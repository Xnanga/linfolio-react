import { useEffect, useState } from "react";

import styles from "./Clock.module.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const getMonthName = (index) => {
    if (index === 0) return "Jan";
    if (index === 1) return "Feb";
    if (index === 2) return "Mar";
    if (index === 3) return "Apr";
    if (index === 4) return "May";
    if (index === 5) return "Jun";
    if (index === 6) return "Jul";
    if (index === 7) return "Aug";
    if (index === 8) return "Sep";
    if (index === 9) return "Oct";
    if (index === 10) return "Nov";
    if (index === 11) return "Dec";
  };

  const zeroPad = (num) => {
    return ("0" + num).slice(-2);
  };

  useEffect(() => {
    const getNewTimeDate = function () {
      const now = new Date();
      const dayOfMonth = now.getDate();
      const month = getMonthName(now.getMonth());
      const twentyFourHour = now.getHours();
      const hour = (now.getHours() + 24) % 12 || 12;
      const minute = now.getMinutes();

      setCurrentDate(`${dayOfMonth} ${month}`);
      setCurrentTime(
        `${hour}:${minute < 10 ? zeroPad(minute) : minute} ${
          twentyFourHour < 12 ? "AM" : "PM"
        }`
      );
    };

    // Get new time every second
    // Only update state on day or time change
    const ticker = setInterval(() => {
      getNewTimeDate();
    }, 1000);

    // Reset timer on state change
    return () => {
      clearInterval(ticker);
    };
  }, [currentDate, currentTime]);

  return (
    <div className={styles.clock}>
      <span className={styles["clock__date"]}>{currentDate}</span>
      <span className={styles["clock__time"]}>{currentTime}</span>
    </div>
  );
};

export default Clock;
