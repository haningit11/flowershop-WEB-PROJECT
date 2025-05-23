//Hanin Idriss 22230309
document.addEventListener('DOMContentLoaded', function() {

  //1FOR SEARCH to appear and dissappear------------------------==-=--=--=---
  document.addEventListener('click', function(event) {
    if (event.target.closest('.nav-search')) {
      document.querySelector('.search-bar').classList.add('search-bar-active');
    }
    else if (event.target.closest('.search-cancel')) {
      document.querySelector('.search-bar').classList.remove('search-bar-active');
    }
  });



  //2menu toggle for phones andtablets ---------------------------===============
  document.addEventListener('click', function(event) {
    if (event.target.closest('.menu-toggle')) {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('menu-active');
    }
  });



  //3add to cart function-------------------------------------------=================
  var cart = [];
  var cartTotal = 0;

  document.addEventListener('click', function(event) {
    // Add item to cart
    if (event.target.closest('.product-cart-btn')) {
      var button = event.target.closest('.product-cart-btn');
      var productBox = button.closest('.product-box');
      var itemName = productBox.querySelector('.product-text-title').textContent;
      var priceText = productBox.querySelector('.pricey').textContent;
      
      var price = parseFloat(priceText); 

      cart.push({ name: itemName, price: price });
      cartTotal = cartTotal + price;
    }

    //to Show the cart
    if (event.target.closest('.nav-cart')) {
      var notification = document.createElement('div');
      notification.className = 'cart-notification';
      if (cart.length == 0) {
        notification.innerHTML = '<p><strong>Cart is empty!</strong></p>';
      } else {
        var itemsHtml = '';
        for (var i = 0; i < cart.length; i++) {
          itemsHtml = itemsHtml + '<div class="cart-item"><span>' + cart[i].name + ' - ' + cart[i].price + '</span><a class="cart-remove-btn" data-index="' + i + '">Remove</a></div>';
        }
        notification.innerHTML = itemsHtml + '<p><strong>Total:</strong> ' + cartTotal + '</p>';
      }
      document.body.appendChild(notification);
      notification.style.display = 'block';
      notification.timeout = setTimeout(function() {
        notification.style.display = 'none';
        notification.remove();
      }, 5000);
    }

    //to remove an item
    if (event.target.closest('.cart-remove-btn')) {
      var button = event.target.closest('.cart-remove-btn');
      var index = button.getAttribute('data-index');
      var price = cart[index].price;
      //removethe item
      var newCart = [];
      for (var i = 0; i < cart.length; i++) {
        if (i != index) {
          newCart.push(cart[i]);
        }
      }
      cart = newCart;
      cartTotal = cartTotal - price;

      //update notification
      var notification = button.closest('.cart-notification');
      notification.innerHTML = '';
      if (cart.length == 0) {
        notification.innerHTML = '<p><strong>Cart is empty!</strong></p>';
      } else {
        var itemsHtml = '';
        for (var i = 0; i < cart.length; i++) {
          itemsHtml = itemsHtml + '<div class="cart-item"><span>' + cart[i].name + ' - ' + cart[i].price + '</span><a class="cart-remove-btn" data-index="' + i + '">Remove</a></div>';
        }
        notification.innerHTML = itemsHtml + '<p><strong>Total:</strong> ' + cartTotal + '</p>';
      }
      //keep notification visible for a specific time 
      clearTimeout(notification.timeout);
      notification.timeout = setTimeout(function() {
        notification.style.display = 'none';
        notification.remove();
      }, 5000);
    }

  });//ADD TO CART CLOSE

});//DOM CLOSE TAG

  