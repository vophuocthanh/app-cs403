import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import { toast } from 'sonner'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

interface NhanKhau {
  ma_nhan_khau: string
  ho_va_ten: string
  mahokhau: string
  quan_he_voi_chu_ho: string
  bi_danh: string
  ngay_sinh: string
  noi_sinh: string
  gioi_tinh: string
  so_dien_thoai: string
  quoc_tich: string
  dan_toc: string
  ton_giao: string
  cong_viec: string
  nguyen_quan: string
  dia_chi_thuong_tru: string
  dia_chi_tam_tru: string
  cccd: string
  ngay_cap: string
  noi_cap: string
}

const NhanKhauPage = () => {
  const [, setNhanKhau] = useState<NhanKhau | null>(null)
  const [data, setData] = useState([])
  useEffect(() => {
    document.title = 'Dashboard | Nhân Khẩu'
  }, [])
  useEffect(() => {
    const getDataNhanKhau = async () => {
      try {
        const res = await axios.get('http://localhost:8089/nhankhau')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataNhanKhau()
  }, [])

  const deleteNhanKhauMutation = async mahokhau => {
    try {
      const response = await axios.delete(
        `http://localhost:8089/hokhau/${mahokhau}`
      )
      if (response.status === 200 || response.status === 204) {
        toast.success('Nhân khẩu deleted successfully')
      } else {
        toast.error('Error deleting nhân khẩu')
      }
    } catch (error) {
      toast.error('Error deleting nhân khẩu')
    }
  }
  const columns = useMemo(
    () => [
      {
        header: 'Mã Nhân Khẩu',
        accessorKey: 'ma_nhan_khau.ma_nhan_khau',
        cell: column => <span>{column?.row?.original?.ma_nhan_khau}</span>
      },
      {
        header: 'Họ Và Tên',
        accessorKey: 'ho_va_ten.ho_va_ten',
        cell: column => {
          return <span>{column?.row?.original?.ho_va_ten}</span>
        }
      },
      {
        header: 'Mã Hộ Khẩu',
        accessorKey: 'mahokhau.mahokhau',
        cell: column => <span>{column?.row?.original?.mahokhau}</span>
      },
      {
        header: 'Quan hệ với chủ hộ',
        accessorKey: 'quan_he_voi_chu_ho.quan_he_voi_chu_ho',
        cell: column => <span>{column?.row?.original?.quan_he_voi_chu_ho}</span>
      },
      {
        header: 'Bí Danh',
        accessorKey: 'bi_danh.bi_danh',
        cell: column => {
          return <span>{column?.row?.original?.bi_danh}</span>
        }
      },
      {
        header: 'Ngày Sinh',
        accessorKey: 'ngay_sinh.ngay_sinh',
        cell: column => {
          return <span>{column?.row?.original?.ngay_sinh}</span>
        }
      },
      {
        header: 'Nơi Sinh',
        accessorKey: 'noi_sinh.noi_sinh',
        cell: column => {
          return <span>{column?.row?.original?.noi_sinh}</span>
        }
      },
      {
        header: 'Giới Tính',
        accessorKey: 'gioi_tinh.gioi_tinh',
        cell: column => {
          return <span>{column?.row?.original?.gioi_tinh}</span>
        }
      },
      {
        header: 'Số Điện Thoại',
        accessorKey: 'so_dien_thoai.so_dien_thoai',
        cell: column => {
          return <span>{column?.row?.original?.so_dien_thoai}</span>
        }
      },
      {
        header: 'Quốc Tịch',
        accessorKey: 'quoc_tich.quoc_tich',
        cell: column => {
          return <span>{column?.row?.original?.quoc_tich}</span>
        }
      },
      {
        header: 'Dân Tộc',
        accessorKey: 'dan_toc.dan_toc',
        cell: column => {
          return <span>{column?.row?.original?.dan_toc}</span>
        }
      },
      {
        header: 'Tôn Giáo',
        accessorKey: 'ton_giao.ton_giao',
        cell: column => {
          return <span>{column?.row?.original?.ton_giao}</span>
        }
      },
      {
        header: 'Công Việc',
        accessorKey: 'cong_viec.cong_viec',
        cell: column => {
          return <span>{column?.row?.original?.cong_viec}</span>
        }
      },
      {
        header: 'Nguyên Quán',
        accessorKey: 'nguyen_quan.nguyen_quan',
        cell: column => {
          return <span>{column?.row?.original?.nguyen_quan}</span>
        }
      },
      {
        header: 'Địa Chỉ Thường trú',
        accessorKey: 'dia_chi_thuong_tru.dia_chi_thuong_tru',
        cell: column => {
          return <span>{column?.row?.original?.dia_chi_thuong_tru}</span>
        }
      },
      {
        header: 'Địa Chỉ Tạm Trú',
        accessorKey: 'dia_chi_tam_tru.dia_chi_tam_tru',
        cell: column => {
          return <span>{column?.row?.original?.dia_chi_tam_tru}</span>
        }
      },
      {
        header: 'CCCD',
        accessorKey: 'cccd.cccd',
        cell: column => {
          return <span>{column?.row?.original?.cccd}</span>
        }
      },
      {
        header: 'Ngày Cấp',
        accessorKey: 'ngay_cap.ngay_cap',
        cell: column => {
          return <span>{column?.row?.original?.ngay_cap}</span>
        }
      },
      {
        header: 'Nơi Cấp',
        accessorKey: 'noi_cap.noi_cap',
        cell: column => {
          return <span>{column?.row?.original?.noi_cap}</span>
        }
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-8 h-8 p-0">
              <Link to={`/nhankhau/update/${column.row.original.ma_nhan_khau}`}>
                <Edit
                  className="cursor-pointer"
                  onClick={() => {
                    setNhanKhau(column.row.original)
                  }}
                ></Edit>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => {
                deleteNhanKhauMutation(column.row.original.ma_nhan_khau)
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
        <h1 className="text-3xl font-medium">Nhân Khẩu List</h1>
        <Link to="/nhankhau/create">
          <Button className="mt-5">Create Nhân Khẩu</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default NhanKhauPage
