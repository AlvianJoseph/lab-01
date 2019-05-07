'use strict';

$(document).ready(function () {
    $(window).on('resize', function() {
        if($('body').width() >= 960){
        $("#a").css({"backgroundColor": "red"});
        }
        else if($('body').width() <= 768) {
            $("#a").css({"backgroundColor": "lightblue"});
        }
    });
  });