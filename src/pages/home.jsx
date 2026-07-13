import MainWord from '../components/common/mainWord'
import Hero from '../components/layout/hero'
import Types from '../components/layout/types'
import WhyPC from '../components/layout/whyPC'

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