import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

interface HoKhau {
  mahokhau: string
  tenchuho: string
  diachi: string
}

const EmployeePage = () => {
  const [, setEmployee] = useState<HoKhau | null>(null)
  const [data, setData] = useState([])
  useEffect(() => {
    document.title = 'Dashboard | Hộ Khẩu'
  }, [])
  useEffect(() => {
    const getDataEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:8089/hokhau')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataEmployee()
  }, [])

  const deleteEmployeeMutation = async mahokhau => {
    try {
      const response = await axios.delete(
        `http://localhost:8089/hokhau/${mahokhau}`
      )
      if (response.status === 200 || response.status === 204) {
        console.log('Employee deleted successfully')
        toast.success('Employee deleted successfully')
      } else {
        console.error('Error deleting employee')
        toast.error('Error deleting employee')
      }
    } catch (error) {
      console.error('Error deleting employee:', error)
      toast.error('Error deleting employee')
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Mã Hộ Khẩu',
        accessorKey: 'MaHoKhau.mahokhau',
        cell: column => <span>{column?.row?.original?.mahokhau}</span>
      },
      {
        header: 'Tên Chủ Hộ',
        accessorKey: 'TenChuHo.tenchuho',
        cell: column => {
          return <span>{column?.row?.original?.tenchuho}</span>
        }
      },
      {
        header: 'Địa Chỉ',
        accessorKey: 'DiaChi.diachi',
        cell: column => {
          return <span>{column?.row?.original?.diachi}</span>
        }
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-8 h-8 p-0">
              <Link to={`/hokhau/update/${column.row.original.mahokhau}`}>
                <Edit
                  className="cursor-pointer"
                  onClick={() => {
                    setEmployee(column.row.original)
                  }}
                ></Edit>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => {
                deleteEmployeeMutation(column.row.original.mahokhau)
              }}
            >
              <Trash className="text-red-500 cursor-pointer" />
            </Button>
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className="w-full p-5 mt-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-medium">Hộ Khẩu List</h1>
        <Link to="/hokhau/create">
          <Button>Create Hộ Khẩu</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default EmployeePage
