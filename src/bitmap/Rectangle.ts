import { Point } from "./Point";

/**
* A Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
* The x, y, width, and height properties of the Rectangle class are independent of each other; changing the value of one property has no effect on the others. However, the right and bottom properties are integrally related to those four properties. For example, if you change the value of the right property, the value of the width property changes; if you change the bottom property, the value of the height property changes.
* @constructor
* @author Leandro Ferreira
*/
export class Rectangle {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	// TODO: test getters/setters below. Never used MDC.
	get size() { return new Point(this.width, this.height); };
	set size(point) { this.inflatePoint(point); };

	get top() { return this.y; };
	set top(value) { this.y = value; };
	get bottom() { return this.y + this.height; };
	set bottom(value) { this.height = value - this.y };
	get left() { return this.x; };
	set left(value) { this.x = value };
	get right() { return this.x + this.height; };
	set right(value) { this.width = value - this.x };

	get topLeft() { return new Point(this.left, this.top); };
	set topLeft(point) { this.left = point.x; this.top = point.y; };
	get topRight() { return new Point(this.right, this.top); };
	set topRight(point) { this.right = point.x; this.top = point.y; };
	get bottomLeft() { return new Point(this.left, this.bottom); };
	set bottomLeft(point) { this.left = point.x; this.bottom = point.y; };
	get bottomRight() { return new Point(this.right, this.bottom); };
	set bottomRight(point) { this.right = point.x; this.bottom = point.y; };

	/**
	* Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object.
	* @returns Rectangle
	*/
	clone() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}

	/**
	* Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
	* @param {Number} x horizontal position of point.
	* @param {Number} y vertical position of point.
	* @returns Boolean
	*/
	contains(x, y) {
		return x > this.left && x < this.right && y > this.top && y < this.bottom;
	}

	/**
	* Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
	* @param {Point} point Point to test.
	* @returns Boolean
	*/
	containsPoint(point) {
		return this.contains(point.x, point.y);
	}

	/**
	* Determines whether the Rectangle object specified by the rect parameter is contained within this Rectangle object.
	* @param {Rectangle} rect Rectangle to test.
	* @returns Boolean
	*/
	containsRect(rect) {
		return this.containsPoint(rect.topLeft) && this.containsPoint(rect.bottomRight);
	}

	/**
	* Determines whether the object specified in the toCompare parameter is equal to this Rectangle object.
	* @param {Rectangle} toCompare Rectangle to test.
	* @returns Boolean
	*/
	equals(toCompare) {
		return toCompare.topLeft.equals(this.topLeft) && toCompare.bottomRight.equals(this.bottomRight);
	}

	/**
	* Increases the size of the Rectangle object by the specified amounts, in pixels.
	* @param {Number} x horizontal amount.
	* @param {Number} y vertical amount.
	*/
	inflate(dx, dy) {
		this.width += dx;
		this.height += dy;
	}

	/**
	* Increases the size of the Rectangle object.
	* @param {Point} point Point whose width and height are used to inflate.
	*/
	inflatePoint(point) {
		this.inflate(point.width, point.height);
	}

	/**
	* If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object.
	* @param {Rectangle} toIntersect Rectangle to intersect.
	* @returns resulting Rectangle or null, if they do not intersect.
	*/
	intersection(toIntersect: Rectangle) {
		if (this.intersects(toIntersect)) {
			var t = Math.max(this.top, toIntersect.top);
			var l = Math.max(this.left, toIntersect.left);
			var b = Math.min(this.bottom, toIntersect.bottom);
			var r = Math.min(this.right, toIntersect.right);
			return new Rectangle(l, t, r - l, b - t);
		} else {
			return null;
		}
	}

	/**
	* Determines whether the object specified in the toIntersect parameter intersects with this Rectangle object.
	* @param {Rectangle} toIntersect Rectangle to test.
	* @returns Boolean
	*/
	intersects(toIntersect) {
		return this.containsPoint(toIntersect.topLeft) || this.containsPoint(toIntersect.topRight) || this.containsPoint(toIntersect.bottomLeft) || this.containsPoint(toIntersect.bottomRight);
	}

	/**
	* Determines whether or not this Rectangle object is empty.
	* @returns Boolean
	*/
	isEmpty() {
		return this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0;
	}

	/**
	* Adjusts the location of the Rectangle object, as determined by its top-left corner, by the specified amounts.
	* @param {Number} x horizontal amount.
	* @param {Number} y vertical amount.
	*/
	offset(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	/**
	* Adjusts the location of the Rectangle object using a Point object as a parameter.
	* @param {Point} point Point whose x and y are used to offset.
	*/
	offsetPoint(point) {
		this.offset(point.x, point.y);
	}

	/**
	* Sets all of the Rectangle object's properties to 0.
	*/
	setEmpty() {
		this.x = this.y = this.width = this.height = 0;
	}

	/**
	* Adds two rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two rectangles.
	* @param {Rectangle} toUnion Rectangle to create union.
	*/
	union(toUnion) {
		var t = Math.min(this.top, toUnion.top);
		var l = Math.min(this.left, toUnion.left);
		var b = Math.max(this.bottom, toUnion.bottom);
		var r = Math.max(this.right, toUnion.right);
		return new Rectangle(l, t, r - l, b - t);
	}

}