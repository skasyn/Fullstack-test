import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const f = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'});

const getNewDate = () => {
  const t = new Date();
    
  return f.format(t);
};

export const CurrentDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(getNewDate());
    const interval = setInterval(() => {
      setDate(getNewDate());
    }, 60000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return <Text fontSize="sm">{date} - Clause de non-responsabilité</Text>
}