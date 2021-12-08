const Common = (function() {
  
  const pressESC = () => {
    document.addEventListener('keyup', (ev) => {
      if (ev.keyCode === 27) {
      
      }
    });
  };

  const clickBody = () => {
    document.body.addEventListener('click', (ev) => {
      const className = `body`;

      if (!ev.target.closest(className).length) {
      
      }
    });
  };

  const preventBehavior = () => {
    const link = document.querySelectorAll("a");

    link.forEach((val, idx) => {
      val.addEventListener("click", (ev) => {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };
  
  const initLoad = function() {
    pressESC();
    clickBody();
    preventBehavior();
  };
  return {
    initLoad: initLoad
  };
})();

export default Common;
