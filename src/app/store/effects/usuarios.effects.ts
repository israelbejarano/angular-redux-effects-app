import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, public usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS))
        .pipe(switchMap(() => {
            return this.usuarioService.getUsers()
                .pipe(map(usuarios => new usuariosActions.CargarUsuariosSuccess(usuarios)));
        }));
}
