// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/hokhau`
  | `/hokhau/create`
  | `/hokhau/update/:mahokhau`
  | `/login`
  | `/nhankhau`
  | `/nhankhau/create`
  | `/nhankhau/update/:ma_nhan_khau`
  | `/register`

export type Params = {
  '/hokhau/update/:mahokhau': { mahokhau: string }
  '/nhankhau/update/:ma_nhan_khau': { ma_nhan_khau: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
