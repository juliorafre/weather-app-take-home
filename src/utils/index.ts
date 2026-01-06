

export const getRemainingHoursInDay = (dt: number): number[] => {
  const date = new Date(dt * 1000);
  const currentHour = date.getHours();
  
  const hours: number[] = [];
  
  for (let hour = currentHour; hour < 24; hour++) {
    hours.push(hour);
  }
  
  return hours;
}

export const formatDTtoDate = (dt: number): string => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  });
}


export const convertDtToHour = (dt: number): string => {
  const date = new Date(dt * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}