<template>
  <section class="product-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="product__details__pic">
            <div class="product__details__slider__content">
              <div class="product__detail__pic">
                <img class="product__big__img" :src="productUrl" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product__details__text">
            <h3>{{ productName }}</h3>
            <p>Brand: OFFLINE</p>

            <h2 id="price" style="color: #ca1515">{{ productPrice }}</h2>

            <p>
              Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
              fugit, sed quia consequuntur magni lores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <div class="product__details__widget">
              <ul>
                <li>
                  <span>Available size:</span>
                  <div class="size__btn">
                    <label for="size-xs" class="active">
                      <p id="size-xs" class="size-option" data-value="xs">xs</p>
                    </label>
                    <label for="size-s">
                      <p id="size-s" class="size-option" data-value="s">s</p>
                    </label>
                    <label for="size-m">
                      <p id="size-m" class="size-option" data-value="m">m</p>
                    </label>
                    <label for="size-l">
                      <p id="size-l" class="size-option" data-value="l">l</p>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Promotions:</span>
                  <p>Free shipping</p>
                </li>
              </ul>
            </div>
            <div class="product__details__button">
              <div class="quantity">
                <span>Quantity:</span>
                <div class="pro-qty">
                  <input type="text" value="1" />
                </div>
              </div>
              <a href="#" class="cart-btn" @click="sendDataToNavbar">
                Add to cart</a
              >
              <ul>
                <li>
                  <a href="#"><span class="icon_heart_alt"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon_adjust-horiz"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="product__details__tab">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  >Description</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                  >Specification</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                  >Reviews ( 2 )</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <h6>Description</h6>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut loret fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                  quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret
                  fugit, sed quia ipsu consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                  enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eventBus } from "./eventBus";
export default {
  data() {
    return {
      productName: "",
      productPrice: "",
      productUrl: "",
    };
  },
  methods: {
    sendDataToNavbar() {
      const dataToSend = {
        count: 1,
      };
      eventBus.emit("dataToNavbar", dataToSend);
    },
  },
  created() {
    // Accessing route params
    this.productName = this.$route.params.productName;
    this.productPrice = this.$route.params.productPrice;
    this.productUrl = this.$route.params.productUrl;
  },
};
</script>
<style scoped></style>
