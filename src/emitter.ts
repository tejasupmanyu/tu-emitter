import EmitterSubscription from "./subscriptions/emitterSubscription";
import SubscriberRegistry from "./suscriberRegistry";
import Subscription from "./subscriptions/baseSubscription";

/**
 * @class Emitter
 * Emitter allows to create/fire events and their respective handling.
 */
export class Emitter {
  _currentSubscription?: EmitterSubscription | null;
  _subscriber: SubscriberRegistry;

  constructor() {
    this._subscriber = new SubscriberRegistry();
    this._currentSubscription = null;
  }

  addListener(
    eventType: string,
    listener: Function,
    context?: Object
  ): Subscription {
    return this._subscriber.addSubscription(
      eventType,
      new EmitterSubscription(this._subscriber, listener, context)
    );
  }

  /**
   * TODO: Add one time listener
   */
  // once(eventType: string, listener: Function, context?: Object): Subscription {
  //   const emitter = this;
  //   return this.addListener(eventType, function() {
  //     listener.apply(this, context);
  //     emitter.removeCurrentListener();
  //   });
  // }

  removeCurrentListener() {
    if (this._currentSubscription)
      this._subscriber.removeSubscription(this._currentSubscription);
  }

  removeAllListeners(eventType: string) {
    this._subscriber.removeAllSubscriptions(eventType);
  }

  fire(eventType: string, args?: any[]) {
    let subscriptions = this._subscriber.getSubscriptionsOfType(eventType);
    if (subscriptions) {
      subscriptions.forEach((subscription: any) => {
        if (subscription) {
          subscription.listener.apply(this, args);
          this._currentSubscription = subscription;
        }
      });
    }
  }
}
