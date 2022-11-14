const num = document.querySelector("#num");

let times = 10;

setTimeout(() => {
  num.innerHTML = "Timer starting now";
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
  }, 2000);
}, 1000);
