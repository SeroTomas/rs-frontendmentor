import { useEffect, useState } from "react";

const useDevice = () => {

    enum Images {
        mobile = "../../../public/image-product-mobile.jpg",
        desktop = "../../../public/image-product-desktop.jpg"
    }

    const [device, setDevice] = useState('')

    const handleWindowWidth = () => {
        const actualWidth = window.innerWidth;
        if (actualWidth < 1440) {
            setDevice(Images.mobile)
        } else setDevice(Images.desktop)
    }

    const firstDevice = () => {
        const firstWidth = window.innerWidth;
        if (firstWidth < 1440) {
            setDevice(Images.mobile)
        } else setDevice(Images.desktop)
    }

    useEffect(() => {
        
        firstDevice()

        window.addEventListener('resize', handleWindowWidth);

        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }

    }, [])

    return device
}

export default useDevice;