export class ColorTransform {
	public redMultiplier: number;
	public greenMultiplier: number;
	public blueMultiplier: number;
	public alphaMultiplier: number;
	public redOffset: number;
	public greenOffset: number;
	public blueOffset: number;
	public alphaOffset: number;
	constructor(redMultiplier?, greenMultiplier?, blueMultiplier?, alphaMultiplier?, redOffset?, greenOffset?, blueOffset?, alphaOffset?) {
		this.redMultiplier = redMultiplier == undefined ? 1 : redMultiplier;
		this.greenMultiplier = greenMultiplier == undefined ? 1 : greenMultiplier;
		this.blueMultiplier = blueMultiplier == undefined ? 1 : blueMultiplier;
		this.alphaMultiplier = alphaMultiplier == undefined ? 1 : alphaMultiplier;
		this.redOffset = redOffset || 0;
		this.greenOffset = greenOffset || 0;
		this.blueOffset = blueOffset || 0;
		this.alphaOffset = alphaOffset || 0;
	}
}