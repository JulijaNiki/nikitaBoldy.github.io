$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.navigation').toggleClass('active');
	})
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
const t = [
	"welcome<br>",
	"добро пожаловать<br>"
];

function typeText() {
	let line = 0;
	let count = 0;
	let out = '';
	let htmlOut = document.querySelector('.animate');
	function typeLine() {
		let interval = setTimeout(function () {
			out += t[line][count];
			htmlOut.innerHTML = out + "|";
			count++;
			if (count >= t[line].length) {
				count = 0;
				line++;
				if (line == t.length) {
					clearTimeout(interval);
					htmlOut.innerHTML = out
					return true
				}
			}
			typeLine();
		}, 200);
	}
	typeLine();
}
typeText();
