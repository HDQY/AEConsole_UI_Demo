/**
 * @fileoverview gRPC-Web generated client stub for AEConsoleGateway
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var AEConsoleBoard_pb = require('./AEConsoleBoard_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.AEConsoleGateway = require('./AEConsoleGateway_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AEConsoleGateway.AEConsoleGatewayClient =
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient =
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
const methodDescriptor_AEConsoleGateway_GetServiceStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetServiceStatus',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  AEConsoleBoard_pb.ServiceStatusInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ServiceStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleBoard.ServiceStatusInfo>}
 */
const methodInfo_AEConsoleGateway_GetServiceStatus = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ServiceStatusInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ServiceStatusInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getServiceStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetServiceStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetServiceStatus,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getServiceStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetServiceStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetServiceStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.DeviceInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_RefreshDeviceInfo = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/RefreshDeviceInfo',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.DeviceInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.DeviceInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_RefreshDeviceInfo = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.DeviceInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.refreshDeviceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RefreshDeviceInfo',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RefreshDeviceInfo,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.DeviceInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.refreshDeviceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RefreshDeviceInfo',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RefreshDeviceInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_OpenConnection = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/OpenConnection',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.DeviceIdInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_OpenConnection = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.openConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/OpenConnection',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_OpenConnection,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.openConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/OpenConnection',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_OpenConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_CloseConnection = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/CloseConnection',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.DeviceIdInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_CloseConnection = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.closeConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/CloseConnection',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_CloseConnection,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.closeConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/CloseConnection',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_CloseConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleGateway.ConnectionStatusInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetConnectionStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetConnectionStatus',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.DeviceIdInfo,
  proto.AEConsoleGateway.ConnectionStatusInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.ConnectionStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleGateway.ConnectionStatusInfo>}
 */
const methodInfo_AEConsoleGateway_GetConnectionStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleGateway.ConnectionStatusInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.ConnectionStatusInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleGateway.ConnectionStatusInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleGateway.ConnectionStatusInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getConnectionStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetConnectionStatus,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleGateway.ConnectionStatusInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getConnectionStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetConnectionStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleGateway.ConnectionStatusListInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetAllConnectionStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetAllConnectionStatus',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.AEConsoleGateway.ConnectionStatusListInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.ConnectionStatusListInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.AEConsoleGateway.ConnectionStatusListInfo>}
 */
const methodInfo_AEConsoleGateway_GetAllConnectionStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleGateway.ConnectionStatusListInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.ConnectionStatusListInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleGateway.ConnectionStatusListInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleGateway.ConnectionStatusListInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getAllConnectionStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetAllConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetAllConnectionStatus,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleGateway.ConnectionStatusListInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getAllConnectionStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetAllConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetAllConnectionStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.RegAccessInfo>}
 */
const methodDescriptor_AEConsoleGateway_RegisterRead = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/RegisterRead',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.RegAccessInfo,
  AEConsoleBoard_pb.RegAccessInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.RegAccessInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.RegAccessInfo>}
 */
const methodInfo_AEConsoleGateway_RegisterRead = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.RegAccessInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.RegAccessInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.registerRead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RegisterRead',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RegisterRead,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.registerRead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RegisterRead',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RegisterRead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_RegisterWrite = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/RegisterWrite',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.RegAccessInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.RegAccessInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_RegisterWrite = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.RegAccessInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.registerWrite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RegisterWrite',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RegisterWrite,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.registerWrite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/RegisterWrite',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_RegisterWrite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.BoardTypeInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetBoardType = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetBoardType',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.DeviceIdInfo,
  AEConsoleBoard_pb.BoardTypeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.BoardTypeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.DeviceIdInfo,
 *   !proto.AEConsoleBoard.BoardTypeInfo>}
 */
const methodInfo_AEConsoleGateway_GetBoardType = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.BoardTypeInfo,
  /**
   * @param {!proto.AEConsoleGateway.DeviceIdInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.BoardTypeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.BoardTypeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.BoardTypeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getBoardType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetBoardType',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetBoardType,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.DeviceIdInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.BoardTypeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getBoardType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetBoardType',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetBoardType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.PowerStatusInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetPowerStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetPowerStatus',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.PowerStatusInfo,
  AEConsoleBoard_pb.PowerStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.PowerStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.PowerStatusInfo>}
 */
const methodInfo_AEConsoleGateway_GetPowerStatus = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.PowerStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.PowerStatusInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getPowerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetPowerStatus,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getPowerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetPowerStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetPowerStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetPowerStatus',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.PowerStatusInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PowerStatusInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetPowerStatus = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PowerStatusInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setPowerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPowerStatus,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setPowerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPowerStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPowerStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.ResetInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_Reset = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/Reset',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.ResetInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.ResetInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.ResetInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_Reset = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.ResetInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.reset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/Reset',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_Reset,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.reset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/Reset',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_Reset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.SyncInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetSync = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetSync',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.SyncInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.SyncInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.SyncInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetSync = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.SyncInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setSync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetSync',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetSync,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setSync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetSync',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetSync);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.FmcVoltageInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetFmcVoltage = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetFmcVoltage',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.FmcVoltageInfo,
  AEConsoleBoard_pb.FmcVoltageInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.FmcVoltageInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.FmcVoltageInfo>}
 */
const methodInfo_AEConsoleGateway_GetFmcVoltage = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.FmcVoltageInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.FmcVoltageInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getFmcVoltage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetFmcVoltage,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getFmcVoltage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetFmcVoltage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetFmcVoltage = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltage',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.FmcVoltageInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FmcVoltageInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetFmcVoltage = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FmcVoltageInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setFmcVoltage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetFmcVoltage,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setFmcVoltage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltage',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetFmcVoltage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.FmcVoltageInfoByFile,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetFmcVoltageByFile = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltageByFile',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.FmcVoltageInfoByFile,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.FmcVoltageInfoByFile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.FmcVoltageInfoByFile,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetFmcVoltageByFile = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.FmcVoltageInfoByFile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.FmcVoltageInfoByFile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setFmcVoltageByFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltageByFile',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetFmcVoltageByFile,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.FmcVoltageInfoByFile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setFmcVoltageByFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetFmcVoltageByFile',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetFmcVoltageByFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.PllClockInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetPllClock = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetPllClock',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.PllClockInfo,
  AEConsoleBoard_pb.PllClockInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.PllClockInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.PllClockInfo>}
 */
const methodInfo_AEConsoleGateway_GetPllClock = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.PllClockInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.PllClockInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getPllClock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetPllClock,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getPllClock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetPllClock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetPllClock = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetPllClock',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.PllClockInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.PllClockInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetPllClock = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.PllClockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setPllClock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPllClock,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setPllClock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPllClock',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPllClock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleGateway.PllClockInfoByFile,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_SetPllClockByFile = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/SetPllClockByFile',
  grpc.web.MethodType.UNARY,
  proto.AEConsoleGateway.PllClockInfoByFile,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.PllClockInfoByFile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleGateway.PllClockInfoByFile,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_SetPllClockByFile = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleGateway.PllClockInfoByFile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleGateway.PllClockInfoByFile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.setPllClockByFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPllClockByFile',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPllClockByFile,
      callback);
};


/**
 * @param {!proto.AEConsoleGateway.PllClockInfoByFile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.setPllClockByFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/SetPllClockByFile',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_SetPllClockByFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleGateway.BoardFpgaConfigInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetBoardFpgaConfigInfo = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetBoardFpgaConfigInfo',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.FpgaConfigInfo,
  proto.AEConsoleGateway.BoardFpgaConfigInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.BoardFpgaConfigInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleGateway.BoardFpgaConfigInfo>}
 */
const methodInfo_AEConsoleGateway_GetBoardFpgaConfigInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AEConsoleGateway.BoardFpgaConfigInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AEConsoleGateway.BoardFpgaConfigInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleGateway.BoardFpgaConfigInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleGateway.BoardFpgaConfigInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getBoardFpgaConfigInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetBoardFpgaConfigInfo',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetBoardFpgaConfigInfo,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleGateway.BoardFpgaConfigInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getBoardFpgaConfigInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetBoardFpgaConfigInfo',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetBoardFpgaConfigInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodDescriptor_AEConsoleGateway_StartFpgaConfig = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/StartFpgaConfig',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.FpgaConfigInfo,
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.ResultCodeInfo>}
 */
const methodInfo_AEConsoleGateway_StartFpgaConfig = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.ResultCodeInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.ResultCodeInfo.deserializeBinary
);


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AEConsoleBoard.ResultCodeInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AEConsoleBoard.ResultCodeInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.startFpgaConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/StartFpgaConfig',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_StartFpgaConfig,
      callback);
};


/**
 * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AEConsoleBoard.ResultCodeInfo>}
 *     Promise that resolves to the response
 */
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.startFpgaConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/StartFpgaConfig',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_StartFpgaConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.FpgaConfigStatusInfo>}
 */
const methodDescriptor_AEConsoleGateway_GetFpgaConfigStatus = new grpc.web.MethodDescriptor(
  '/AEConsoleGateway.AEConsoleGateway/GetFpgaConfigStatus',
  grpc.web.MethodType.UNARY,
  AEConsoleBoard_pb.FpgaConfigInfo,
  AEConsoleBoard_pb.FpgaConfigStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.FpgaConfigStatusInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AEConsoleBoard.FpgaConfigInfo,
 *   !proto.AEConsoleBoard.FpgaConfigStatusInfo>}
 */
const methodInfo_AEConsoleGateway_GetFpgaConfigStatus = new grpc.web.AbstractClientBase.MethodInfo(
  AEConsoleBoard_pb.FpgaConfigStatusInfo,
  /**
   * @param {!proto.AEConsoleBoard.FpgaConfigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  AEConsoleBoard_pb.FpgaConfigStatusInfo.deserializeBinary
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
proto.AEConsoleGateway.AEConsoleGatewayClient.prototype.getFpgaConfigStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetFpgaConfigStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetFpgaConfigStatus,
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
proto.AEConsoleGateway.AEConsoleGatewayPromiseClient.prototype.getFpgaConfigStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AEConsoleGateway.AEConsoleGateway/GetFpgaConfigStatus',
      request,
      metadata || {},
      methodDescriptor_AEConsoleGateway_GetFpgaConfigStatus);
};


module.exports = proto.AEConsoleGateway;

