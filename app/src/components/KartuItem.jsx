import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori,  kabupatenKota, hargaRp, jamBuka } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        kategori : {kategori} 
      </p>
      <p>
       Kabupaten/Kota : {kabupatenKota}
      </p>
      <p>
        Harga : {hargaRp} 
      </p>
      <p>
        Jam Buka :  {jamBuka}
      </p>
      
    </article>
  )
}