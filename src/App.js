import { useState, useEffect, useCallback } from 'react'
import { BiCalendar } from 'react-icons/bi'
import AddAppointment from './components/AddAppointment'
import AppointmentInfo from './components/AppointmentInfo'
import Search from './components/Search'

const App = () => {
  const [appointmentList, setAppointmentList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mt-3 font-thin mx-auto">
      <h1 className="text-3xl md:text-5xl flex items-center justify-center mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => {
          return <AppointmentInfo key={appointment.id} {...appointment} />
        })}
      </ul>
    </div>
  )
}

export default App
