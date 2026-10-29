import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judulDestinasi, kategori, kabupatenKota, hargaRp, jamBuka   } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judulDestinasi}</Link>
      </h3>
      <p>
        kategori : {kategori} 
      </p>
      <p>
       Kabuten/Kota : {kabupatenKota}
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