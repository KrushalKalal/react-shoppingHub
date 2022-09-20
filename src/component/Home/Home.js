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

import './Home.css'

class Home extends Component{
    render(){
        return(
            <div >
                <MainCarousel/>
                <DiscountCarousel/>
                <HerCarousel/>
                <SummerCollection/>
                <HimCarousel/>
                <CovetedBrand/>
                <WalletCarousel/>
                <ProductCarousel/>
                <EthnicBrand/>
                <PremiumBrand/>
               
            </div>
        )
    }  
}

export default Home