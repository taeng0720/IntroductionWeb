import { useState, useEffect } from "react";

const useTypingEffect = (textArray, typingSpeed = 100, pauseTime = 1500) => {
    const [displayText, setDisplayText] = useState(""); // 화면에 표시될 텍스트
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 타이핑 중인 단어의 인덱스
    const [charIndex, setCharIndex] = useState(0); // 현재 단어에서 타이핑 중인 문자 인덱스
    const [isDeleting, setIsDeleting] = useState(false); // 삭제 중인지 여부
    const [isTextChanging, setIsTextChanging] = useState(false); // 텍스트 변경 여부 (애니메이션 트리거용)

    useEffect(() => {
        if (textArray.length === 0) return; // 텍스트 배열이 비어 있으면 종료

        const currentText = textArray[currentIndex]; // 현재 타이핑할 텍스트
        if (!currentText) return; // currentText가 없으면 종료

        let typingTimeout;

        // 타이핑 중
        if (!isDeleting) {
            typingTimeout = setTimeout(() => {
                if (charIndex < currentText.length) {
                    setDisplayText((prev) => prev + currentText[charIndex]); // 문자 추가
                    setCharIndex((prev) => prev + 1); // 문자 인덱스 증가
                }
            }, typingSpeed);
        }
        // 삭제 중
        else {
            typingTimeout = setTimeout(() => {
                if (displayText.length > 0) {
                    setDisplayText((prev) => prev.slice(0, prev.length - 1)); // 문자 삭제
                    setCharIndex((prev) => prev - 1); // 문자 인덱스 감소
                }
            }, typingSpeed / 2); // 삭제 속도는 타이핑 속도의 절반
        }

        // 타이핑 후 대기 시간
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime); // 타이핑 후 대기 시간
        }

        // 삭제 후 텍스트 변경
        if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setCharIndex(0);
            setIsTextChanging(true); // 텍스트 변경 애니메이션 트리거
            setCurrentIndex((prev) => (prev + 1) % textArray.length); // 다음 단어로 전환
        }

        // 텍스트 변경이 끝났을 때 애니메이션 상태 초기화
        if (!isDeleting && displayText === currentText && isTextChanging) {
            setIsTextChanging(false);
        }

        return () => clearTimeout(typingTimeout); // 타이밍 효과 취소
    }, [charIndex, currentIndex, displayText, isDeleting, isTextChanging, textArray, typingSpeed, pauseTime]);

    return { displayText, isTextChanging }; // 최종 화면에 표시될 타이핑된 텍스트와 텍스트 변경 상태
};

export default useTypingEffect;
