import { useEffect, useRef } from 'react'
import s from './style.module.scss'

interface TrillionViewerProps {
    jewelryId: string
    isMobile?: boolean
}

const TrillionViewer = ({ jewelryId, isMobile }: TrillionViewerProps) => {
    const viewerRef = useRef()

    useEffect( () => {
        createViewer()
    },[jewelryId])

    async function createViewer() {
        //@ts-ignore
        // const viewer = await import('https://unpkg.com/trillion-viewer@0.25.0/build-lib/trillion-viewer.js')
        const trillionViewer = new viewer.TrillionViewerApp()
        trillionViewer.init(viewerRef.current)
        trillionViewer.setServiceActivationKey('Marcelo_Da_Silva.Lazurde.f18fe29e-77fa-463f-be52-581fd6dab681')
        trillionViewer.setJewelryID(jewelryId as string)
        trillionViewer.setCustomLoader('lazurde')
        trillionViewer.refresh()
    }

    return (
            <div className={isMobile ? s.mobile_wrap : s.wrap} ref={viewerRef} />
    );
}

export default TrillionViewer;
