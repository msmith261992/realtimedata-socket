// Redux toolkit
import { createReducer, createAction } from '@reduxjs/toolkit';
// Types
import { Device } from '../../types/device';
import { Movement } from '../../types/movement';

/**
 * Type declarations
 */

export interface StateProps {
  device: Device | null;
  loading: boolean;
}

/**
 * Initial State
 */

export const initialState: StateProps = {
  device: null,
  loading: false,
};

/**
 * Function calls
 */

export const addDevice = createAction(
  'devices/add-device',
  (device: Device) => ({
    payload: device,
  }),
);

export const modifyTemp = createAction(
  'device/edit-device-temp',
  (value: number) => ({
    payload: value,
  }),
);

export const modifyMovement = createAction(
  'device/edit-device-movement',
  (value: Movement) => ({
    payload: value,
  }),
);

export const modifyStatus = createAction(
  'device/edit-device-status',
  (value: 'Online' | 'Offline') => ({
    payload: value,
  }),
);

/**
 * Reducer
 */

export const reducer = createReducer<StateProps>(initialState, builder => {
  builder
    .addCase(addDevice, (state, action) => ({
      ...state,
      device: action.payload,
    }))
    .addCase(modifyTemp, (state, action) => {
      if(state.device) {
        state.device = {
          ...state.device,
         temperature : action.payload,
        };
      }
    })
    .addCase(modifyMovement, (state, action) => {
      if(state.device) {
        state.device = {
          ...state.device,
         movement: action.payload,
        };
      }
    })
    .addCase(modifyStatus, (state, action) => {
      if(state.device) {
        state.device = {
          ...state.device,
         status: action.payload,
        };
      }
    });
});
