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
    $('.pref_list [data-id]').one("click", function(){
        var id = $(this).data('id');
        var text = $(this).text();
        console.log(text); 
        $('#A1').text(text);
        $('.A1').hide(); // .A1を非表示にする
        $('#A1').show(); // #A1を表示する
        
        if($(this).data('id')){
            var id = $(this).data('id');
            if(id >= 1 && id <= 7){
                $("#location_result").text("寒い国の")
            } else if(id >= 8 && id <= 14){
                $("#location_result").text("関東の")
            } else if(id >= 15 && id <= 23){
                $("#location_result").text("日本の真ん中の")
            } else if(id >= 24 && id <= 30){
                $("#location_result").text("関西の")
            } else if(id >= 31 && id <= 35){
                $("#location_result").text("中国の")
            } else if(id >= 36 && id <= 39){
                $("#location_result").text("四国の") 
            } else if(id >= 40 && id <= 46){
                $("#location_result").text("九州の")
            } else if(id === 47){
                $("#location_result").text("琉球の")
            } 
        }
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
    $('.result').show();
    $('.choice').show();

    var checks = document.getElementsByClassName('checks');
            var str = '';

            for ( i = 0; i < 5; i++) {
                if ( checks[i].checked === true ) {
                    str += checks[i].value + " ";
                } 
            }
            $("#check_result").html(str);

    // 年齢のvalue取得
    var obj = document.getElementById("age");
    var idx = obj.selectedIndex;       //インデックス番号を取得
    var val = obj.options[idx].value;  //value値を取得
            
        $("#age_result").html(val)
    
    // 性別のvalue取得
    var obj = document.getElementById("gender");
    var idx = obj.selectedIndex;       //インデックス番号を取得
    var val = obj.options[idx].value;  //value値を取得
        
        $("#gender_result").html(val)
}

$(".reload").click(function(){
    location.reload();
})

$(".pref_list [data-id]").click(function(){
    var id = $(this).data("id");
    console.log(id)

    $(".start").click(function(){
        var checkboxes = $('input[type="checkbox"]');
        var checkedCount = 0;

        checkboxes.each(function() {
            if ($(this).is(':checked')) {
            checkedCount++;
            }
        });
        console.log(checkedCount);

        var sum = id +checkedCount
        console.log(sum)

        if(sum % 2 === 0){
            console.log("偶数")
            window.location.href = "index.a.html"
        } else if(sum % 3 === 0 && sum % 2 !== 0){
            console.log("奇数")
            window.location.href = "index.d.html"
        } else{
            console.log("それ以外")
            window.location.href = "index.m.html"
        }
    })

    
})