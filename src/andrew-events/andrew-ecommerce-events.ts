import { CloudEvent } from 'cloudevents';

export enum AndrewEcommerceEventType {
  CHECKOUT_COMPLETED = 'ndrew.ecommerce.checkout.completed',
  CHECKOUT_CANCELED = 'andrew.ecommerce.checkout.canceled',
}

export enum EcommerceGateway {
  STRIPE = 'STRIPE',
}

export enum AndrewEcommerceEventSource {
  ECOMMERCE = 'ecommerce',
}

export class AndrewEcommerceEvent<T> extends CloudEvent<T> {
  constructor(type: AndrewEcommerceEventType, subject: string, data: T) {
    super({
      type,
      source: AndrewEcommerceEventSource.ECOMMERCE,
      specversion: '1.0',
      datacontenttype: 'application/json',
      subject,
      time: new Date().toISOString(),
      data,
    });
  }
}

export interface AndrewEcommerceCheckoutCompletedEventData {
  customer: string;
  contract: string;
  gateway: EcommerceGateway;
}

export class AndrewEcommerceCheckoutCompletedEvent extends AndrewEcommerceEvent<AndrewEcommerceCheckoutCompletedEventData> {
  constructor(
    subject: string,
    data: AndrewEcommerceCheckoutCompletedEventData
  ) {
    super(AndrewEcommerceEventType.CHECKOUT_COMPLETED, subject, data);
  }
}

export interface AndrewEcommerceCheckoutCanceledEventData {
  customer: string;
  contract: string;
  gateway: EcommerceGateway;
}

export class AndrewEcommerceCheckoutCanceledEvent extends AndrewEcommerceEvent<AndrewEcommerceCheckoutCanceledEventData> {
  constructor(subject: string, data: AndrewEcommerceCheckoutCanceledEventData) {
    super(AndrewEcommerceEventType.CHECKOUT_CANCELED, subject, data);
  }
}
