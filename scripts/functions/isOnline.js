let state = false;
function isOnline() {
    console.log(state)
  state = !state;
  console.log(state)
  if (state === true) {
    login.src =
      "https://w7.pngwing.com/pngs/36/901/png-transparent-cancel-disconnect-unfollow-user-block-unroll-unsubscribe-pinpoint-interface-i-icon-thumbnail.png";
      carrito.style.display = "none";
      
    } else {
    login.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAzpJREFUaEPtmFuIjVEUx39/PEhSPElMeJkHt8iDB/KINDQu0WiQDJOncckDuZXLg1seeHApIbcUUTxIkjxIaRLlWlJKKKNMlFi+Xd+MM99835y9z3eOaXL24zlr/df/v9bea6/9iT6+1Mf5UxXQ2xWsVqBagZwZqG6hnAnM7f7/VcDMRgAtwFRgYpzCVuAxcEDSx9xpDQAIqoCZrQYOR0QHZ8T4CqyVdCmAQy5TbwFmtgnY7xmtUdI5T9tcZl4CzGws8BLo7xntO1Aj6bOnfclmvgKOAusCo2yTtDvQJ9jcV8A7YFQg+kNJ0wJ9gs19BVgwMnyRNKwEvy4uZjZT0r0sHF8B7cCgQDLtkrK6lReUma0CTgL7JG1Nc/IV8Byo9Yr61+iZpPGBPp3mMflTBf4bJR1K4vkKcI7rA8nszcpaMRwzawTOpNjVSnLdsHP5CqgB3gADigWP//8BjJH0wdO+MPOLAHcR9ivwdWdwpaRuorwEOCAz2wAc9CS0TNJ5T9sk+YuJ+yaTvHP0FhCLaI5FZB3oNqAp2vtXeiJvZjMk3S+0MbOFQJrfcklnc3WhRKCRgKvGlHiY+wk8AR65OUnSpyLk3TjixpIlki7HiZkPXEvxa5B0oSe8oAqEbomkvZltAfYU/D4r3us3EufrF7BY0tViMf+ZADMbBzxNEHKHfWAKyQU+5IPOgJk1ALOBScBoYEgisBul3wLubXArbaQ2sybgeJGs1ktK206pbkUrYGZzgGMx6WIVLfz/NdAs6U7iDK2IsE5nAM2T5LaT9+pRgJntjDroDm+07oa/gc2SurRfM1sKuPdCx3juGsFcSbdDY2UKMLNdwPZQwAz7FklHEpWoB1wXcge2rhTymWfAzOqiNnm9TOQ7YKZLepAQ4eJ8k3S31FjdKmBmboJ8BQwvFTTD7wUwIZqP3HYp20oT4F5e7gVWiRXUYXwIpAm4CbjOU4l1QtKacgKnCXgf9Wr37acSq1XS5HICpwlwXxTSbsdyxG2LutHQcgB1YKQJKOX9681JUtHL0xssbZy26PYKAQi1rbiAUEK9bV/WcvaGmKqA3sh6YcxqBaoVyJmB6hbKmcDc7n2+An8AkWDpMUvsiqoAAAAASUVORK5CYII=";
      
      carrito.style.display = "flex";
    }
  console.log(state);
}
const login = document.querySelector("#loginConnected");
const carrito=document.querySelector("#carrito")
console.log(carrito)
login.addEventListener("click", isOnline);
