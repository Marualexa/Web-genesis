import { defineStore } from "pinia";

export const useCartStore = defineStore("currentItem", {
    state: () => ({
        inforCurrent: {
            nombreApellido: "",
            ciudadOrigen: "",
            ciudadDestino: "",
            tipoViaje: "",
            fechaSalida: "",
            fechaRegreso: "",
            recibirCotizacion: "",
            numeroTelefonico: ""
        }
    }),
    getters: {
        getCurrentPrice: (state) => {
            return state.inforCurrent;
        }
    },
    actions: {
        personInfo(result) {
            this.inforCurrent = result;
        }
    }
})