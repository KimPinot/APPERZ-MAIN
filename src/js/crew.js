var $navMenu = $(".select")
var $member = $("#crew .crew")
var transitionMs = 500

$navMenu.on('click', function() {
    console.log('테스트')
    // <!-- 메뉴에 active 클래스 추가/제거하는 부분
    $navMenu.each(function() {
        $(this).removeClass('active')
    })

    $(this).addClass('active')
    // 끝 -->
    // <!-- 메뉴 클릭하면 맞는 직종이 보이거나/제거되는 부분
    var searchType = $(this).data('type')

    if (searchType === 'all') {
        $member.children().each(function() {
            $(this).show(transitionMs)
        })

        return
    }

    $member.children().each(function() {
        var that = this,
            memberType = $(this).data('type');

        if (memberType == searchType) {
            if ($(that).css('display') == 'none') {
                $(that).show(transitionMs)
            }
        } else {
            $(that).hide(transitionMs);
        }
    })
    // 끗 -->
})
