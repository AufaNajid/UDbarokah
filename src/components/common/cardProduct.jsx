import Product from '../../assets/image/product.png'

const Card = ({ title, description }) => {
    return (
        <div className='flex flex-col gap-3 justify-between items-center text-center 2xl:w-96 xl:w-80 lg:w-80 md:w-[500px] xs:w-72 px-4 pt-12 pb-5 rounded-xl card'>
            <img className='xl:w-56 w-36' src={Product} alt="card-image" />
            <h1>{title}</h1>
            <p>{description}</p>
            <button className='px-6 py-2 rounded-full bg-[#FFD700]'>Baca Selengkapnya</button>
        </div>
    )
}

export default Card