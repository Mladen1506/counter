let count = 0;

const changeCount = (num) => {
  count += num;
  document.getElementById("count").innerHTML = count;
}