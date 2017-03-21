  var count = 0;
     $('#new').click(function(){
         var contents = $(".first").html();
         $(".next").append(contents);
         count = count + 1;
        if (count == 5) {
           $(this).attr("disabled",true);
        }
      });
