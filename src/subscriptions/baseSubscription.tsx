import SubscriberRegistry from '../suscriberRegistry';

/**
 * @class Subscription
 * Represents a subscription with ability to remove itself.
 */
class Subscription {
  subscriber: SubscriberRegistry | null;
  eventType: string;
  index: number;

  constructor(subscriber: any) {
    this.subscriber = subscriber;
    this.eventType = '';
    this.index = -1;
  }

  remove() {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  }
}

export default Subscription;
