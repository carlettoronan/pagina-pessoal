// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");

// Função para aplicar o tema no Tailwind
function applyTheme(theme) {
    if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        localStorage.setItem("theme", "dark");
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        root.classList.remove("dark");
        root.classList.add("light");
        localStorage.setItem("theme", "light");
        if (btn) btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Verifica se já existe tema salvo
var savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light"); // Padrão claro
}

// Evento de clique no botão
if (btn) {
    btn.addEventListener("click", function () {
        if (root.classList.contains("dark")) {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
}