import { CloudEvent } from 'cloudevents';

export enum AndrewDeviceEventType {
  CONNECT = 'andrew.device.connect',
  DISCONNECT = 'andrew.device.disconnect',
  METRIC = 'andrew.device.metric',
}

export enum AndrewDeviceEventSource {
  DEVICE = 'device',
}

export class AndrewDeviceConnectEventData {}

export class AndrewDeviceDisconnectEventData {}

export class AndrewDeviceMetricEventData {}

export class AndrewDeviceEvent extends CloudEvent<
  | AndrewDeviceConnectEventData
  | AndrewDeviceDisconnectEventData
  | AndrewDeviceMetricEventData
> {
  constructor(
    type: AndrewDeviceEventType,
    subject: string,
    data:
      | AndrewDeviceConnectEventData
      | AndrewDeviceDisconnectEventData
      | AndrewDeviceMetricEventData
  ) {
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

export class AndrewDeviceConnectEvent extends AndrewDeviceEvent {
  constructor(subject: string, data: AndrewDeviceConnectEventData) {
    super(AndrewDeviceEventType.CONNECT, subject, data);
  }
}

export class AndrewDeviceDisconnectEvent extends AndrewDeviceEvent {
  constructor(subject: string, data: AndrewDeviceDisconnectEventData) {
    super(AndrewDeviceEventType.DISCONNECT, subject, data);
  }
}

export class AndrewDeviceMetricEvent extends AndrewDeviceEvent {
  constructor(subject: string, data: AndrewDeviceMetricEventData) {
    super(AndrewDeviceEventType.METRIC, subject, data);
  }
}
