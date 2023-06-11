function showMenu() {
	if (menu.className === "header-menu") {
		menu.className += " show";
		main.classList.add("blur");
		footer.classList.add("blur");
		burger.style.position = "absolute";
		burger.style.zIndex = 11;
	} else {
		menu.className = "header-menu";
		main.classList.remove("blur");
		footer.classList.remove("blur");
		burger.style.position = "";
	}
}
