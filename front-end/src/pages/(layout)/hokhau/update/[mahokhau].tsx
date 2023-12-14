import { toast } from 'sonner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {
  const { mahokhau } = useParams()
  const [employeeData, setEmployeeData] = useState({
    mahokhau: '',
    tenchuho: '',
    diachi: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Employee | Update'

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8089/hokhau/${mahokhau}`
        )
        setEmployeeData(response.data)
        toast.success('Employee data fetched successfully')
      } catch (error) {
        console.error('Error fetching employee data:', error)
        toast.error('Error fetching employee data')
      }
    }

    fetchData()
  }, [mahokhau])

  const handleChange = e => {
    const { name, value } = e.target
    setEmployeeData({ ...employeeData, [name]: value })
  }

  const handleUpdate = async e => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:8089/hokhau/${employeeData.mahokhau}`,
        employeeData
      )

      if (response.status === 200) {
        console.log('Employee updated successfully')
        toast.success('Employee updated successfully')
        navigate('/hokhau')
      } else {
        console.error('Error updating Employee')
        toast.error('Error updating Employee')
      }
    } catch (error) {
      console.error('Error updating Employee:', error)
      toast.error('Error updating Employee')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="p-4">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Update Hộ Khẩu
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-wrap justify-center w-full gap-10">
            <div className="mb-4">
              <label htmlFor="mahokhau" className="flex mb-3">
                Employee Number:
              </label>
              <input
                type="text"
                id="mahokhau"
                name="mahokhau"
                placeholder="Enter employee number"
                value={employeeData.mahokhau}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded outline-none w-96"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tenchuho" className="flex mb-3">
                Tên chủ hộ:
              </label>
              <input
                type="text"
                id="tenchuho"
                placeholder="Enter tên chủ hộ"
                name="tenchuho"
                value={employeeData.tenchuho}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="diachi" className="flex mb-3">
                Địa Chỉ:
              </label>
              <input
                type="text"
                placeholder="Enter địa chị"
                id="diachi"
                name="diachi"
                value={employeeData.diachi}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center px-4 py-2 mx-auto mt-10 text-white bg-blue-500 rounded w-52 hover:bg-blue-600"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee
