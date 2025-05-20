
enum DayOfWeek {
  Monday = "false",
  Tuesday="false",
  Wednesday="false",
  Thursday="false",
  Friday="false",
  Saturday="true",
  Sunday="true"
}


const isWeekend = (day: DayOfWeek):boolean => {
  if (day === 'true')
    return true;
  return false;
}
