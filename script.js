
  const targetDate = new Date("2024-05-10T09:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      document.querySelector(".counter__container").textContent =
        "Event Started";
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.querySelector(".timing__box__number").textContent =
        addLeadingZero(days);
      document.querySelector(".timing__box__text").textContent = "Days";

      document.querySelector(
        ".timing__box:nth-child(2) .timing__box__number"
      ).textContent = addLeadingZero(hours);
      document.querySelector(
        ".timing__box:nth-child(2) .timing__box__text"
      ).textContent = "Hours";

      document.querySelector(
        ".timing__box:nth-child(3) .timing__box__number"
      ).textContent = addLeadingZero(minutes);
      document.querySelector(
        ".timing__box:nth-child(3) .timing__box__text"
      ).textContent = "Minutes";

      document.querySelector(
        ".timing__box:nth-child(4) .timing__box__number"
      ).textContent = addLeadingZero(seconds);
      document.querySelector(
        ".timing__box:nth-child(4) .timing__box__text"
      ).textContent = "Seconds";
    }
  };

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();

  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }
