<template>
    <div class="container rounded border border-light my-5">
        <div class="row">
            
            <div class="col-12 my-5">
                <h2 class="text-center">RECURSOS RESTANTES</h2>
            </div>
            <div class="col-12">
                <div class="row">
                    <!--?sabores-->
                    <div class="col-12 col-md-6 text-center">
                        <h3>Sabores restantes:</h3>
                        <p>
                            Chocolate:
                            <b>20</b>
                        </p>
                        <p>
                            Cheescake:
                            <b>9</b>
                        </p>
                        <p>
                            Fresa:
                            <b>14</b>
                        </p>
                        <p>
                            Manzana:
                            <b>14</b>
                        </p>
                        <p>
                            Vainilla:
                            <b>26</b>
                        </p>
                        <p>
                            Red Velvet:
                            <b>10</b>
                        </p>
                        <p>
                            Oreo:
                            <b>20</b>
                        </p>
                        <p>
                            Café:
                            <b>14</b>
                        </p>
                        <p>
                            Coco:
                            <b>11</b>
                        </p>
                    </div>
                    <!--?Adornos-->
                    <div class="col-12 col-md-6 text-center">
                        <h3>Adornos restantes:</h3>
                        <p>
                            Zarzamoras
                            <b>59</b>
                        </p>
                        <p>
                            Fondant
                            <b>20</b>
                        </p>
                        <p>
                            Frutas
                            <b>87</b>
                        </p>
                        <p>
                            Caramelo
                            <b>10</b>
                        </p>
                        <p>
                            Merengue
                            <b>10</b>
                        </p>
                        <p>
                            Mermelada
                            <b>10</b>
                        </p>
                    </div>
                </div>
            </div>

            
            <div class="col-12">
                <div class="accordion" id="accordionBaker" v-for="pedido in pedidos" v-bind:key="pedido.id">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                v-bind:data-bs-target="pedido.toggle">Pedido {{ pedido.name }}</button>
                        </h2>
                        <div v-bind:id="pedido.id" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionBaker">
                            <div class="accordion-body">
                                <p>
                                    <b>Nombre:</b> {{ pedido.name }}
                                    <br>
                                    <b>Teléfono:</b> {{ pedido.phone }}
                                    <br>
                                    <b>Correo:</b> {{ pedido.email }}
                                    <br>
                                    <b>Descripción:</b> {{ pedido.description }}
                                    <br>
                                    <b>Sabores:</b>
                                <ul v-for="flavour in pedido.flavours" v-bind:key="flavour">
                                    <li>{{ flavour }}</li>
                                </ul>
                                <b>Adornos:</b>
                                <ul v-for="ornament in pedido.ornaments" v-bind:key="ornament">
                                    <li>{{ ornament }}</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const pedidos = computed(() => store.state.pedidos);
        return {
            pedidos
        }
    }
}
</script>