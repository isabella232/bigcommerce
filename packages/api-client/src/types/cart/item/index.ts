import { PhysicalCartItem } from './physical';
import { DigitalCartItem } from './digital';

/**
 * Type alias for physical and digital cart item.
 */
export type CartItem = PhysicalCartItem | DigitalCartItem;

export { PhysicalCartItem, DigitalCartItem };
