import { CloudEvent } from 'cloudevents';

export enum AndrewDeviceEventType {
  CONNECT = 'andrew.device.connect',
  DISCONNECT = 'andrew.device.disconnect',
  METRIC = 'andrew.device.metric',
  DRIVING_SESSION_START = 'andrew.device.driving-session-start',
  DRIVING_SESSION_END = 'andrew.device.driving-session-end',
  VEHICLE_VIN = 'andrew.device.vehicle-vin',
  ACTIVATION_STATUS_REQUEST = 'andrew.device.activation-status-request',
  ACTIVATION_STATUS_RESPONSE = 'andrew.device.activation-status-response',
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
  obd_data: {
    fuel_rate: number;
    vehicle_speed: number;
    engine_speed: number;
    relative_accel_pos: number;
  };
}

export interface AndrewDeviceDrivingSessionStartEventData {
  device: string;
}

export interface AndrewDeviceDrivingSessionEndEventData {
  device: string;
}

export interface AndrewDeviceVehicleVINEventData {
  device: string;
  vehicle: string;
}

export interface AndrewDeviceActivationStatusRequestEventData {
  device: string;
  vehicle: string;
}

export interface AndrewDeviceActivationStatusResponseEventData {
  device: string;
  vehicle: string;
  status: string;
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

export class AndrewDeviceDrivingSessionStartEvent extends AndrewDeviceEvent<AndrewDeviceDrivingSessionStartEventData> {
  constructor(subject: string, data: AndrewDeviceDrivingSessionStartEventData) {
    super(AndrewDeviceEventType.DRIVING_SESSION_START, subject, data);
  }
}

export class AndrewDeviceDrivingSessionEndEvent extends AndrewDeviceEvent<AndrewDeviceDrivingSessionEndEventData> {
  constructor(subject: string, data: AndrewDeviceDrivingSessionStartEventData) {
    super(AndrewDeviceEventType.DRIVING_SESSION_END, subject, data);
  }
}

export class AndrewDeviceVehicleVINEvent extends AndrewDeviceEvent<AndrewDeviceVehicleVINEventData> {
  constructor(subject: string, data: AndrewDeviceVehicleVINEventData) {
    super(AndrewDeviceEventType.DRIVING_SESSION_START, subject, data);
  }
}

export class AndrewDeviceActivationStatusRequestEvent extends AndrewDeviceEvent<AndrewDeviceActivationStatusRequestEventData> {
  constructor(
    subject: string,
    data: AndrewDeviceActivationStatusRequestEventData
  ) {
    super(AndrewDeviceEventType.ACTIVATION_STATUS_REQUEST, subject, data);
  }
}

export class AndrewDeviceActivationStatusResponseEvent extends AndrewDeviceEvent<AndrewDeviceActivationStatusResponseEventData> {
  constructor(
    subject: string,
    data: AndrewDeviceActivationStatusResponseEventData
  ) {
    super(AndrewDeviceEventType.ACTIVATION_STATUS_RESPONSE, subject, data);
  }
}
