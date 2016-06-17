$(document).ready(function(){
	$("#suddenlychristmas-btn").click(function(){
		if($("#suddenlychristmas").on("shown.bs.collapse") == true)
		{
			$("#suddenlychristmas").collapse('hide');
		}
		else
		{
			$(".collapse").collapse("hide");
			$("#suddenlychristmas").collapse("show");
		}
	});

	$("#pilab-btn").click(function(){
		if($("#pilab").on("shown.bs.collapse")== true)
		{
			$("#pilab").collapse('hide');
		}
		else
		{
			$(".collapse").collapse("hide");
			$("#pilab").collapse("show");
		}
	});

	$("#nscs-btn").click(function(){
		if($("#nscs").on("shown.bs.collapse")== true)
		{
			$("#nscs").collapse('hide');
		}
		else
		{
			$(".collapse").collapse("hide");
			$("#nscs").collapse("show");
		}
	});

	$("#gdc-btn").click(function(){
		if($("#gdc").on("shown.bs.collapse")== true)
		{
			$("#gdc").collapse('hide');
		}
		else
		{
			$(".collapse").collapse("hide");
			$("#gdc").collapse("show");
		}
	});
})