// 해당 섹션으로 스크롤 이동하는 함수
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (window.matchMedia('(max-width: 450px)').matches) {
        const offset = 150;
        window.scrollTo({
            top: section.offsetTop - offset,
            left: 0, // x 좌표를 0으로 설정하여 x 좌표는 변경되지 않도록 함
            behavior: 'smooth'
        });
    } 
    else if (window.matchMedia('(max-width: 1000px)').matches) {
        const offset = 150;
        window.scrollTo({
            top: section.offsetTop - offset,
            left: 0, // x 좌표를 0으로 설정하여 x 좌표는 변경되지 않도록 함
            behavior: 'smooth'
        });
    } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}
