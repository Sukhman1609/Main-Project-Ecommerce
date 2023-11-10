import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Electronics from './Electronics'
import Iphone from './Iphone'
import Mobiles from './Mobiles'
import Watches from './Watches'
import LinkCompo from './LinkComp'
import ContextAPI from './ContextAPI'
import Mi from './SubRoutes/Mobile/Mi'
import Samsung from './SubRoutes/Mobile/Samsung'
import Vivo from './SubRoutes/Mobile/Vivo'
import Realme from './SubRoutes/Mobile/Realme'
import Poco from './SubRoutes/Mobile/Poco'
import Login from './login/Login'
import Register from './login/Register'
import Detail from './Details'

import CartPage from './Cart/cartPage'
import Iphone15 from './SubRoutes/iphone/iphone15'
import Iphone14 from './SubRoutes/iphone/iphone14'
import Iphone13 from './SubRoutes/iphone/iphone13'
import Iphone12 from './SubRoutes/iphone/iphone12'
import Macbook from './SubRoutes/iphone/macbook'
import StoreMobile from './SubRoutes/Store/Mobile1'
import StoreIphone from './SubRoutes/Store/Iphone1'
import Laptops from './SubRoutes/Electronics/laptops'
import Kitchen from './SubRoutes/Electronics/kitchen'
import Acs from './SubRoutes/Electronics/ac'
import Tv from './SubRoutes/Electronics/tv'
import Apple from './SubRoutes/Watches/apple'
import Titan from './SubRoutes/Watches/titan'
import Casio from './SubRoutes/Watches/casio'
import Samsung1 from './SubRoutes/Watches/samsung'
import StoreWatches from './SubRoutes/Store/watches1'
import StoreElectronics from './SubRoutes/Store/electronics1'
import SearchComponent from '../searc'
import SearchResults from '../SearchResults'
const RouteComp = () => {
  return (
    <div>
      <BrowserRouter>
      
      <ContextAPI>  
      <Routes>
      <Route path="/search-results/:id" element={<SearchResults/>} />
      <Route path="/search" element={<SearchComponent/>} />
        <Route path='/' element={<><LinkCompo/><Home/></>}/>
        
        <Route path='/store' element={<><LinkCompo/><Store/></>}/>
        <Route path='/electronics' element={<><LinkCompo/><Electronics/></>}/>
        <Route path='/iphone' element={<><LinkCompo/><Iphone/></>}/>
        <Route path='/mobiles' element={<><LinkCompo/><Mobiles/></>}/>
        <Route path='/watches' element={<><LinkCompo/><Watches/></>}/>
        <Route path='/detail/:id' element={<><Detail/></>}/>
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> 
          

        {/* SubRoutes of Mobiles */}
        <Route path='/mobiles/subMi' element={<><LinkCompo/><Mi/></>}/>
        <Route path='/mobiles/subSamsung' element={<><LinkCompo/><Samsung/></>}/>
        <Route path='/mobiles/subVivo' element={<><LinkCompo/><Vivo/></>}/>
        <Route path='/mobiles/subRealme' element={<><LinkCompo/><Realme/></>}/>
        <Route path='/mobiles/subPoco' element={<><LinkCompo/><Poco/></>}/>
        <Route path='/mobiles/subPoco' element={<><LinkCompo/><Poco/></>}/>

        <Route path='/iphone/iphone15' element={<><LinkCompo/><Iphone15/></>}/>
        <Route path='/iphone/iphone14' element={<><LinkCompo/><Iphone14/></>}/>
        <Route path='/iphone/iphone13' element={<><LinkCompo/><Iphone13/></>}/>
        <Route path='/iphone/iphone12' element={<><LinkCompo/><Iphone12/></>}/>
        <Route path='/iphone/macbooks' element={<><LinkCompo/><Macbook/></>}/>

        <Route path='/store/mobiles' element={<><LinkCompo/><StoreMobile/></>}/>
        <Route path='/store/iphones' element={<><LinkCompo/><StoreIphone/></>}/>
        <Route path='/store/watches' element={<><LinkCompo/><StoreWatches/></>}/>
        <Route path='/store/electronics' element={<><LinkCompo/><StoreElectronics/></>}/>

        <Route path='/electronics/laptops' element={<><LinkCompo/><Laptops/></>}/>
        <Route path='/electronics/kitchen' element={<><LinkCompo/><Kitchen/></>}/>
        <Route path='/electronics/acs' element={<><LinkCompo/><Acs/></>}/>
        <Route path='/electronics/tv' element={<><LinkCompo/><Tv/></>}/>

        <Route path='/watches/apple' element={<><LinkCompo/><Apple/></>}/>
        <Route path='/watches/titan' element={<><LinkCompo/><Titan/></>}/>
        <Route path='/watches/casio' element={<><LinkCompo/><Casio/></>}/>
        <Route path='/watches/samsung' element={<><LinkCompo/><Samsung1/></>}/>
        

      </Routes>
      </ContextAPI>
     
      </BrowserRouter>
    </div>
  )
}

export default RouteComp
