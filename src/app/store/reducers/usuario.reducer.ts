import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
    usuario: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    usuario: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioAcciones): UsuarioState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true
            };
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                usuario: {...action.usuario}
            };
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                // se lo que contiene un error porque al principio pintaba el error entero
                // y en el chart de las devtools del redux se ven todos los campos que
                // tiene un error cuando se dispara un error
                // hay mas campos en el objeto error que recibimos
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}
