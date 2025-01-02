document.getElementById("session").innerHTML = "2021-22";
document.getElementById("class").innerHTML = "Operating System";
document.getElementById("atdcnt").value = 1;


async function fetchStudentData() {
    try {
        const response = await fetch("students.json");
        if (!response.ok) {
            throw new Error("Failed to load student data");
        }
        const students = await response.json();
        populateTable(students);
    } catch (error) {
        console.error("Error:", error);
    }
}

function populateTable(students) {
    const tableBody = document.getElementById("attendanceTable");

    tableBody.innerHTML = "";
    snong = 0;
    students.forEach(student => {
        const row = document.createElement("tr");

        // nocell
        const sCell = document.createElement("td");
        snong = snong + 1;
        sCell.textContent = snong;
        row.appendChild(sCell);

        // name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        // id cell
        const idCell = document.createElement("td");
        idCell.textContent = student.id;
        row.appendChild(idCell);

        // checkbox cell
        const checkboxCell = document.createElement("td");
        checkboxCell.classList.add("tcell");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.id = student.id; // Add roll number for reference
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // Percentage cell
        const percentageCell = document.createElement("td");
        percentageCell.textContent = "100%";
        row.appendChild(percentageCell);

        // add row
        tableBody.appendChild(row);
    });
    document.querySelectorAll(".tcell").forEach(cell => {
        cell.addEventListener("click", function (e) {
            const checkbox = cell.querySelector("input[type='checkbox']");
            if (e.target.tagName !== "INPUT" && checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // populateTable();
    fetchStudentData();
});