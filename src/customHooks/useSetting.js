export const useScrollTop = () => {

    const scroll_top = () => {
        window.scrollTo(0,0);
    }

    return { scroll_top }
}