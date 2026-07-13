import MainWord from '../conponents/common/mainWord'
import Hero from '../conponents/layout/hero'
import Types from '../conponents/layout/types'
import WhyPC from '../conponents/layout/whyPC'

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Types/>
            <MainWord name={"Why PC-Shop"}/>
            <WhyPC/>
        </div>
    )
}