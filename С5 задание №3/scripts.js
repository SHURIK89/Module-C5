const url = (num) => `https://picsum.photos/v2/list/?limit=${num}`;
const result_node = document.querySelector(".result");
const btn_node = document.querySelector(".j-btn-request");
const num_field_node = document.querySelector(".input_field");

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  console.log(url);
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function () {
    console.log("OnError, status is: ", xhr.status);
  };

  xhr.send();
}

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
            <p>${item.author}</p>
        </div>
        `;
    cards = cards + cardBlock;
  });

  result_node.innerHTML = cards;
}

btn_node.addEventListener("click", () => {
  num = Number(num_field_node.value);
  if (num > 0 && num <= 10) {
    useRequest(url(num), displayResult);
  } else {
    console.log(`${num} число вне диапазона от 1 до 10`);
  }
});
