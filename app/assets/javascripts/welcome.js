$(document).ready(function() 
{
	$('#right_of_buttons').click(
	function()
	{	
		var lv_balance = parseFloat(document.getElementById('text_field_balance').value);
		var lv_trade = parseFloat(document.getElementById('text_field_per_trade').value);
		var lv_loss = parseFloat(document.getElementById('text_field_stop_loss').value);
		var lv_shares = lv_balance/100*lv_trade/lv_loss;
		
		document.getElementById('text_field_shares').value = lv_shares.toFixed(5);
	});

});
