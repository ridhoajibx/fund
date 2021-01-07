import Swal from "sweetalert2";

export const swalWithTWButton = Swal.mixin({
    customClass: {
        confirmButton: 'btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black',
        cancelButton: 'btn-danger duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black'
    },
    buttonsStyling: false
})