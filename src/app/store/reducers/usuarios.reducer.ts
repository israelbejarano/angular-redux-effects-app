import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
    usuarios: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                usuarios: [...action.usuarios]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
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
