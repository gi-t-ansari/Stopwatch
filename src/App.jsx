import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers";
import "./App.css";
import moment from "moment";
import dayjs from "dayjs";

function App() {
  const [selctedDate, setSelectedDate] = useState("");


  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500 text-center">
        Hello world!
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Basic date time picker" onChange={(value) => setSelectedDate(dayjs(value))} />
      </LocalizationProvider>
    </>
  );
}

export default App;
