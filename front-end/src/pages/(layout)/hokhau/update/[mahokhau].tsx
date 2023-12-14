import { toast } from 'sonner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {
  const { mahokhau } = useParams()
  const [hoKhau, setHoKhau] = useState({
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
        setHoKhau(response.data)
        toast.success('Hộ khẩu data fetched successfully')
      } catch (error) {
        toast.error('Error fetching hộ khẩu data')
      }
    }

    fetchData()
  }, [mahokhau])

  const handleChange = e => {
    const { name, value } = e.target
    setHoKhau({ ...hoKhau, [name]: value })
  }

  const handleUpdate = async e => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:8089/hokhau/${hoKhau.mahokhau}`,
        hoKhau
      )

      if (response.status === 200) {
        toast.success('Hộ khẩu updated successfully')
        navigate('/hokhau')
      } else {
        toast.error('Error updating hộ khẩu')
      }
    } catch (error) {
      toast.error('Error updating hộ khẩu')
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
                value={hoKhau.mahokhau}
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
                value={hoKhau.tenchuho}
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
                value={hoKhau.diachi}
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
