<template>
  <div class="modal-conditional">
    <v-card
      class="modal__container d-flex flex-column fill-height justify-center align-center text-white"
    >
      <v-card-text class="subheading">
        <p class="items__title">
          Términos y condiciones para cotizar
        </p>
        <div class="items__condicional">
          <p class="items__p">
            1. Al solicitar una cotización de viaje con Argent Travel, el cliente acepta
            automáticamente todos los términos y condiciones establecidos en este
            documento.
          </p>
          <p class="items__p">
            2. Las cotizaciones de viaje proporcionadas por Argent Travel tienen una
            validez de 5 días a partir de la fecha de emisión. Después de este período, la
            cotización puede estar sujeta a cambios basados en la disponibilidad y tarifas
            actualizadas.
          </p>
          <p class="items__p">
            3. La confirmación de la reserva se realizará una vez que el cliente haya
            aceptado la cotización y haya realizado el pago correspondiente. Argent
            Travelse reserva el derecho de cancelar la reserva si el pago no se recibe
            dentro del plazo especificado.
          </p>
          <p class="items__p">
            4. Las políticas de cancelación y reembolso estarán sujetas a las condiciones
            establecidas por los proveedores de servicios, tales como aerolíneas, hoteles,
            y agencias de viajes. Argent Travel no asume responsabilidad por cambios o
            cancelaciones de servicios por parte de los proveedores.
          </p>
          <p class="items__p">
            5. Cualquier solicitud de modificación en el itinerario después de la
            confirmación de la reserva estará sujeta a disponibilidad y puede conllevar
            cargos adicionales. Argent Travel no se hace responsable de cambios en el
            itinerario realizados por terceros proveedores.
          </p>
          <p class="items__p">
            6. El cliente es responsable de proporcionar información precisa y completa al
            solicitar la cotización. Argent Travel no se hace responsable de problemas
            derivados de información incorrecta proporcionada por el cliente.
          </p>
          <p class="items__p">
            7. Se recomienda encarecidamente que el cliente adquiera un seguro de viaje
            adecuado para cubrir posibles eventualidades, como cancelaciones, pérdida de
            equipaje y gastos médicos.
          </p>
          <p class="items__p">
            8. Argent Travel se reserva el derecho de modificar las tarifas y condiciones
            en cualquier momento, previa notificación al cliente. Los cambios no afectarán
            a las reservas ya confirmadas.
          </p>
          <p class="items__p">
            9. Argent Travel no se hace responsable de pérdidas, daños, lesiones o gastos
            incurridos durante el viaje, a menos que dichos incidentes sean directamente
            atribuibles a la negligencia de la empresa.
          </p>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="button" @click="$emit('acceptTerms')">Acepto condiciones</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

let data = ref({ conditional: false });
let showModal = ref(true);

const agreeWithTerms = () => {
  // Tu lógica aquí
  showModal.value = false;
};
</script>

<style lang="sass">
@import "../../sass/importComponent.scss"
</style>
