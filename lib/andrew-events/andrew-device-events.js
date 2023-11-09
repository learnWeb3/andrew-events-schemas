"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndrewDeviceMetricEvent = exports.AndrewDeviceDisconnectEvent = exports.AndrewDeviceConnectEvent = exports.AndrewDeviceEvent = exports.AndrewDeviceEventSource = exports.AndrewDeviceEventType = void 0;
const cloudevents_1 = require("cloudevents");
var AndrewDeviceEventType;
(function (AndrewDeviceEventType) {
    AndrewDeviceEventType["CONNECT"] = "andrew.device.connect";
    AndrewDeviceEventType["DISCONNECT"] = "andrew.device.disconnect";
    AndrewDeviceEventType["METRIC"] = "andrew.device.metric";
})(AndrewDeviceEventType = exports.AndrewDeviceEventType || (exports.AndrewDeviceEventType = {}));
var AndrewDeviceEventSource;
(function (AndrewDeviceEventSource) {
    AndrewDeviceEventSource["DEVICE"] = "device";
})(AndrewDeviceEventSource = exports.AndrewDeviceEventSource || (exports.AndrewDeviceEventSource = {}));
class AndrewDeviceEvent extends cloudevents_1.CloudEvent {
    constructor(type, subject, data) {
        super({
            type,
            source: AndrewDeviceEventSource.DEVICE,
            specversion: '1.0',
            datacontenttype: 'application/json',
            subject,
            time: new Date().toISOString(),
            data,
        });
    }
}
exports.AndrewDeviceEvent = AndrewDeviceEvent;
class AndrewDeviceConnectEvent extends AndrewDeviceEvent {
    constructor(subject, data) {
        super(AndrewDeviceEventType.CONNECT, subject, data);
    }
}
exports.AndrewDeviceConnectEvent = AndrewDeviceConnectEvent;
class AndrewDeviceDisconnectEvent extends AndrewDeviceEvent {
    constructor(subject, data) {
        super(AndrewDeviceEventType.DISCONNECT, subject, data);
    }
}
exports.AndrewDeviceDisconnectEvent = AndrewDeviceDisconnectEvent;
class AndrewDeviceMetricEvent extends AndrewDeviceEvent {
    constructor(subject, data) {
        super(AndrewDeviceEventType.METRIC, subject, data);
    }
}
exports.AndrewDeviceMetricEvent = AndrewDeviceMetricEvent;
