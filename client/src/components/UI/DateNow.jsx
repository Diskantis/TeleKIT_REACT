import React from "react";

const DateNow = () => {
  const date = new Date();
  let dayWeek = date.getDay();
  let dayNum = date.getDate();
  let month = date.getMonth();

  const monthRus = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  const weekdayRus = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ];

  return (
    <div className={"date"}>
      {weekdayRus[dayWeek]}, {dayNum} {monthRus[month]}
    </div>
  );
};

export default DateNow;