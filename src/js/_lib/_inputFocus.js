

/**
 * @name initInputFocus
 * @description
 */
const initInputFocus = () => {
	const inputElem = $("[input-js]");

	inputElem.on("focus", (e) => {
		let curElem = $(e.target);

		curElem.closest(".form__field").addClass("is-focus");
	});

	inputElem.on("blur", (e) => {
		let curElem = $(e.target),
			curElemVal = curElem.val().trim();

		if(curElemVal === "") {
			curElem.closest(".form__field").removeClass("is-focus");
		}
	});
};
