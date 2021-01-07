import Swal from "sweetalert2";

export const swalWithTWButton = Swal.mixin({
    customClass: {
        confirmButton: 'btn-primary mx-1 duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-2xl',
        cancelButton: 'btn-danger mx-1 duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-2xl'
    },
    buttonsStyling: false
})