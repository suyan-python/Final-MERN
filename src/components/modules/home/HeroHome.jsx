import manOnTheChair from '../../../assets/images/ManOnTheChair.svg'
import coinVase from '../../../assets/images/CoinVase.svg';
import bigCircle from '../../../assets/images/bigCircle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter } from '../../../store/modules/count/action';

export const HeroHome = () => {
    const counter = useSelector(state=> state.countReducer.count);
    const dispatch = useDispatch();


    return <section className="hero window-height">
        <div className="text-area  relative z-99 w-full h-full flex column items-center justify-center">
            <div className="title text-2xl">Discover your spending habits</div>
            <div className="sub-title text-primary text-xl">Try our expense tracker </div>
            <div className="btn-area my-lg">
            <h1 className="text-xl">{counter}</h1>
                <button className="btn px-md py-lg primary" onClick={()=> dispatch(increaseCounter())}>Get Started</button>
                <button className="btn px-md py-lg outline">Learn more</button>
            </div>
        </div>
        <div className="image-area absolute top-none left-none h-full w-full flex items-end justify-between">
            <img src={manOnTheChair} alt="" />
            <img src={coinVase} alt="" />
            <div className="h-full w-full absolute flex items-end justify-center">
                <img src={bigCircle} alt="" />
            </div>
        </div>
    </section>
}