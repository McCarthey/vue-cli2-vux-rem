export function calRem() {
	const baseSize = 20
	const scale = document.documentElement.clientWidth / 320
	document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}