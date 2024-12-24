import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        let isScrolling = false;

        const scrollToSection = (direction) => {
            if (isScrolling) return; // 이미 스크롤 중일 때 이벤트 무시
            isScrolling = true;

            // 모든 섹션의 위치를 가져옴
            const sections = document.querySelectorAll("section");
            const positions = Array.from(sections).map((section) => section.offsetTop);

            // 현재 스크롤 위치
            const currentScroll = window.scrollY;

            // 다음 섹션의 인덱스 계산
            let targetIndex = positions.findIndex((pos) => pos > currentScroll);

            // 현재 섹션에서 방향에 따라 이동
            if (direction > 0) {
                // 아래로 스크롤
                targetIndex = targetIndex === -1 ? positions.length - 1 : targetIndex;
            } else {
                // 위로 스크롤
                targetIndex = targetIndex > 0 ? targetIndex - 1 : 0;
            }

            const targetPosition = positions[targetIndex];

            const start = currentScroll;
            const duration = 1000; // 스크롤 지속 시간
            let startTime = null;

            const animateScroll = (time) => {
                if (!startTime) startTime = time;
                const progress = Math.min((time - startTime) / duration, 1); // 0 ~ 1 진행률
                const easeOutQuad = progress * (2 - progress);

                window.scrollTo(0, start + (targetPosition - start) * easeOutQuad);

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                } else {
                    isScrolling = false; // 스크롤 완료
                }
            };

            requestAnimationFrame(animateScroll);
        };

        const handleWheel = (event) => {
            const direction = event.deltaY > 0 ? 1 : -1; // 스크롤 방향 감지
            scrollToSection(direction);
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
};

export default useSmoothScroll;
