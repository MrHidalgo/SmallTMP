/**
 * @description Document DOM ready.
 */
(function () {
	/**
	 * =============================================
	 * CALLBACK
	 * =============================================
	 */


	/**
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initWebFontLoader();
		initPreventBehavior();
		initSvg4everybody();
		// lib
		initCustomSelect();
		// callback
	};
	initNative();
})();
