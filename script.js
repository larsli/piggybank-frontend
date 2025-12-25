async function updateBalance(child) {
    const res = await fetch(`${https://piggybank-backend-kidl.onrender.com}/balance/${child}`);
    const data = await res.json();

    if (child === "child1")
        document.getElementById("balance1").innerText = data.balance;
    else
        document.getElementById("balance2").innerText = data.balance;
}

async function deposit(child) {
    const amount = Number(document.getElementById(child === "child1" ? "amount1" : "amount2").value);

    await fetch(`${BASE_URL}/deposit/${child}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({amount})
    });

    updateBalance(child);
}

async function withdraw(child) {
    const amount = Number(document.getElementById(child === "child1" ? "amount1" : "amount2").value);

    await fetch(`${BASE_URL}/withdraw/${child}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({amount})
    });

    updateBalance(child);
}

updateBalance("child1");
updateBalance("child2");
