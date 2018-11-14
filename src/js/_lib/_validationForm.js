
const initValidation = () => {

	const validationSubmitHandler = (form) => {
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: (response) => {
				const data = $.parseJSON(response);

				console.log('data.status: ', data.status);

				if (data.status === 'success') {
					// do something
					console.log("success");
				} else {
					console.log("success");
					$(form).find('[data-error]').html(data.message).show();
				}
			}
		});
	};

	const validationHighlight = (element) => {
		$(element).closest('.c-form__field').addClass("is-error");
	};

	const validationUnhighlight = (element) => {
		$(element).closest('.c-form__field').removeClass("is-error");
	};

	$("#formName").validate({
		submitHandler: validationSubmitHandler,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			},
			message: 'required',
			select: 'required',
			radio: 'required',
			checkbox: 'required'
		}
	});
};