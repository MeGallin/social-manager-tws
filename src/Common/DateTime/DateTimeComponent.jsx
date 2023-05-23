import { useEffect, useState } from 'react';
const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setDateTime(
        new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(date),
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <>{dateTime ? <>{dateTime}</> : <div>'...loading'</div>}</>;
};

export default DateTimeComponent;
