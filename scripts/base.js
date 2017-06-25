$(document).ready(function() {
   
    updateCurrency()
    /*/
    $('#btnSubmit').click(function( event ) 
    {
        var sel1Values = $( "#sel1" ).val();

          updateCurrency(sel1Values)
       
    });*/
    $('#sel1').change(function(event) {
        var sel1Values = $( "#sel1" ).val();
        updateCurrency(sel1Values)

    });
   /*document.getElementById('btnSubmit').addEventListener('click', function() {
         updateCurrency('THB')
    });*/
    if ('serviceWorker' in navigator) 
    {
      navigator.serviceWorker.register('../service-worker.js').then(function() { console.log('Service Worker Registered'); });
    }

});

function updateCurrency(cur='EUR')
{
  $.ajax({
       type: "GET",
       url: "https://api.fixer.io/latest?base="+cur,    
       data: {},
       success: function(result) 
       {
        console.log(result)
        //$('pre').text(JSON.stringify(result, 0, 2));
        x = result.base;
        y = result.date;
        z = result.rates;
        var allRates=''
        var allSels='<option value='+cur+' selected="selected">'+cur+'</option>';
            for (v in z) 
            {
              //allRates+= '<div class="col-xs-6 col-sm-4">'+v+':'+z[v]+'</div>'
              allRates+= '<div class="col-xs-6 col-sm-6 col-md-4">'

              allRates+= '<div class="thumbnail text-center" >'
              allRates+= '<img src="images/icons/flags/'+v+'.png">'
              allRates+= '<div class="caption">'
              allRates+= '<h3>'+v+'</h3>'
              allRates+= '<p>'+z[v]+'</p>'
              allRates+= '</div>'
              allRates+= '</div>'
              allRates+= '</div>'


              allSels += '<option value='+v+'>'+v+'</option>'
              
              
            }
        //$('#base').html('<div class="col-xs-12 col-sm-12 col-md-12">'+x+'</div>')
        var searchCurrency = ''
        searchCurrency+='<div class="col-xs-12 col-sm-12 col-md-12">'
        searchCurrency+='<a href="#" class="thumbnail text-center">'
        searchCurrency+='<img src="images/icons/flags/'+cur+'.png" ><h2>1 '+cur+'</h2>'
        searchCurrency+='</a> '
        searchCurrency+='</div>'

        $('#searchCurrency').html(searchCurrency);
        $('#sel1').html(allSels)
        $('#date').html('<div class="col-xs-12 col-sm-12 col-md-12">'+y+'</div>')
        $('#rates').html(allRates)
        //$('pre').text(allRates);

       },
       error: function(x, e) 
       { 
        console.log(e); 
       }
  });
}
