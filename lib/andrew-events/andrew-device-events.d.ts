import { CloudEvent } from 'cloudevents';
export declare enum AndrewDeviceEventType {
    CONNECT = "andrew.device.connect",
    DISCONNECT = "andrew.device.disconnect",
    METRIC = "andrew.device.metric"
}
export declare enum AndrewDeviceEventSource {
    DEVICE = "device"
}
export interface AndrewDeviceConnectEventData {
    device: string;
}
export interface AndrewDeviceDisconnectEventData {
    device: string;
}
export interface AndrewDeviceMetricEventData {
    vehicle: string;
    device: string;
    timestamp: number;
    testMetric: string;
}
export declare class AndrewDeviceEvent<T> extends CloudEvent<T> {
    constructor(type: AndrewDeviceEventType, subject: string, data: T);
}
export declare class AndrewDeviceConnectEvent extends AndrewDeviceEvent<AndrewDeviceConnectEventData> {
    constructor(subject: string, data: AndrewDeviceConnectEventData);
}
export declare class AndrewDeviceDisconnectEvent extends AndrewDeviceEvent<AndrewDeviceDisconnectEventData> {
    constructor(subject: string, data: AndrewDeviceDisconnectEventData);
}
export declare class AndrewDeviceMetricEvent extends AndrewDeviceEvent<AndrewDeviceMetricEventData> {
    constructor(subject: string, data: AndrewDeviceMetricEventData);
}
