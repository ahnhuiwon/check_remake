export const useScrollTop = () => {

    // 채널톡 오픈 메소드
    const scroll_top = () => {
        window.scrollTo(0,0);
    }

    return { scroll_top }
}