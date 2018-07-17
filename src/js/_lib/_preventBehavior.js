

/**
 * @name initPreventBehavior
 * @description
 */
function initPreventBehavior() {

  const link = document.querySelectorAll("a");

  link.forEach((val, idx) => {

    val.addEventListener("click", (e) => {

      if(val.getAttribute("href") === "#") {
        e.preventDefault();
      }

    });

  });

}