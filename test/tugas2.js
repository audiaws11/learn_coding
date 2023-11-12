function isLeapYear(year) {
    // Return true if the year is divisible by 4 and not by 100, or if it is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Example usage:
  const year = 2025;
  
  console.log(isLeapYear(year));