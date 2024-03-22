$(document).ready(function(){
    //헤더-언어 페이지 선택
    $('.language-select').click(function(){
        var languageList = $(this).siblings('.language-list');
        var icon = $(this).find('.language-select-icon');
        if (languageList.is(':visible')) {
            languageList.hide();
            icon.removeClass('rotate180');
        } else {
            $('.language-list').hide();
            $('.language-select-icon').removeClass('rotate180');
            languageList.show();
            icon.addClass('rotate180');
        }


    });

    //설치사례 탭

    $(".case-tab-list").click(function() {
        // 활성화된 탭 클래스 적용
        $(".case-tab-list").removeClass("active");
        $(this).addClass("active");
    
        // 모든 탭 내용 숨기기
        $(".responsive-2").removeClass("visible");
    
        // 클릭한 탭에 해당하는 내용 표시
        var idx = $(this).index();
        $(".responsive-2").eq(idx).addClass("visible");
    });
});//레디 끝