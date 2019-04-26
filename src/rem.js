export function calRem() {
	const baseSize = 24
	const scale = document.documentElement.clientWidth / 320
	document.documentElement.style.fontSize = baseSize * Math.min(scale, 3) + 'px'
}