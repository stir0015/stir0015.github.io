window.onload = init;

function init() {

// to show the form values in the results div which takes the argument "form"
function showformValues(form){
	//serializeArray is a jquery function used to get the values of a form as js Object
	var formValues = $(form).serializeArray(); 
	// $.each is a jquery alternative to for loop to iterate through an JS array or object  (Especially beneficial when the length of array is not known)
	// index is the index  of the current element i.e 0,1,2,3 so on 
		//field is the actual field being accessed 
		
	$.each(formValues, function(index, field){

		// following code does the following : 
		// 1) $("#results") -- (Gets the  selects the div with id results 
		// 2) .fund("#"+field.name+"_result") -- finds the element with id equal to the name of the field being accessed along with text ("_result") Eg : name, pc_result, email_result
		// 3) Modifies the text inside the selected element and replaces it with the value of this field   
		$("#form-display").find("#"+field.name+"_result").text(field.value);

		// special check for email to add a link instead of just string
		if(field.name=="email"){
			$("#form-display").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	})				
