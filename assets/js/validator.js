/*$(document).ready(() =>{
	let validator = $('#contactForm').bootstrapValidator({
		fields : {
			email : {

			}
		}
	})
})*/
$(document).ready(function() {
 $("input, textarea").not("[type=submit]").jqBootstrapValidation(); 
});