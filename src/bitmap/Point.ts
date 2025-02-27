/**
* The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
* @constructor
* @author Leandro Ferreira
*/
export class Point {
	public x: number;
	public y: number;
	constructor(x?: number, y?: number) {
		this.x = x || 0;
		this.y = y || 0;
	}
	get length() { return Math.sqrt(this.x * this.x + this.y * this.y); };

	/**
	* Adds the coordinates of another point to the coordinates of this point to create a new point.
	* @param {Point} v The point to be added.
	* @returns {Point} The new Point.
	*/
	add(v) {
		return new Point(this.x + v.x, this.y + v.y);
	}

	/**
	* Creates a copy of this Point object.
	* @returns {Point} The new Point.
	*/
	clone() {
		return new Point(this.x, this.y);
	}

	/**
	* [static] Returns the distance between pt1 and pt2.
	* @param {Point} p1 The first point.
	* @param {Point} p2 The second point.
	* @returns {Number} The distance between the first and second points.
	*/
	static distance(p1: Point, p2: Point) {
		var dx = p2.x - p1.x;
		var dy = p2.y - p1.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	* Determines whether two points are equal.
	* @param {Point} toCompare The point to be compared.
	* @returns {Boolean} True if the object is equal to this Point object; false if it is not equal.
	*/
	equals(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y;
	}

	/**
	* [static] Determines a point between two specified points.
	* @param {Point} p1 The first point.
	* @param {Point} p2 The second point.
	* @param {Number} f The level of interpolation between the two points. Indicates where the new point will be, along the line between pt1 and pt2. If f=1, pt1 is returned; if f=0, pt2 is returned.
	* @returns {Point} The new, interpolated point.
	*/
	static interpolate(p1: Point, p2: Point, f: number) {
		var pt = new Point();
		pt.x = p1.x + f * (p2.x - p1.x);
		pt.y = p1.y + f * (p2.y - p1.y);
		return pt;
	}

	/**
	* Scales the line segment between (0,0) and the current point to a set length.
	* @param {Number} thickness The scaling value. For example, if the current point is (0,5), and you normalize it to 1, the point returned is at (0,1).
	*/
	normalize(thickness) {
		var ratio = thickness / this.length;
		this.x *= ratio;
		this.y *= ratio;
	}

	/**
	* Offsets the Point object by the specified amount.
	* @param {Number} dx The amount by which to offset the horizontal coordinate, x.
	* @param {Number} dy The amount by which to offset the vertical coordinate, y.
	*/
	offset(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	/**
	* [static] Converts a pair of polar coordinates to a Cartesian point coordinate.
	* @param {Number} len The length coordinate of the polar pair.
	* @param {Number} angle The angle, in radians, of the polar pair.
	* @returns {Point} The Cartesian point.
	*/
	static polar(len, angle) {
		return new Point(len * Math.cos(angle), len * Math.sin(angle));
	}

	/**
	* Subtracts the coordinates of another point from the coordinates of this point to create a new point.
	* @param {Point} v The point to be subtracted.
	* @returns {Point} The new point.
	*/
	subtract(v) {
		return new Point(this.x - v.x, this.y = v.y);
	}
}