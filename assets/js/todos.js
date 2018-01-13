// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add a new to-do when the enter key is hit 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// extract the value from input element
		var todoText = $(this).val();
		// clear the input
		$(this).val("");
		// create new li with the text equal to that value
		// and add it to the list
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});