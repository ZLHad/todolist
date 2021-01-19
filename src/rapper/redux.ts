/* md5: a0b3adab28fd5c05b908eedd142cf7a9 */
/* Rap仓库id: 275895 */
/* Rapper版本: 1.1.6-beta.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=275895
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/todo/list': ['GET/todo/list_REQUEST', 'GET/todo/list_SUCCESS', 'GET/todo/list_FAILURE'],

  'DELETE/todo/delete': ['DELETE/todo/delete_REQUEST', 'DELETE/todo/delete_SUCCESS', 'DELETE/todo/delete_FAILURE'],

  'PUT/todo/add': ['PUT/todo/add_REQUEST', 'PUT/todo/add_SUCCESS', 'PUT/todo/add_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/todo/list': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/list']['Req']
      response: IResponseTypes['GET/todo/list']
    }
  >

  'DELETE/todo/delete': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['DELETE/todo/delete']['Req']
      response: IResponseTypes['DELETE/todo/delete']
    }
  >

  'PUT/todo/add': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['PUT/todo/add']['Req']
      response: IResponseTypes['PUT/todo/add']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：获取Todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
   */
  'GET/todo/list': function useData(
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Item = IRapperStore['GET/todo/list'][0]
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/list', filter)
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
   */
  'DELETE/todo/delete': function useData(
    filter?:
      | {request?: IModels['DELETE/todo/delete']['Req']}
      | {(storeData: IRapperStore['DELETE/todo/delete'][0]): boolean}
  ) {
    type Req = IModels['DELETE/todo/delete']['Req']
    type Item = IRapperStore['DELETE/todo/delete'][0]
    type Res = IResponseTypes['DELETE/todo/delete']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('DELETE/todo/delete', filter)
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
   */
  'PUT/todo/add': function useData(
    filter?: {request?: IModels['PUT/todo/add']['Req']} | {(storeData: IRapperStore['PUT/todo/add'][0]): boolean}
  ) {
    type Req = IModels['PUT/todo/add']['Req']
    type Item = IRapperStore['PUT/todo/add'][0]
    type Res = IResponseTypes['PUT/todo/add']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('PUT/todo/add', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：获取Todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
   */
  'GET/todo/list': function useData(
    requestParams?: IModels['GET/todo/list']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/list']['Req']>
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type IFetcher = typeof fetch['GET/todo/list']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/list',
      fetcher: fetch['GET/todo/list'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
   */
  'DELETE/todo/delete': function useData(
    requestParams?: IModels['DELETE/todo/delete']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['DELETE/todo/delete']['Req']>
  ) {
    type Req = IModels['DELETE/todo/delete']['Req']
    type Res = IResponseTypes['DELETE/todo/delete']
    type IFetcher = typeof fetch['DELETE/todo/delete']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'DELETE/todo/delete',
      fetcher: fetch['DELETE/todo/delete'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
   */
  'PUT/todo/add': function useData(
    requestParams?: IModels['PUT/todo/add']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['PUT/todo/add']['Req']>
  ) {
    type Req = IModels['PUT/todo/add']['Req']
    type Res = IResponseTypes['PUT/todo/add']
    type IFetcher = typeof fetch['PUT/todo/add']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'PUT/todo/add',
      fetcher: fetch['PUT/todo/add'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：获取Todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
   */
  'GET/todo/list': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/list']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/list']['Req']
        response?: IResponseTypes['GET/todo/list']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
   */
  'DELETE/todo/delete': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/todo/delete']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['DELETE/todo/delete']['Req']
        response?: IResponseTypes['DELETE/todo/delete']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
   */
  'PUT/todo/add': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/todo/add']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['PUT/todo/add']['Req']
        response?: IResponseTypes['PUT/todo/add']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：获取Todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
   */
  'GET/todo/list': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/list': undefined},
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
   */
  'DELETE/todo/delete': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/todo/delete': undefined},
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
   */
  'PUT/todo/add': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/todo/add': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/todo/list': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type Item = IRapperStore['GET/todo/list'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/list', filter)
  },
  'DELETE/todo/delete': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['DELETE/todo/delete']['Req']}
      | {(storeData: IRapperStore['DELETE/todo/delete'][0]): boolean}
  ) => {
    type Req = IModels['DELETE/todo/delete']['Req']
    type Res = IResponseTypes['DELETE/todo/delete']
    type Item = IRapperStore['DELETE/todo/delete'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'DELETE/todo/delete', filter)
  },
  'PUT/todo/add': (
    state: reduxLib.IState,
    filter?: {request?: IModels['PUT/todo/add']['Req']} | {(storeData: IRapperStore['PUT/todo/add'][0]): boolean}
  ) => {
    type Req = IModels['PUT/todo/add']['Req']
    type Res = IResponseTypes['PUT/todo/add']
    type Item = IRapperStore['PUT/todo/add'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'PUT/todo/add', filter)
  },
}

export const rapperDataSelector = {
  'GET/todo/list': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/list')
  },
  'DELETE/todo/delete': (state: reduxLib.IState) => {
    type Res = IResponseTypes['DELETE/todo/delete']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'DELETE/todo/delete')
  },
  'PUT/todo/add': (state: reduxLib.IState) => {
    type Res = IResponseTypes['PUT/todo/add']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'PUT/todo/add')
  },
}

export const rapperActions = RequestTypes || []
