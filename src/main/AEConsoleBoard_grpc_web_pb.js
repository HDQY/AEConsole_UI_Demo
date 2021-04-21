/**
 * @fileoverview gRPC-Web generated client stub for AEConsoleBoard
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.AEConsoleBoard = require('./AEConsoleBoard_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AEConsoleBoard.AEConsoleBoardClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.ServiceStatusInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetServiceStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetServiceStatus',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.AEConsoleBoard.ServiceStatusInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ServiceStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.ServiceStatusInfo>}
 */
const methodInfo_AEConsoleBoard_GetServiceStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ServiceStatusInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ServiceStatusInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ServiceStatusInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ServiceStatusInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getServiceStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetServiceStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetServiceStatus,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ServiceStatusInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getServiceStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetServiceStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetServiceStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.RegAccessInfo>}
 */
const methodDescriptor_AEConsoleBoard_RegisterRead = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/RegisterRead',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.RegAccessInfo,
  proto.AEConsoleBoard.RegAccessInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.RegAccessInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.RegAccessInfo>}
 */
const methodInfo_AEConsoleBoard_RegisterRead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.RegAccessInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.RegAccessInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.RegAccessInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.RegAccessInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.RegAccessInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.registerRead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/RegisterRead',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_RegisterRead,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.RegAccessInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.RegAccessInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.registerRead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/RegisterRead',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_RegisterRead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_RegisterWrite = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/RegisterWrite',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.RegAccessInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_RegisterWrite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.RegAccessInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.registerWrite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/RegisterWrite',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_RegisterWrite,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.RegAccessInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.registerWrite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/RegisterWrite',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_RegisterWrite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.BoardTypeInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetBoardType = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetBoardType',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.AEConsoleBoard.BoardTypeInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.BoardTypeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.BoardTypeInfo>}
 */
const methodInfo_AEConsoleBoard_GetBoardType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.BoardTypeInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.BoardTypeInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.BoardTypeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.BoardTypeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getBoardType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetBoardType',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetBoardType,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.BoardTypeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getBoardType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetBoardType',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetBoardType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.PowerStatusInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetPowerStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetPowerStatus',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.PowerStatusInfo,
  proto.AEConsoleBoard.PowerStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.PowerStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.PowerStatusInfo>}
 */
const methodInfo_AEConsoleBoard_GetPowerStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.PowerStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.PowerStatusInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.PowerStatusInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.PowerStatusInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.PowerStatusInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getPowerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetPowerStatus,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.PowerStatusInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.PowerStatusInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getPowerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetPowerStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_SetPowerStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/SetPowerStatus',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.PowerStatusInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_SetPowerStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.PowerStatusInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.setPowerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetPowerStatus,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.PowerStatusInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.setPowerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetPowerStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.ResetInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_Reset = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/Reset',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.ResetInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.ResetInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.ResetInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_Reset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.ResetInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.ResetInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.reset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/Reset',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_Reset,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.ResetInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.reset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/Reset',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_Reset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.SyncInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_SetSync = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/SetSync',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.SyncInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.SyncInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.SyncInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_SetSync = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.SyncInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.SyncInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.setSync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetSync',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetSync,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.SyncInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.setSync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetSync',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetSync);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.FmcVoltageInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetFmcVoltage = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetFmcVoltage',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.FmcVoltageInfo,
  proto.AEConsoleBoard.FmcVoltageInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.FmcVoltageInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.FmcVoltageInfo>}
 */
const methodInfo_AEConsoleBoard_GetFmcVoltage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.FmcVoltageInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.FmcVoltageInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.FmcVoltageInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.FmcVoltageInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getFmcVoltage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetFmcVoltage,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.FmcVoltageInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getFmcVoltage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetFmcVoltage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_SetFmcVoltage = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/SetFmcVoltage',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.FmcVoltageInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_SetFmcVoltage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.setFmcVoltage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetFmcVoltage,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.setFmcVoltage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetFmcVoltage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.PllClockInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetPllClock = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetPllClock',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.PllClockInfo,
  proto.AEConsoleBoard.PllClockInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.PllClockInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.PllClockInfo>}
 */
const methodInfo_AEConsoleBoard_GetPllClock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.PllClockInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.PllClockInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.PllClockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.PllClockInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.PllClockInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getPllClock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetPllClock,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.PllClockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.PllClockInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getPllClock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetPllClock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_SetPllClock = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/SetPllClock',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.PllClockInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_SetPllClock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.PllClockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.setPllClock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetPllClock,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.PllClockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.setPllClock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetPllClock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.FpgaConfigStatusInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetFpgaConfigStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetFpgaConfigStatus',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.FpgaConfigInfo,
  proto.AEConsoleBoard.FpgaConfigStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.FpgaConfigStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.FpgaConfigStatusInfo>}
 */
const methodInfo_AEConsoleBoard_GetFpgaConfigStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.FpgaConfigStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.FpgaConfigStatusInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.FpgaConfigStatusInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.FpgaConfigStatusInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getFpgaConfigStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetFpgaConfigStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetFpgaConfigStatus,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.FpgaConfigStatusInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getFpgaConfigStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetFpgaConfigStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetFpgaConfigStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.NetworkSettingInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleBoard_SetNetworkSetting = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/SetNetworkSetting',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleBoard.NetworkSettingInfo,
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.NetworkSettingInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.NetworkSettingInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleBoard_SetNetworkSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.NetworkSettingInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.NetworkSettingInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.setNetworkSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetNetworkSetting',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetNetworkSetting,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.NetworkSettingInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.setNetworkSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/SetNetworkSetting',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_SetNetworkSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.NetworkSettingInfo>}
 */
const methodDescriptor_AEConsoleBoard_GetNetworkSetting = new grpc.web.MethodDescriptor(
  '/AEConsoleBoard.AEConsoleBoard/GetNetworkSetting',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.AEConsoleBoard.NetworkSettingInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.NetworkSettingInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.NetworkSettingInfo>}
 */
const methodInfo_AEConsoleBoard_GetNetworkSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleBoard.NetworkSettingInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleBoard.NetworkSettingInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.NetworkSettingInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.NetworkSettingInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleBoard.AEConsoleBoardClient.prototype.getNetworkSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetNetworkSetting',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetNetworkSetting,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.NetworkSettingInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleBoard.AEConsoleBoardPromiseClient.prototype.getNetworkSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleBoard.AEConsoleBoard/GetNetworkSetting',
      request,
      metadata || {},
      methodDescriptor_AEConsoleBoard_GetNetworkSetting);
};


module.exports = proto.AEConsoleBoard;

