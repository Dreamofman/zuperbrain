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
        var input1Values = $("#input1").val()?$("#input1").val():1;
        updateCurrency(sel1Values,input1Values)

    });

     $('#input1').keyup(function(event) {
        var sel1Values = $( "#sel1" ).val()?$( "#sel1" ).val():'EUR';
        var input1Values = $("#input1").val()?$("#input1").val():1;
        updateCurrency(sel1Values,input1Values)

    });

   /*document.getElementById('btnSubmit').addEventListener('click', function() {
         updateCurrency('THB')
    });*/
    if ('serviceWorker' in navigator) 
    {
      navigator.serviceWorker.register('../service-worker.js').then(function() { console.log('Service Worker Registered'); });
    }
    

});



 

//var data2 =$.getJSON("http://api.fixer.io/latest", demo)


function updateCurrency(cur='EUR',value=1)
{       
  $.ajax({
       type: "GET",
       url: "https://api.fixer.io/latest?base="+cur,    
       data: {},
       success: function(result) 
       {
        console.log(result)
        


        x = result.base;
        y = result.date;
        z = result.rates;
        var allRates=''
        var allSels='<option value='+cur+' selected="selected">'+cur+'</option>';
            for (v in z) 
            {
            
              allRates+= '<div class="col-xs-6 col-sm-6 col-md-4">'

              allRates+= '<div class="thumbnail text-center" >'
              allRates+= '<img src="images/icons/flags/'+v+'.png">'
              allRates+= '<div class="caption">'
              allRates+= '<h3>'+v+'</h3>'
              //allRates+= '<p>'+z[v]+'</p>'

              fx.rates = result.rates
              var in1 = cur.toString()
              var out1 = v.toString()
              var rate2 = fx(value).from().to(out1)
              
              allRates+= '<p>'+rate2.toFixed(4)+'</p>'
              //allRates+= '<p>'+exchangCurrency(result,cur,v)+'</p>'
              allRates+= '</div>'
              allRates+= '</div>'
              allRates+= '</div>'


              allSels += '<option value='+v+'>'+v+'</option>'
              
              
            }
        
        var searchCurrency = ''
        searchCurrency+='<div class="col-xs-12 col-sm-12 col-md-12">'
        searchCurrency+='<a href="#" class="thumbnail text-center">'
        searchCurrency+='<img src="images/icons/flags/'+cur+'.png" ><h2>'+ value+' '+cur+'</h2>'
        searchCurrency+='</a> '
        searchCurrency+='</div>'

        $('#searchCurrency').html(searchCurrency);
         $("#input1").val(value)
        $('#sel1').html(allSels)
        $('#date').html('<div class="col-xs-12 col-sm-12 col-md-12"><h2>Latest : '+y+'</h2></div>')
        $('#rates').html(allRates)
        

       },
       error: function(x, e) 
       { 
        console.log(e); 
       }
  });
}

function updateCurrency1(cur='EUR')
{
  $.ajax({
       type: "GET",
       url: "https://api.fixer.io/latest?base="+cur,    
       data: {},
       success: function(result) 
       {
        console.log(result)
        
        x = result.base;
        y = result.date;
        z = result.rates;
        var allRates=''
        var allSels='<option value='+cur+' selected="selected">'+cur+'</option>';
            for (v in z) 
            {
            
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
        

       },
       error: function(x, e) 
       { 
        console.log(e); 
       }
  });
}
