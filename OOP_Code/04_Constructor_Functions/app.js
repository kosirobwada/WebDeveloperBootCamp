function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function () {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

Color.prototype.hex = function () {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// new 演算子
// 1. 空白のプレーンな JavaScript オブジェクトを作成します。
// 2. 他のオブジェクトを親プロトタイプとすることで、新しく作成されたオブジェクトと他のオブジェクトをリンク（コンストラクターを設定）します。
// 3. ステップ 1 で新しく作成されたオブジェクトを this コンテキストとして渡します。
// 4. 関数がオブジェクトを返さない場合は this を返します。
const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);
