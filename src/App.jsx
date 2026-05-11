import Feature from './components/usestate'
import Counter from './components/counter'
import Nav from './components/navbar'
import Navbar from './components/hoveritems'
import Mob from './components/mobile'
import Product from './components/product'
export default function App(){
  return(
    <>
    <div className='bg-gray-100'>
    {/* <Navbar/> */}
   <Mob/>
   <Product/>
    </div>
    </>
  )
}