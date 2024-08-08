import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import s from './style.module.scss'

const ARWidget = () => {
    const widgetRef = useRef()

    const router = useRouter()
    const { query } = router
    const { jewelryId } = query

    useEffect( () => {
        createWidget()
    }, [jewelryId])

    async function createWidget() {
        //@ts-ignore
        // const widget = await import('https://unpkg.com/trillion-widget@0.25.0/build-lib/trillion-widget.js')
        const trillionWidget = new widget.TrillionWidgetApp()
        trillionWidget.init(widgetRef.current)
        trillionWidget.setServiceActivationKey('Marcelo_Da_Silva.Lazurde.f18fe29e-77fa-463f-be52-581fd6dab681')
        trillionWidget.setJewelryID(jewelryId)
        trillionWidget.setCustomLoader('lazurde')
        trillionWidget.refresh()
    }

    return (
        <div>
            <div className={s.wrap} ref={widgetRef} />
        </div>
    );
}

export default ARWidget;
