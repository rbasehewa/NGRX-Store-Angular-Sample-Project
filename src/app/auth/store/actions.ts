import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER, // Action type
  props<{request: RegisterRequestInterface }>()
);