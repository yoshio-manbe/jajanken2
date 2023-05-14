$('<img src="">').prependTo('.imgSample'); //JQuery
    //②
    let png1 = "/images/guu.png";
    let png2 = "/images/choki.png";
    let png3 = "/images/paa.png";

    //③
    let srcAry = [png1,png2,png3];

    //④
    let i = 0;
    setInterval(function() {
        //⑤
        if (i === srcAry.length) {
            i = 0;
        }
        //⑥
        $('.imgSample > img').attr('src', srcAry[i]); //JQuery
        console.log(i++); //⑦
    }, 100);

$(".victory").hide();
$(".aiko").hide();
$(".lose").hide();

$(".aiko-b").click(function(){
    location.reload();
})
    
// jQueryのおまじないを使います
$(".guu").one("click", function () {
    //class="aa" が押されたら動くかどうか
    var random = Math.floor(Math.random() * 5 + 1);
    console.log(random, "ランダムな数字の箱");
    $(".guu-button").css("color","orange")
    $(".tyoki-button").hide()
    $(".paa-button").hide()
    
    if (random === 1) {
        var imgUrl = "/images/choki.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".victory").hide().fadeIn(2000)
    } else if (random === 2) {
        var imgUrl = "/images/paa.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".lose").hide().fadeIn(2000)
    } else if (random >= 3) {
        var imgUrl = "/images/guu.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".aiko").hide().fadeIn(2000)
    }
});

$(".tyoki").one("click", function () {
    //class="aa" が押されたら動くかどうか
    var random = Math.floor(Math.random() * 5 + 1);
    console.log(random, "ランダムな数字の箱");
    $(".tyoki-button").css("color","orange")
    $(".guu-button").hide()
    $(".paa-button").hide()

    if (random === 1) {
        var imgUrl = "/images/choki.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".aiko").hide().fadeIn(2000)
    } else if (random === 2) {
        var imgUrl = "/images/paa.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".victory").hide().fadeIn(2000)
    } else if (random >= 3) {
        var imgUrl = "/images/guu.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".lose").hide().fadeIn(2000)
    }
});

$(".paa").one("click", function () {
    //class="aa" が押されたら動くかどうか
    var random = Math.floor(Math.random() * 5 + 1);
    console.log(random, "ランダムな数字の箱");
    $(".paa-button").css("color","orange")
    $(".tyoki-button").hide()
    $(".guu-button").hide()

    if (random === 1) {
        var imgUrl = "/images/choki.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".lose").hide().fadeIn(2000)
    } else if (random === 2) {
        var imgUrl = "/images/paa.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".aiko").hide().fadeIn(2000)
    } else if (random >= 3) {
        var imgUrl = "/images/guu.png"; // 画像のパス
        var $divBlock = $(".imgSample"); // 画像に変えたい div 要素
        var $img = $("<img>").attr("src", imgUrl); // img 要素を作成し、src 属性を設定する
        $divBlock.replaceWith($img); // div 要素を img 要素に置き換える
        $img.css("margin-left","34%");
        $img.css("margin-top","30px");
        $(".victory").hide().fadeIn(2000)
    }
});