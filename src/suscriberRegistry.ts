import Subscription from "./subscriptions/baseSubscription";
import EmitterSubscription from "./subscriptions/emitterSubscription";

/**
 * @class SubscriberRegistry
 * Subscriber Registry registers all the subscriptions created.
 */
class SubscriberRegistry {
  _subscriptionsOfType = {};

  getSubscriptionsOfType(eventType: string): EmitterSubscription[] | Subscription[] {
    return this._subscriptionsOfType[eventType];
  }

  addSubscription(eventType: string, subscription: Subscription): EmitterSubscription | Subscription {
    if (!this._subscriptionsOfType[eventType]) {
      this._subscriptionsOfType[eventType] = [];
    }
    const index = this._subscriptionsOfType[eventType].length;
    this._subscriptionsOfType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.index = index;
    return subscription;
  }

  removeAllSubscriptions(eventType?: string) {
    if (eventType) {
      delete this._subscriptionsOfType[eventType];
    } else {
      this._subscriptionsOfType = {};
    }
  }

  removeSubscription(subscription: Subscription) {
    const eventType = subscription.eventType;
    const index = subscription.index;
    const subscriptions = this._subscriptionsOfType[eventType];
    if (subscriptions) {
      delete subscriptions[index];
    }
  }
}


export default SubscriberRegistry;
