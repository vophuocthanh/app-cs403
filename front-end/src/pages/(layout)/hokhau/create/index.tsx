import { toast } from 'sonner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HoKhauData {
  mahokhau: string
  tenchuho: string
  diachi: string
}

const CreateHoKhau = () => {
  const [hoKhau, setHoKhau] = useState<HoKhauData>({
    mahokhau: '',
    tenchuho: '',
    diachi: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Employee | Create'
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setHoKhau({ ...hoKhau, [name]: value })
  }

  const handleCreate = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8089/hokhau', hoKhau)
      if (response.status === 201) {
        toast.success('Hộ khẩu created successfully')
        navigate('/hokhau')
      } else {
        toast.error('Error creating hộ khẩu')
      }
    } catch (error) {
      toast.error('Error creating hộ khẩu')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="p-4">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Create Hộ Khẩu
        </h2>
        <form onSubmit={handleCreate}>
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
            Create Hộ Khẩu
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateHoKhau
