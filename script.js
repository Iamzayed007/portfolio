console.log('Its working')

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'default.css'
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}





 

function sendMail(params) {
	var tempParams = {
		to_name: document.getElementById("toName").Value,
		from_name: document.getElementById("fromName").Value,
		message: document.getElementById("msg").Value,
	};
	emailjs.send('service_yp173kn', 'template_dp7boo8', tempParams)
		.then(function (response) {
			console.log("success", response.status);

		}, function (error) {
			console.log('Failed...', error)
		});
}