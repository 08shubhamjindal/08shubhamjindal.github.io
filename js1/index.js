$(document).ready(function() {
  
  $(function() {
    $("form").submit(function() { return false;       });
  });
  

  $('#search').keyup(function(e) {
    if (e.keyCode === 13) {
        $('#search-this').click();
    }
  });
  
  $("#search-this").on('click', function() {
    $('#results').empty() 
    var searchText = $("#search").val();
    console.log(searchText);
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extracts&gsrinfo&exintro&explaintext&exsentences=2&exlimit=max&gsrsearch=' + searchText;
    
    data = $.ajax({ 
      type: "GET",
      url: url,
      dataType: 'jsonp',
      success: function(data){
        console.log(data.query.pages);
        
    
        $("#content").animate({
          'padding-top':'5%'
        }, 500);
        
        $('p').css('margin','10px 0 0 0');
        

        var array = $.map(data.query.pages, function(value, index) {
          return [value];
        });
        
        (array).forEach(function(val,idx,arr) {
          $('#results').append('<a href="https://en.wikipedia.org/?curid='+val.pageid+'" target="_blank" class="rows col-xs-12 well" style="margin-top:100%; display:none"><div class="col-xs-12"><h2>' + val.title + '</h2></div><div class="col-xs-12">' + val.extract + '</div></a>')
        
          $(".rows").show();
          $(".rows").animate({
            'margin-top':'0'
          }, 500);
          
        })
        
        
        
      }
    })
    
    
    
    
  });
  
})
