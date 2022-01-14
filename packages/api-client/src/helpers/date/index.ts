export function getTimestampInSeconds(): number {
  return Math.round(Date.now() / 1000);
}

export function getDateDaysLater(days: number): Date {
  const differenceInMilliseconds = days * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + differenceInMilliseconds);
}
