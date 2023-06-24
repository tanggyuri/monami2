$(function(){
    $("ul > li").hover (
      function(){
        $(this).find(".sub").slideDown(300);
        $(this).children("a").addClass("over");
      },
      function(){
        $(this).find(".sub").slideUp(300);
        $(this).children("a").removeClass("over");
      },
    )
  });