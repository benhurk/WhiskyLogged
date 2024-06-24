import { useEffect } from "react";

export const setPageTheme = (currentProduct) => {
    const defaultValue = '#005EB8';

    useEffect(() => {
        if (currentProduct) {
            document.querySelector(':root').style.setProperty('--theme-color', currentProduct.themeColor);
        } else {
            document.querySelector(':root').style.setProperty('--theme-color', defaultValue);
        }
    }, [currentProduct]);
}