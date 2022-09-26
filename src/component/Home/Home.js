import React,{Component} from 'react';
import MainCarousel from './MainCarousel';
import DiscountCarousel from './DiscountCarousel'
import HerCarousel from './HerCarousel';
import HimCarousel from './HimCarousel';
import WalletCarousel from './WalletCarousel';
import ProductCarousel from './ProductCarousel';
import SummerCollection from './SummerCollection';
import CovetedBrand from './CovetedBrand';
import EthnicBrand from './EthnicBrand';
import PremiumBrand from './PremiumBrand';
import Footwear from './Footewear';
import Unmissable from './Unmissable';
import Extraoff from './Extraoff';
import Flatoff from './Flatoff';

import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className='first_page'>
                <MainCarousel/>
                <DiscountCarousel/>
                <Extraoff/>
                <HerCarousel/>
                <SummerCollection/>
                <HimCarousel/>
                <CovetedBrand/>
                <WalletCarousel/>
                <Unmissable/>
                <Flatoff/>
                <ProductCarousel/>
                <EthnicBrand/>
                <PremiumBrand/>
                <Footwear/>
            </div>
        )
    }  
}

export default Home