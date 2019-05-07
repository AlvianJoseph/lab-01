'use strict';



$(document).ready(function () {
    const changeColor = () => {
        if($('body').width() >= 960)
        $("#a").css({"backgroundColor": "red"});
    }
    changeColor();
  });