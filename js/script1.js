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
        if($(this).data('id')){
            var id = $(this).data('id');
            if(id >= 1 && id <= 7){
                $(".A1").html("北海道")
                // 要素を取得する
                const element = document.querySelector('.A1');
                // hiddenクラスを削除する
                element.classList.remove('A1');

                // window.location.href = "index2.html";
            } else if(id >= 8 && id <= 14){
                window.location.href = "index3.html"
            } else if(id >= 15 && id <= 23){
                window.location.href = "index4.html"
            } else if(id >= 24 && id <= 30){
                window.location.href = "index2.html"
            } else if(id >= 31 && id <= 39){
                window.location.href = "index3.html"
            } else if(id >= 40 && id <= 47){
                window.location.href = "index4.html"
            } 
            
            
            
            
            
            prefReset();
        }
        
    });
    
    
    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref_area').hide();
        $('.area_overlay').hide();
    }
});
