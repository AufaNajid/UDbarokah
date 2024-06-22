import Hero from './hero/Hero'
import Product from './product/Product'
import Info from "./info/Info"
import Service from './service/Service'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Product />
            <Info />
            <Service />
        </div>
    )
}

export default Homepage