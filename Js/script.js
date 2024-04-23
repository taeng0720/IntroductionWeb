        // 해당 섹션으로 스크롤 이동하는 함수
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if(window.matchMedia('(max-width: 450px)').matches){
                const offset = 150;
                window.scrollTo({
                    top:section.offsetTop - offset,
                    behavior: 'smooth'
                })
            }
            else{
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
