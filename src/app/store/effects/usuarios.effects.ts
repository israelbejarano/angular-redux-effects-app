import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions) {}

    @Effect({dispatch: false})
    cargarUsuarios$ = this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS))
        .pipe(map(action => {
            console.log(action);
            return action;
        }));
}
