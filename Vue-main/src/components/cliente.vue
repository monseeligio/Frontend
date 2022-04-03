<template>
    <div class="container rounded border">
        <div class="row">
            <div class="col-12 my-5">
                <h2>REALIZA TU PEDIDO</h2>
                <form v-on:submit="Agregar">
                    <div class="mb-3">
                        <label class="form-label">Nombre</label>
                        <!-- <input type="text" class="form-control" v-bind:value="name" v-on:change="changeValueName" /> -->
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            v-bind:value="name"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input
                            type="text"
                            class="form-control"
                            id="phone"
                            v-bind:value="phone"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            v-bind:value="email"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Descripción general</label>
                        <div class="form-floating">
                            <input
                                type="text"
                                class="form-control"
                                id="description"
                                placeholder="Leave a comment here"
                                style="height: 100px"
                                v-bind:value="description"
                                autocomplete="off"
                            />
                            <label for="floatingTextarea2">Escribe descripción general para su pastel</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3>Sabores que desea para su pastel:</h3>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Chocolate" />
                                <label class="form-check-label">Chocolate</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Cheescake" />
                                <label class="form-check-label">Cheescake</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Fresa" />
                                <label class="form-check-label">Fresa</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Manzana" />
                                <label class="form-check-label">Manzana</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Vainilla" />
                                <label class="form-check-label">Vainilla</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="RedVelvet" />
                                <label class="form-check-label">Red Velvet</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Oreo" />
                                <label class="form-check-label">Oreo</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Cafe" />
                                <label class="form-check-label">Café</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Coco" />
                                <label class="form-check-label">Coco</label>
                            </div>

                        </div>
                        <div class="col-12 col-md-6">
                            <h3>Adornos que desea para su pastel:</h3>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Zarzamoras"/>
                                <label class="form-check-label">Zarzamoras</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Fondant"/>
                                <label class="form-check-label">Fondant</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Frutas" />
                                <label class="form-check-label">Frutas</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Caramelo" />
                                <label class="form-check-label">Caramelo</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Merengue" />
                                <label class="form-check-label">Merengue</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Mermelada" />
                                <label class="form-check-label">Mermelada</label>
                            </div>

                        </div>
                    </div>
                    <div class="my-5 d-flex justify-content-center">
                        <button type="submit" class="text-black">Enviar</button>
                    </div>
                </form>
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
        const name = computed(() => store.state.form.name);
        const phone = computed(() => store.state.form.phone);
        const email = computed(() => store.state.form.email);
        const description = computed(() => store.state.form.description);
        const Agregar = (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.toLowerCase();
            const phone = document.getElementById('phone').value.toLowerCase();
            const email = document.getElementById('email').value.toLowerCase();
            const description = document.getElementById('description').value.toLowerCase();
            const sabores = [];
            const Chocolate = document.getElementById('Chocolate').checked;
            if (Chocolate === true) {
                sabores.push('Chocolate');
            }
            const Cheescake = document.getElementById('Cheescake').checked;
            if (Cheescake === true) {
                sabores.push('Cheescake');
            }
            const Fresa = document.getElementById('Fresa').checked;
            if (Fresa === true) {
                sabores.push('Fresa');
            }
            const Manzana = document.getElementById('Manzana').checked;
            if (Manzana === true) {
                sabores.push('Manzana');
            }
            const Vainilla = document.getElementById('Vainilla').checked;
            if (Vainilla === true) {
                sabores.push('Vainilla');
            }
            const RedVelvet = document.getElementById('RedVelvet').checked;
            if (RedVelvet === true) {
                sabores.push('RedVelvet');
            }
            const Oreo = document.getElementById('Oreo').checked;
            if (Oreo === true) {
                sabores.push('Oreo');
            }
            const Cafe = document.getElementById('Cafe').checked;
            if (Cafe === true) {
                sabores.push('Cafe');
            }
            const Coco = document.getElementById('Coco').checked;
            if (Coco === true) {
                sabores.push('Coco');
            }
            

            const decorado = [];
            const Zarzamoras = document.getElementById('Zarzamoras').checked;
            if (Zarzamoras === true) {
                decorado.push('Zarzamoras');
            }
            const Fondant = document.getElementById('Fondant').checked;
            if (Fondant === true) {
                decorado.push('Fondant');
            }
            const Frutas = document.getElementById('Frutas').checked;
            if (Frutas === true) {
                decorado.push('Frutas');
            }
            const Caramelo = document.getElementById('Caramelo').checked;
            if (Caramelo === true) {
                decorado.push('Caramelo');
            }
            const Merengue = document.getElementById('Merengue').checked;
            if (Merengue === true) {
                decorado.push('Merengue');
            }
            const Mermelada = document.getElementById('Mermelada').checked;
            if (Mermelada === true) {
                decorado.push('Mermelada');
            }
            if (sabores.length > 0 && decorado.length > 0) {
                store.commit('ADDPEDIDO', {
                    name: name,
                    phone: phone,
                    email: email,
                    description: description,
                    flavours: sabores,
                    ornaments: decorado
                });
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('description').value = '';
                document.getElementById('Chocolate').checked = false;
                document.getElementById('Cheescake').checked = false;
                document.getElementById('Fresa').checked = false;
                document.getElementById('Manzana').checked = false;
                document.getElementById('Vainilla').checked = false;
                document.getElementById('RedVelvet').checked = false;
                document.getElementById('Oreo').checked = false;
                document.getElementById('Cafe').checked = false;
                document.getElementById('Coco').checked = false;

                document.getElementById('Zarzamoras').checked = false;
                document.getElementById('Fondant').checked = false;
                document.getElementById('Frutas').checked = false;
                document.getElementById('Caramelo').checked = false;
                document.getElementById('Merengue').checked = false;
                document.getElementById('Mermelada').checked = false;
                alert(' Gracias por si pedido, se ha agregado a la lista de ordenes');
            } else {
                alert('Debes seleccionar al menos 1 sabor y 1 decoración');
            }
        }
        return {
            name,
            phone,
            email,
            description,
            // changeValueName,
            Agregar
        }
    }
}
</script>