$(document).ready(function() {
   
    updateCurrency()
    $('#btnSubmit').click(function( event ) 
    {
        var sel1Values = $( "#sel1" ).val();

          updateCurrency(sel1Values)
       
    });
    /*$('#sel1').change(function(event) {
        var sel1Values = $( "#sel1" ).val();
        updateCurrency(sel1Values)

        

    });*/
   /*document.getElementById('btnSubmit').addEventListener('click', function() {
         updateCurrency('THB')
    });*/
});

function updateCurrency(cur='EUR')
{
  $.ajax({
       type: "GET",
       url: "http://api.fixer.io/latest?base="+cur,
       data: {},
       success: function(result) 
       {
        console.log(result)
        //$('pre').text(JSON.stringify(result, 0, 2));
        x = result.base;
        y = result.date;
        z = result.rates;
        var allRates=''
        var allSels='';
            for (v in z) 
            {
              allRates+= '<div class="col-xs-6 col-sm-4">'+v+':'+z[v]+'</div>'
              if(v===cur){
                  allSels += '<option value='+v+' selected="selected">'+v+'</option>'
              }else{
                  allSels += '<option value='+v+'>'+v+'</option>'
              }
              
            }
        //$('#base').html('<div class="col-xs-12 col-sm-12 col-md-12">'+x+'</div>')
        $('#sel1').html(allSels)
        $('#date').html('<div class="col-xs-12 col-sm-12 col-md-12"><h1>'+y+'</h1></div>')
        $('#rates').html(allRates)
        //$('pre').text(allRates);

       },
       error: function(x, e) 
       { 
        console.log(e); 
       }
  });
}