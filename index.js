function update() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("second");
  let ampm = document.getElementById("AMPM");

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let a = h <= 12 ? "AM" : "PM";

  if (h > 12) {
    h = h - 12;
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
  ampm.textContent = a;
}

setInterval(update, 1000);
