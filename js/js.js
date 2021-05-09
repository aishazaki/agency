/* عندما يتم عمل scroll لل window ( أي المتصفح ) 
scroll اي حدث تحريك الصفحة للاعلىوالاسفل*/
$(window).scroll(function () {
   if ($(this).scrollTop()>=500) {
       $("#navBar").addClass("noTransparent");
   } else {
    $("#navBar").removeClass("noTransparent");
   }
    
});
$(document).ready( function () {
    $("a.scroll").on("click", function (event) {
        var hash = this.hash
        $("html, body").animate({scrollTop: $(hash).offset().top- 150}, 800, function(){}) 
    });
    /*hash:اي القيمة ضمن الخاصيةاتش رف 
    href الذي يحوي المعرف للفقرات بالصفحة 
    so this.hash reads the href attribute of this and gets the part of the url beginning with #
    scrolltop() method sets or returns the vertical scrollbar position for the selected elements
    */
    /* هذه الخاصية في jquery هي offset.().top وهي تأتي بالheight ما فوق عنصر ما أو معرفة موقع العنصر عن طريق طول الصفحة فما فوقه  أو
    بشرح أخر سوف يوضح هذا الكود مكان جزء معين في الصفحة طولياً وسوف يخرج قيمة بال px  */
    /*$(selector).animate({params},speed,callback);
    animate هي خاصية في jquery وتعني (التحريك) هذا الفانكشن سوف يحرك شئ ما في الصفحة .

    selector ما الذي تريد تحريكه 
    params كيف تريد تحريكه 
    speed السرعة التي تريد التحريك بها 
    callback هي function تنشئ إذا كنت تريد إنشاء فعل أو تحريك شئ في الصفحة بعد تحريك الشئ الأول  */
    

    $(".timer").countTo();
    $("#commentForm").validate();

    //عداد تنازلي كلما كتبت حرفاً ينقص من العداد ويخبرني  بالحروف المتبقية 
    $("#ccomment").keyup(function(){
        $("#count").text("الاحرف المتبقية: " + (250 - $(this).val().length));
      });
      //keyup حدث الكتابة
      // JavaScript باستخدام 
      /* document.getElementById('textarea').onkeyup = function () {
        document.getElementById('count').innerHTML = "Characters left: " + (500 - this.value.length);
      }; */
});
