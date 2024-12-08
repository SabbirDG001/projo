document.getElementById("session").innerHTML = "2021-22";
document.getElementById("class").innerHTML = "Operating System";


async function fetchStudentData() {
    try {
        const response = await fetch("students.json"); // Fetch the JSON file
        if (!response.ok) {
            throw new Error("Failed to load student data");
        }
        const students = await response.json(); // Parse JSON data
        populateTable(students);
    } catch (error) {
        console.error("Error:", error);
    }
}

function populateTable(students) {
    const tableBody = document.getElementById("attendanceTable");

    // Clear any existing rows
    tableBody.innerHTML = "";

    // Add rows for each student
    students.forEach(student => {
        const row = document.createElement("tr");

        // Serial No cell
        const sCell = document.createElement("td");
        sCell.textContent = student.sNo;
        row.appendChild(sCell);

        // Name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        // ID cell
        const idCell = document.createElement("td");
        idCell.textContent = student.id;
        row.appendChild(idCell);

        // Checkbox cell
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

        // Add the row to the table body
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