$("#myersBriggs").click(function(){
   $(window).scrollTo("#sectionBanner1",700);
 })

$("#HEXACO").click(function(){
   $(window).scrollTo("#sectionBanner2",700);
 })

 $("#enneagram").click(function(){
    $(window).scrollTo("#sectionBanner2",700);
  })


// external js: isotope.pkgd.js

// init Isotope
var $table = $('#myers1, #myers2').isotope({
  layoutMode: 'vertical',
  getSortData: {
    name: '.name',
    number: '.number',
  }
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  $table.isotope({ sortBy: sortValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
