async function getMenu() {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    // const response = await fetch('./data.json');
    const menu = await response.json();
    const menuList = document.querySelector('#menu-list');
    menu.forEach(item => {
      const listItem = document.createElement('list');
    //   menuItem.classList.add('menu-item');
      listItem.innerHTML = `
        <p>${item.id}</p>
        <p>${item.name}</p>
        <span>${item.price}</span>
        <div class="item-image">
            <img src="${item.imgSrc}" alt="some image">
        </div>
      `;
      menuList.appendChild(listItem);
    });
  }
  

  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Classic Burger', 'Veggie Burger', 'Spicy Burger'];
        const order = {
          items: burgers.sort(() => 0.5 - Math.random()).slice(0, 3),
          total: 25.99
        };
        resolve(order);
      }, 2500);
    });
  }
  

  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  

  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  

  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  

  async function handleOrder() {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const prepStatus = await orderPrep();
    console.log('Order preparation status:', prepStatus);
    const paymentStatus = await payOrder();
    console.log('Payment status:', paymentStatus);
    thankyouFnc();
  }
  
  window.onload = handleOrder;