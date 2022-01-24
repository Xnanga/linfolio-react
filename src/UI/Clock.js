import { useState } from "react";

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

  const getNewTimeDate = async function () {
    const now = new Date();
    const dayOfMonth = now.getDate();
    const month = getMonthName(now.getMonth());
    let hour = (now.getHours() + 24) % 12 || 12;
    const minute = now.getMinutes();
    // const second = now.getSeconds();

    // NEED TO FILL TIME WITH ZEROES

    setCurrentDate(`${dayOfMonth} ${month}`);
    setCurrentTime(`${hour}:${minute}`);
  };

  setInterval(getNewTimeDate, 1000);

  return (
    <div className={styles.clock}>
      <span className={styles["clock__date"]}>{currentDate}</span>
      <span className={styles["clock__time"]}>{currentTime}</span>
    </div>
  );
};

export default Clock;
