$(document).ready(function() {
   
     updateCurrency()

});

function updateCurrency()
{
  $.ajax({
       type: "GET",
       url: "http://api.fixer.io/latest?base=EUR",
       data: {},
       success: function(result) 
       {
        console.log(result)
        //$('pre').text(JSON.stringify(result, 0, 2));
        x = result.base;
        y = result.date;
        z = result.rates;
        $('#base').html('<div class="col-xs-12 col-sm-12 col-md-12">'+x+'</div>')
        $('#date').html('<div class="col-xs-12 col-sm-12 col-md-12">'+y+'</div>')
            var allRates=''
            for (v in z) 
            {
              allRates+= '<div class="col-xs-6 col-sm-4">'+v+':'+z[v]+'</div>'
              
            }
        $('#rates').html(allRates)
        //$('pre').text(allRates);
       },
       error: function(x, e) 
       { 
        console.log(e); 
       }
  });
}