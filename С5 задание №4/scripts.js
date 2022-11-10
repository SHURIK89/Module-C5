const url = (w, h) => `https://picsum.photos/${w}/${h}`
const result_node = document.querySelector('.j-result');
const btn_node = document.querySelector('.j-btn-request');
const w_field = document.querySelector('.w_field');
const h_field = document.querySelector('.h_field');

function useRequest(url) {
    return fetch(url)
    .then((response) => {
     displayResult(response)
    })
    .catch(() => { console.log('fetch error') });
};

function displayResult(data) {

  const card = `
  <div class="card">
      <img
      src="${data.url}"
      class="card-image"
      />
  </div>
  `;

  result_node.innerHTML = card;
};

btn_node.addEventListener('click', () => {
    w = Number(w_field.value);
    h = Number(h_field.value);
    if(w >= 100 && w <=300 && h >= 100 && h <=300)
    {
        const data = useRequest(url(w, h));
        displayResult(data);
    }else{
        console.log("Одно из чисел вне диапазона от 100 до 300")
    }
  });