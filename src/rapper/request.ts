/* md5: 74e780f3adac6e4e139d9bd68266a496 */
/* Rap仓库id: 275895 */
/* Rapper版本: 1.1.6-beta.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=275895
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：获取Todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
   */
  'GET/todo/list': {
    Req: {}
    Res: {
      isOk: number
      errMsg: string
      data: {
        /**
         * 属性ID
         */
        id: number
        /**
         * TODO的名称
         */
        name: string
      }[]
    }
  }

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
   */
  'DELETE/todo/delete': {
    Req: {
      id?: number
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
   */
  'PUT/todo/add': {
    Req: {
      name: string
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/todo/list': ResSelector<IModels['GET/todo/list']['Res']>
  'DELETE/todo/delete': ResSelector<IModels['DELETE/todo/delete']['Res']>
  'PUT/todo/add': ResSelector<IModels['PUT/todo/add']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：获取Todo列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859337
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/list': (req?: IModels['GET/todo/list']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/list', {
        url: '/todo/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/list']>
    },

    /**
     * 接口名：删除TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859338
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/todo/delete': (req?: IModels['DELETE/todo/delete']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('DELETE/todo/delete', {
        url: '/todo/delete',
        method: 'DELETE',
        params: req,
        extra,
      }) as Promise<IResponseTypes['DELETE/todo/delete']>
    },

    /**
     * 接口名：添加TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275895&mod=436246&itf=1859339
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/todo/add': (req?: IModels['PUT/todo/add']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('PUT/todo/add', {
        url: '/todo/add',
        method: 'PUT',
        params: req,
        extra,
      }) as Promise<IResponseTypes['PUT/todo/add']>
    },
  }
}
