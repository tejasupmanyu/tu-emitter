import Subscription from "./baseSubscription";
import SubscriberRegistry from "../suscriberRegistry";

/**
 * @class EmitterSubscription
 * Extends base subscription to add listener and context properties.
 */
class EmitterSubscription extends Subscription {
  context?: Object;
  listener: Function;

  /**
   * @param {SubscriberRegistry} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  constructor(
    subscriber: SubscriberRegistry,
    listener: Function,
    context?: Object,
  ) {
    super(subscriber);
    this.listener = listener;
    this.context = context;
  }
}

export default EmitterSubscription;
