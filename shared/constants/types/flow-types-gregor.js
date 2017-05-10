// @flow
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.

import engine, {EngineChannel} from '../../engine'
import {RPCError} from '../../util/errors'
import {
  putOnChannelMap,
  createChannelMap,
  closeChannelMap,
} from '../../util/saga'
import {Buffer} from 'buffer'

import type {ChannelConfig, ChannelMap} from './saga'
import type {Exact} from './more'
export type int = number
export type int64 = number
export type uint = number
export type uint64 = number
export type long = number
export type double = number
export type bytes = Buffer
export type WaitingHandlerType = (
  waiting: boolean,
  method: string,
  sessionID: number
) => void

const engineRpcOutgoing = (
  method: string,
  params: any,
  callbackOverride: any,
  incomingCallMapOverride: any
) =>
  engine()._rpcOutgoing(
    method,
    params,
    callbackOverride,
    incomingCallMapOverride
  )

type requestCommon = {
  waitingHandler?: WaitingHandlerType,
  incomingCallMap?: any,
}

type requestErrorCallback = {
  callback?: ?(err: ?RPCError) => void,
}

type RPCErrorHandler = (err: RPCError) => void

type CommonResponseHandler = {
  error: RPCErrorHandler,
  result: (...rest: Array<void>) => void,
}

function _channelMapRpcHelper(
  channelConfig: ChannelConfig<*>,
  partialRpcCall: (incomingCallMap: any, callback: Function) => void
): ChannelMap<*> {
  const channelMap = createChannelMap(channelConfig)
  const incomingCallMap = Object.keys(channelMap).reduce((acc, k) => {
    acc[k] = (params, response) => {
      putOnChannelMap(channelMap, k, {params, response})
    }
    return acc
  }, {})
  const callback = (error, params) => {
    channelMap['finished'] &&
      putOnChannelMap(channelMap, 'finished', {error, params})
    closeChannelMap(channelMap)
  }
  partialRpcCall(incomingCallMap, callback)
  return channelMap
}

export function authAuthenticateSessionTokenRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authAuthenticateSessionTokenResult
      ) => void,
    } & {param: authAuthenticateSessionTokenRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.auth.authenticateSessionToken', request)
}

export function authAuthenticateSessionTokenRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authAuthenticateSessionTokenResult
      ) => void,
    } & {param: authAuthenticateSessionTokenRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.auth.authenticateSessionToken',
    request
  )
}
export function authAuthenticateSessionTokenRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authAuthenticateSessionTokenResult
      ) => void,
    } & {param: authAuthenticateSessionTokenRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.auth.authenticateSessionToken',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function authAuthenticateSessionTokenRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authAuthenticateSessionTokenResult
      ) => void,
    } & {param: authAuthenticateSessionTokenRpcParam}
  >
): Promise<authAuthenticateSessionTokenResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.auth.authenticateSessionToken',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function authInternalCreateGregorSuperUserSessionTokenRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authInternalCreateGregorSuperUserSessionTokenResult
      ) => void,
    }
  >
) {
  engineRpcOutgoing(
    'gregor.1.authInternal.createGregorSuperUserSessionToken',
    request
  )
}

export function authInternalCreateGregorSuperUserSessionTokenRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authInternalCreateGregorSuperUserSessionTokenResult
      ) => void,
    }
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.authInternal.createGregorSuperUserSessionToken',
    request
  )
}
export function authInternalCreateGregorSuperUserSessionTokenRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authInternalCreateGregorSuperUserSessionTokenResult
      ) => void,
    }
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.authInternal.createGregorSuperUserSessionToken',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function authInternalCreateGregorSuperUserSessionTokenRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: authInternalCreateGregorSuperUserSessionTokenResult
      ) => void,
    }
  >
): Promise<authInternalCreateGregorSuperUserSessionTokenResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.authInternal.createGregorSuperUserSessionToken',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function authUpdateRevokeSessionIDsRpc(
  request: Exact<
    requestCommon &
      requestErrorCallback & {param: authUpdateRevokeSessionIDsRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.authUpdate.revokeSessionIDs', request)
}

export function authUpdateRevokeSessionIDsRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: authUpdateRevokeSessionIDsRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.authUpdate.revokeSessionIDs',
    request
  )
}
export function authUpdateRevokeSessionIDsRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: authUpdateRevokeSessionIDsRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.authUpdate.revokeSessionIDs',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function authUpdateRevokeSessionIDsRpcPromise(
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: authUpdateRevokeSessionIDsRpcParam}
  >
): Promise<void> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.authUpdate.revokeSessionIDs',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingConsumeMessageRpc(
  request: Exact<
    requestCommon &
      requestErrorCallback & {param: incomingConsumeMessageRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.incoming.consumeMessage', request)
}

export function incomingConsumeMessageRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: incomingConsumeMessageRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.consumeMessage',
    request
  )
}
export function incomingConsumeMessageRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: incomingConsumeMessageRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.consumeMessage',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingConsumeMessageRpcPromise(
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: incomingConsumeMessageRpcParam}
  >
): Promise<void> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.consumeMessage',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingConsumePublishMessageRpc(
  request: Exact<
    requestCommon &
      requestErrorCallback & {
        param: incomingConsumePublishMessageRpcParam,
      }
  >
) {
  engineRpcOutgoing('gregor.1.incoming.consumePublishMessage', request)
}

export function incomingConsumePublishMessageRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {
        param: incomingConsumePublishMessageRpcParam,
      }
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.consumePublishMessage',
    request
  )
}
export function incomingConsumePublishMessageRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {
        param: incomingConsumePublishMessageRpcParam,
      }
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.consumePublishMessage',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingConsumePublishMessageRpcPromise(
  request: $Exact<
    requestCommon &
      requestErrorCallback & {
        param: incomingConsumePublishMessageRpcParam,
      }
  >
): Promise<void> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.consumePublishMessage',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingPingRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingPingResult) => void,
    }
  >
) {
  engineRpcOutgoing('gregor.1.incoming.ping', request)
}

export function incomingPingRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingPingResult) => void,
    }
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.ping',
    request
  )
}
export function incomingPingRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingPingResult) => void,
    }
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.ping',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingPingRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingPingResult) => void,
    }
  >
): Promise<incomingPingResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.ping',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingStateByCategoryPrefixRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: incomingStateByCategoryPrefixResult
      ) => void,
    } & {param: incomingStateByCategoryPrefixRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.incoming.stateByCategoryPrefix', request)
}

export function incomingStateByCategoryPrefixRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: incomingStateByCategoryPrefixResult
      ) => void,
    } & {param: incomingStateByCategoryPrefixRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.stateByCategoryPrefix',
    request
  )
}
export function incomingStateByCategoryPrefixRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: incomingStateByCategoryPrefixResult
      ) => void,
    } & {param: incomingStateByCategoryPrefixRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.stateByCategoryPrefix',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingStateByCategoryPrefixRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(
        err: ?any,
        response: incomingStateByCategoryPrefixResult
      ) => void,
    } & {param: incomingStateByCategoryPrefixRpcParam}
  >
): Promise<incomingStateByCategoryPrefixResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.stateByCategoryPrefix',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingStateRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingStateResult) => void,
    } & {param: incomingStateRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.incoming.state', request)
}

export function incomingStateRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingStateResult) => void,
    } & {param: incomingStateRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.state',
    request
  )
}
export function incomingStateRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingStateResult) => void,
    } & {param: incomingStateRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.state',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingStateRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingStateResult) => void,
    } & {param: incomingStateRpcParam}
  >
): Promise<incomingStateResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.state',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingSyncRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingSyncResult) => void,
    } & {param: incomingSyncRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.incoming.sync', request)
}

export function incomingSyncRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingSyncResult) => void,
    } & {param: incomingSyncRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.sync',
    request
  )
}
export function incomingSyncRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingSyncResult) => void,
    } & {param: incomingSyncRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.sync',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingSyncRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingSyncResult) => void,
    } & {param: incomingSyncRpcParam}
  >
): Promise<incomingSyncResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.sync',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function incomingVersionRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingVersionResult) => void,
    } & {param: incomingVersionRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.incoming.version', request)
}

export function incomingVersionRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingVersionResult) => void,
    } & {param: incomingVersionRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.incoming.version',
    request
  )
}
export function incomingVersionRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingVersionResult) => void,
    } & {param: incomingVersionRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.incoming.version',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function incomingVersionRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: incomingVersionResult) => void,
    } & {param: incomingVersionRpcParam}
  >
): Promise<incomingVersionResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.incoming.version',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function outgoingBroadcastMessageRpc(
  request: Exact<
    requestCommon &
      requestErrorCallback & {param: outgoingBroadcastMessageRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.outgoing.broadcastMessage', request)
}

export function outgoingBroadcastMessageRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: outgoingBroadcastMessageRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.outgoing.broadcastMessage',
    request
  )
}
export function outgoingBroadcastMessageRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: outgoingBroadcastMessageRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.outgoing.broadcastMessage',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function outgoingBroadcastMessageRpcPromise(
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: outgoingBroadcastMessageRpcParam}
  >
): Promise<void> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.outgoing.broadcastMessage',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function remindDeleteRemindersRpc(
  request: Exact<
    requestCommon &
      requestErrorCallback & {param: remindDeleteRemindersRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.remind.deleteReminders', request)
}

export function remindDeleteRemindersRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: remindDeleteRemindersRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.remind.deleteReminders',
    request
  )
}
export function remindDeleteRemindersRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: remindDeleteRemindersRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.remind.deleteReminders',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function remindDeleteRemindersRpcPromise(
  request: $Exact<
    requestCommon &
      requestErrorCallback & {param: remindDeleteRemindersRpcParam}
  >
): Promise<void> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.remind.deleteReminders',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export function remindGetRemindersRpc(
  request: Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: remindGetRemindersResult) => void,
    } & {param: remindGetRemindersRpcParam}
  >
) {
  engineRpcOutgoing('gregor.1.remind.getReminders', request)
}

export function remindGetRemindersRpcChannelMap(
  configKeys: Array<string>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: remindGetRemindersResult) => void,
    } & {param: remindGetRemindersRpcParam}
  >
): EngineChannel {
  return engine()._channelMapRpcHelper(
    configKeys,
    'gregor.1.remind.getReminders',
    request
  )
}
export function remindGetRemindersRpcChannelMapOld(
  channelConfig: ChannelConfig<*>,
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: remindGetRemindersResult) => void,
    } & {param: remindGetRemindersRpcParam}
  >
): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => {
    engineRpcOutgoing(
      'gregor.1.remind.getReminders',
      request,
      callback,
      incomingCallMap
    )
  })
}

export function remindGetRemindersRpcPromise(
  request: $Exact<
    requestCommon & {
      callback?: ?(err: ?any, response: remindGetRemindersResult) => void,
    } & {param: remindGetRemindersRpcParam}
  >
): Promise<remindGetRemindersResult> {
  return new Promise((resolve, reject) =>
    engineRpcOutgoing(
      'gregor.1.remind.getReminders',
      request,
      (error, result) => (error ? reject(error) : resolve(result))
    )
  )
}

export type AuthResult = {
  uid: UID,
  username: string,
  sid: SessionID,
  isAdmin: boolean,
}

export type Body = bytes

export type Category = string

export type DeviceID = bytes

export type Dismissal = {
  msgIDs?: ?Array<MsgID>,
  ranges?: ?Array<MsgRange>,
}

export type DurationMsec = int64

export type InBandMessage = {
  stateUpdate?: ?StateUpdateMessage,
  stateSync?: ?StateSyncMessage,
}

export type Item = {
  category: Category,
  dtime: TimeOrOffset,
  remindTimes?: ?Array<TimeOrOffset>,
  body: Body,
}

export type ItemAndMetadata = {
  md?: ?Metadata,
  item?: ?Item,
}

export type Message = {
  oobm?: ?OutOfBandMessage,
  ibm?: ?InBandMessage,
}

export type Metadata = {
  uid: UID,
  msgID: MsgID,
  ctime: Time,
  deviceID: DeviceID,
  inBandMsgType: int,
}

export type MsgID = bytes

export type MsgRange = {
  endTime: TimeOrOffset,
  category: Category,
}

export type OutOfBandMessage = {
  uid: UID,
  system: System,
  body: Body,
}

export type Reminder = {
  item: ItemAndMetadata,
  seqno: int,
  remindTime: Time,
}

export type ReminderID = {
  uid: UID,
  msgID: MsgID,
  seqno: int,
}

export type ReminderSet = {
  reminders?: ?Array<Reminder>,
  moreRemindersReady: boolean,
}

export type SessionID = string

export type SessionToken = string

export type State = {
  items?: ?Array<ItemAndMetadata>,
}

export type StateSyncMessage = {
  md: Metadata,
}

export type StateUpdateMessage = {
  md: Metadata,
  creation?: ?Item,
  dismissal?: ?Dismissal,
}

export type SyncResult = {
  msgs?: ?Array<InBandMessage>,
  hash: bytes,
}

export type System = string

export type Time = long

export type TimeOrOffset = {
  time: Time,
  offset: DurationMsec,
}

export type UID = bytes

export type authAuthenticateSessionTokenRpcParam = Exact<{
  session: SessionToken,
}>

export type authUpdateRevokeSessionIDsRpcParam = Exact<{
  sessionIDs?: ?Array<SessionID>,
}>

export type incomingConsumeMessageRpcParam = Exact<{
  m: Message,
}>

export type incomingConsumePublishMessageRpcParam = Exact<{
  m: Message,
}>

export type incomingStateByCategoryPrefixRpcParam = Exact<{
  uid: UID,
  deviceid: DeviceID,
  timeOrOffset: TimeOrOffset,
  categoryPrefix: Category,
}>

export type incomingStateRpcParam = Exact<{
  uid: UID,
  deviceid: DeviceID,
  timeOrOffset: TimeOrOffset,
}>

export type incomingSyncRpcParam = Exact<{
  uid: UID,
  deviceid: DeviceID,
  ctime: Time,
}>

export type incomingVersionRpcParam = Exact<{
  uid: UID,
}>

export type outgoingBroadcastMessageRpcParam = Exact<{
  m: Message,
}>

export type remindDeleteRemindersRpcParam = Exact<{
  reminderIDs?: ?Array<ReminderID>,
}>

export type remindGetRemindersRpcParam = Exact<{
  maxReminders: int,
}>
type authAuthenticateSessionTokenResult = AuthResult
type authInternalCreateGregorSuperUserSessionTokenResult = SessionToken
type incomingPingResult = string
type incomingStateByCategoryPrefixResult = State
type incomingStateResult = State
type incomingSyncResult = SyncResult
type incomingVersionResult = string
type remindGetRemindersResult = ReminderSet

export type rpc =
  | authAuthenticateSessionTokenRpc
  | authInternalCreateGregorSuperUserSessionTokenRpc
  | authUpdateRevokeSessionIDsRpc
  | incomingConsumeMessageRpc
  | incomingConsumePublishMessageRpc
  | incomingPingRpc
  | incomingStateByCategoryPrefixRpc
  | incomingStateRpc
  | incomingSyncRpc
  | incomingVersionRpc
  | outgoingBroadcastMessageRpc
  | remindDeleteRemindersRpc
  | remindGetRemindersRpc

export type incomingCallMapType = Exact<{}>
