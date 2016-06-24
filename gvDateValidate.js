function isValidDate(y, m, d)
{
  y = parseInt(y, 10);
  m = parseInt(m, 10) - 1;
  d = parseInt(d, 10);
  
  dateObj = new Date(y, m, d);
  
  return (d === dateObj.getDate() && m === dateObj.getMonth() && y === dateObj.getFullYear());
}
