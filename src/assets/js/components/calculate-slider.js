$(document).ready(function(){

  var sliders = $(".slider");

  sliders.each(function(){
    var value = parseInt($(this).text(), 1),
      availableTotal = 100;
    $(this).empty().slider({
      value: 0,
      min: 0,
      max: 100,
      range: "min",
      step: 1,
      animate: 100,
      slide: function(event, ui) {
        $(this).closest('div.ingridient-container')
          .children('div.result-container')
          .children('h3.slider-result').html(ui.value + "%");

        var total = 0;

        sliders.not(this).each(function() {
          total += $(this).slider("option", "value");

          if(total >= availableTotal) {
            var storage = $('#slider_4').slider("option", "value");
            if (storage > 0) {
              max = total - storage;
            }
          }
        });


        // Update each slider
        sliders.not(this).each(function() {
          var t = $(this),
            value = t.slider("option", "value");

          t.slider("option", "max", max)
            .siblings().text(value + '/' + (max + value));
          t.slider('value', value);
        });
      }
    });
  });
});