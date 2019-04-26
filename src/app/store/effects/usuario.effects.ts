import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import {of} from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, public usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(ofType(usuarioActions.CARGAR_USUARIO))
        .pipe(switchMap(accion => {
            const id = accion['id'];
            return this.usuarioService.getUserById(id)
                .pipe(map(usuario => new usuarioActions.CargarUsuarioSuccess(usuario)),
                catchError(err => of(new usuarioActions.CargarUsuarioFail(err))));
        }));
}
