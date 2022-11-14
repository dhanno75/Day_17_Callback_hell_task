const num = document.querySelector("#num");

let times = 10;

num.innerHTML = times--;
setTimeout(() => {
  num.innerHTML = times--;
  setTimeout(() => {
    num.innerHTML = times--;
    setTimeout(() => {
      num.innerHTML = times--;
      setTimeout(() => {
        num.innerHTML = times--;
        setTimeout(() => {
          num.innerHTML = times--;
          setTimeout(() => {
            num.innerHTML = times--;
            setTimeout(() => {
              num.innerHTML = times--;
              setTimeout(() => {
                num.innerHTML = times--;
                setTimeout(() => {
                  num.innerHTML = times--;
                  setTimeout(() => {
                    num.innerHTML = "Happy Independence day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
