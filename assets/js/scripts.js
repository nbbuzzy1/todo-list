//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//delete text on input
		$(this).val("");
		//create a new li and add ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

//toggle add new todos
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
