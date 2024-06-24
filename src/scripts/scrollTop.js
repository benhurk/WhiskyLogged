import { useEffect } from "react"

export const scrollTop = (currentProduct) => {
    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, [currentProduct]);
}