const url_template = (p, l) => `https://picsum.photos/v2/list?page=${p}&limit=${l}`
const result_node = document.querySelector('.j-result');
const btn_node = document.querySelector('.j-btn-request');
const page_node = document.querySelector('.input-page');
const limit_node = document.querySelector('.input-limit');

let page_setting = localStorage.getItem('Page_setting');
let limit_setting = localStorage.getItem('Limit_setting');

page_node.value = Number(page_setting)
limit_node.value = Number(limit_setting)
runRequest(Number(page_setting), Number(limit_setting))

function useRequest(p,l) {
    return fetch(url_template(p, l))
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      localStorage.setItem('Page_setting', p);
      localStorage.setItem('Limit_setting', l);
      displayResult(json)

    })
    .catch(() => { console.log('fetch error') });
};

function displayResult(data) {

  let cards = '';

  data.forEach(item => {
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
};

function runRequest(page, limit){
    if((page < 1 || page > 10) && (limit < 1 || limit > 10))
    {
      console.log("Номер страницы и лимит вне диапазона от 1 до 10")  
    } else if(page < 1 || page > 10)
    {
      console.log("Номер страницы вне диапазона от 1 до 10")  
    } else if(limit < 1 || limit > 10)
    {
      console.log("Лимит вне диапазона от 1 до 10")  
    } else{
      let res = useRequest(page, limit);
    }
}

btn_node.addEventListener('click', () => {
    p = Number(page_node.value);
    l = Number(limit_node.value);
          
    runRequest(p, l)
  });
