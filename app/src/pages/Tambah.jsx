import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judulDestinasi: '', kategori : 'Wisata Alam', kabupatenKota : '', hargaRp : '', jamBuka : ''}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judulDestinasi.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judulDestinasi: form.judulDestinasi.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Data Destinasi</h1>


      <label htmlFor="judulDestinasi">Judul Destinasi</label>
      <input id="judulDestinasi" name="judulDestinasi" value={form.judulDestinasi} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Wisata Alam</option>
        <option>Wisata Edukasi</option>
        <option>Kuliner</option>
        <option>Wisata Pantai</option>
      </select>

      <label htmlFor="kabupatenKota">Kabupaten Kota</label>
      <input id="kabupatenKota" name="kabupatenKota"  value={form.kabupatenKota} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="hargaRp">Harga Rp</label>
      <input id="hargaRp" name="hargaRp" value={form.hargaRp} onChange={ubah}/>
        {galat && <p role="alert">{galat}</p>}

      <label htmlFor="jamBuka">Jam Buka</label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah}/>
        {galat && <p role="alert">{galat}</p>}   
    

      <button type="submit">Simpan</button>
    </form>
  )
}