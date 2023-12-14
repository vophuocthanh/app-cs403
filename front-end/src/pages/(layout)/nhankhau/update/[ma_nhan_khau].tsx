import { toast } from 'sonner'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePayRates = () => {
  const { ma_nhan_khau } = useParams()

  const [nhanKhau, setNhanKhau] = useState({
    ma_nhan_khau: 'string',
    ho_va_ten: 'string',
    mahokhau: 'string',
    quan_he_voi_chu_ho: 'string',
    bi_danh: 'string',
    ngay_sinh: 'string',
    noi_sinh: 'string',
    gioi_tinh: 'string',
    so_dien_thoai: 'string',
    quoc_tich: 'string',
    dan_toc: 'string',
    ton_giao: 'string',
    cong_viec: 'string',
    nguyen_quan: 'string',
    dia_chi_thuong_tru: 'string',
    dia_chi_tam_tru: 'string',
    cccd: 'string',
    ngay_cap: 'string',
    noi_cap: 'string'
  })

  const handleChange = e => {
    const { name, value } = e.target
    setNhanKhau({ ...nhanKhau, [name]: value })
  }

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'PayRates | Update'

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8089/nhankhau/${ma_nhan_khau}`
        )
        setNhanKhau(response.data)
        toast.success('Nhân Khẩu data fetched successfully')
      } catch (error) {
        toast.error('Error fetching nhân khẩu data')
      }
    }

    fetchData()
  }, [ma_nhan_khau])

  const handleUpdatePayRates = async e => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:8089/nhankhau/${ma_nhan_khau}`,
        nhanKhau
      )
      if (response.status === 200) {
        toast.success('Nhân khẩu updated successfully')
        navigate('/pay-rates')
      } else {
        toast.error('Error updating nhân khẩu')
      }
    } catch (error) {
      toast.error('Error updating nhân khẩu')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
      <div className="p-4">
        <h2 className="items-center mx-auto mb-4 text-2xl font-semibold text-center">
          Update Nhân Khẩu
        </h2>
        <form onSubmit={handleUpdatePayRates}>
          <div className="mb-4">
            <label htmlFor="ma_nhan_khau" className="flex mb-3">
              Mẫ Nhân Khẩu:
            </label>
            <input
              type="text"
              id="ma_nhan_khau"
              name="ma_nhan_khau"
              placeholder="Enter mã nhân khẩu"
              value={nhanKhau.ma_nhan_khau}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ho_va_ten" className="flex mb-3">
              Họ Và Tên:
            </label>
            <input
              type="text"
              id="ho_va_ten"
              placeholder="Enter họ và tên"
              name="ho_va_ten"
              value={nhanKhau.ho_va_ten}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mahokhau" className="flex mb-3">
              Mã Hộ Khẩu:
            </label>
            <input
              type="text"
              placeholder="Enter mã hộ khẩu"
              id="mahokhau"
              name="mahokhau"
              value={nhanKhau.mahokhau}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quan_he_voi_chu_ho" className="flex mb-3">
              Quan Hệ Và Chủ Hộ:
            </label>
            <input
              type="text"
              placeholder="Enter quan hệ với chủ hộ"
              id="quan_he_voi_chu_ho"
              name="quan_he_voi_chu_ho"
              value={nhanKhau.quan_he_voi_chu_ho}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bi_danh" className="flex mb-3">
              Bí Danh:
            </label>
            <input
              type="text"
              placeholder="Enter Bí Danh"
              id="bi_danh"
              name="bi_danh"
              value={nhanKhau.bi_danh}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded outline-none w-96"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ngay_sinh" className="flex mb-3">
              Ngày Sinh:
            </label>
            <input
              type="text"
              placeholder="Enter Bí Danh"
              id="ngay_sinh"
              name="ngay_sinh"
              value={nhanKhau.ngay_sinh}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="noi_sinh" className="flex mb-3">
              Nơi Sinh:
            </label>
            <input
              type="text"
              placeholder="Enter Nơi Sinh"
              id="noi_sinh"
              name="noi_sinh"
              value={nhanKhau.noi_sinh}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gioi_tinh" className="flex mb-3">
              Giới Tính:
            </label>
            <input
              type="text"
              placeholder="Enter Giới Tính"
              id="gioi_tinh"
              name="gioi_tinh"
              value={nhanKhau.gioi_tinh}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="so_dien_thoai" className="flex mb-3">
              Số Điện Thoại:
            </label>
            <input
              type="text"
              placeholder="Enter Số Điện Thoại"
              id="so_dien_thoai"
              name="so_dien_thoai"
              value={nhanKhau.so_dien_thoai}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quoc_tich" className="flex mb-3">
              Quốc Tịch:
            </label>
            <input
              type="text"
              placeholder="Enter quốc tịch"
              id="quoc_tich"
              name="quoc_tich"
              value={nhanKhau.quoc_tich}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dan_toc" className="flex mb-3">
              Dân Tộc:
            </label>
            <input
              type="text"
              placeholder="Enter Dân Tộc"
              id="dan_toc"
              name="dan_toc"
              value={nhanKhau.dan_toc}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ton_giao" className="flex mb-3">
              Tôn Giáo:
            </label>
            <input
              type="text"
              placeholder="Enter Tôn Giáo"
              id="ton_giao"
              name="ton_giao"
              value={nhanKhau.ton_giao}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cong_viec" className="flex mb-3">
              Công Việc:
            </label>
            <input
              type="text"
              placeholder="Enter Công Việc"
              id="cong_viec"
              name="cong_viec"
              value={nhanKhau.cong_viec}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nguyen_quan" className="flex mb-3">
              Nguyên Quán:
            </label>
            <input
              type="text"
              placeholder="Enter Nguyên Quán"
              id="nguyen_quan"
              name="nguyen_quan"
              value={nhanKhau.nguyen_quan}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dia_chi_thuong_tru" className="flex mb-3">
              Địa Chỉ Thường Trú:
            </label>
            <input
              type="text"
              placeholder="Enter Địa Chỉ Thường Trú"
              id="dia_chi_thuong_tru"
              name="dia_chi_thuong_tru"
              value={nhanKhau.dia_chi_thuong_tru}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dia_chi_tam_tru" className="flex mb-3">
              Địa Chỉ Tạm Trú:
            </label>
            <input
              type="text"
              placeholder="Enter Địa Chỉ Tạm Trú"
              id="dia_chi_tam_tru"
              name="dia_chi_tam_tru"
              value={nhanKhau.dia_chi_tam_tru}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cccd" className="flex mb-3">
              Căn Cước Công Dân:
            </label>
            <input
              type="text"
              placeholder="Enter CCCD"
              id="cccd"
              name="cccd"
              value={nhanKhau.cccd}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ngay_cap" className="flex mb-3">
              Ngày Cấp:
            </label>
            <input
              type="text"
              placeholder="Enter Ngày Cấp"
              id="ngay_cap"
              name="ngay_cap"
              value={nhanKhau.ngay_cap}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="noi_cap" className="flex mb-3">
              Nơi Cấp:
            </label>
            <input
              type="text"
              placeholder="Enter Nơi Cấp"
              id="noi_cap"
              name="noi_cap"
              value={nhanKhau.noi_cap}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center px-4 py-2 mx-auto mt-10 text-white bg-blue-500 rounded w-52 hover:bg-blue-600"
          >
            Update Nhân Khẩu
          </button>
        </form>
      </div>
    </div>
  )
}
export default UpdatePayRates
