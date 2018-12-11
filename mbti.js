$("#myersBriggs").click(function(){
   $(window).scrollTo("#sectionBanner1",700);
 })

$("#HEXACO").click(function(){
   $(window).scrollTo("#sectionBanner2",700);
 })

$("#enneagram").click(function(){
    $(window).scrollTo("#sectionBanner3",700);
  })

  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#scrollToTop').fadeIn();
      } else {
          $('#scrollToTop').fadeOut();
      }
  });
  $(document).ready(function() {
      $("#scrollToTop").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });

  });
   /*Scroll to top when arrow up clicked END*/

// MYERS BRIGGS ISOTOPE

var $table = $('#myers1, #myers2').isotope({
  itemSelector: '.element-item',
  layoutMode: 'vertical',
  getSortData: {
    name: '.name',
    number: '.number',
    category: '[data-category]',
    color: '[data-color]'
  }
});

// bind filter button click
$('#filters button').click(function() {
  var filterValue = $(this).attr('data-filter')
  console.log(filterValue)
  // use filterFn if matches value
  $table.isotope({filter: filterValue});
});

//sorting

$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-value');
  $table.isotope({filter:'*'});
  $table.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// HEXACO ISOTOPE *****

var $table2 = $('#hexaco1, #hexaco2').isotope({
  itemSelector: '.element-item',
  layoutMode: 'vertical',
  getSortData: {
    name: '.name',
    number: '.number',
    category: '[data-category]',
    color: '[data-color]'
  }
});

// bind filter button click
$('#filters2 button').click(function() {
  var filterValue = $(this).attr('data-filter')
  console.log(filterValue)
  // use filterFn if matches value
  $table2.isotope({filter: filterValue});
});

//sorting

$('#sorts2').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-value');
  $table2.isotope({filter:'*'});
  $table2.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group2').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// ENNEAGRAM ISOTOPE *****

var $table3 = $('#enneagram1, #enneagram2').isotope({
  itemSelector: '.element-item',
  layoutMode: 'vertical',
  getSortData: {
    name: '.name',
    number: '.number',
    category: '[data-category]',
    color: '[data-color]'
  }
});

// bind filter button click
$('#filters3 button').click(function() {
  var filterValue = $(this).attr('data-filter')
  console.log(filterValue)
  // use filterFn if matches value
  $table3.isotope({filter: filterValue});
});

//sorting

$('#sorts3').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-value');
  $table3.isotope({filter:'*'});
  $table3.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group3').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
