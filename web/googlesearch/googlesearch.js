(function($){
  $(function(){
    $('.gsc-span').bind("DOMSubtreeModified",function(){
      if($('.gsc-span .gsc-search-button input').length>=1){
        setTimeout(function(){
          $('.gsc-span .gsc-search-button input').removeAttr('src');
        },500);
        $('.gsc-span').unbind("DOMSubtreeModified");
      }
    });  
  })
  
})(jQuery);
