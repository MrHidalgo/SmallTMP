


const selectReset = (selector) => {
	if (selector === undefined) {
		var selector = 'select';
	}

	$(selector).each(function(){
		var valOption = $(this).children('option:selected');

		if(valOption.val() !== '0') {
			$(this).prev('span').addClass("is-choose");
		}

		$(this).prev('span').html(valOption.text());
	});
};


/**
 * @name initCustomSelect
 * @description
 */
const initCustomSelect = (selector) => {
	if (selector === undefined) {
		var selector = 'select';
	}

	selectReset(selector);

	$(selector).on('change', function () {
		selectReset(this);
	});
};
