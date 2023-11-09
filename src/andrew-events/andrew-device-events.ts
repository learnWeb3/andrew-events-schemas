import { CloudEvent } from 'cloudevents';

export enum AndrewDeviceEventType {
  CONNECT = 'andrew.device.connect',
  DISCONNECT = 'andrew.device.disconnect',
  METRIC = 'andrew.device.metric',
}

export enum AndrewDeviceEventSource {
  DEVICE = 'device',
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

export class AndrewDeviceEvent<T> extends CloudEvent<T> {
  constructor(type: AndrewDeviceEventType, subject: string, data: T) {
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

export class AndrewDeviceConnectEvent extends AndrewDeviceEvent<AndrewDeviceConnectEventData> {
  constructor(subject: string, data: AndrewDeviceConnectEventData) {
    super(AndrewDeviceEventType.CONNECT, subject, data);
  }
}

export class AndrewDeviceDisconnectEvent extends AndrewDeviceEvent<AndrewDeviceDisconnectEventData> {
  constructor(subject: string, data: AndrewDeviceDisconnectEventData) {
    super(AndrewDeviceEventType.DISCONNECT, subject, data);
  }
}

export class AndrewDeviceMetricEvent extends AndrewDeviceEvent<AndrewDeviceMetricEventData> {
  constructor(subject: string, data: AndrewDeviceMetricEventData) {
    super(AndrewDeviceEventType.METRIC, subject, data);
  }
}
