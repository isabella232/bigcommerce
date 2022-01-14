import { PhysicalCartItem } from './physical';
import { DigitalCartItem } from './digital';

export type CartItem = PhysicalCartItem | DigitalCartItem;

export { PhysicalCartItem, DigitalCartItem };
