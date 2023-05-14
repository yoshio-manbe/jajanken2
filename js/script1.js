$(function(){
    //地域を選択
    $('.area_btn').click(function(){
        $('.area_overlay').show();
        $('.pref_area').show();
        var area = $(this).data('area');
        $('[data-list]').hide();
        $('[data-list="' + area + '"]').show();
    });
    
    //レイヤーをタップ
    $('.area_overlay').click(function(){
        prefReset();
    });
    
    //都道府県をクリック
    $('.pref_list [data-id]').click(function(){
        var id = $(this).data('id');
        var text = $(this).text();
        console.log(text); 
        $('.A1').html(text);
        })
    
    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref_area').hide();
        $('.area_overlay').hide();
    }
});

function smoothScrollToTop() {
    var div = document.getElementById("japan_map");
    div.style.display = "none";
    var div = document.getElementById("intro");
    div.style.display = "none";
    var div = document.getElementById("location");
    div.style.display = "none";
    var div = document.getElementById("question");
    div.style.display = "none";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
