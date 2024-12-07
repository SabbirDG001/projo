document.getElementById("session").innerHTML = "2021-22";
document.getElementById("class").innerHTML = "Operating System";

const students = [
    { sNo: 1, name: "Alice Johnson", id: "IT220001" },
    { sNo: 2, name: "Bob Smith", id: "IT220002" },
    { sNo: 3, name: "Charlie Davis", id: "IT220003" },
    { sNo: 4, name: "Diana Martinez", id: "IT220004" },
    { sNo: 5, name: "Ethan Brown", id: "IT220005" },
    { sNo: 6, name: "Fiona Wilson", id: "IT220006" },
    { sNo: 7, name: "George Taylor", id: "IT220007" },
    { sNo: 8, name: "Hannah Moore", id: "IT220008" },
    { sNo: 9, name: "Ian Anderson", id: "IT220009" },
    { sNo: 10, name: "Julia Clark", id: "IT220010" },
    { sNo: 11, name: "Kevin Thomas", id: "IT220011" },
    { sNo: 12, name: "Lily Harris", id: "IT220012" },
    { sNo: 13, name: "Mark Robinson", id: "IT220013" },
    { sNo: 14, name: "Nora Lewis", id: "IT220014" },
    { sNo: 15, name: "Oscar Walker", id: "IT220015" },
    { sNo: 16, name: "Penelope Scott", id: "IT220016" },
    { sNo: 17, name: "Quinn Young", id: "IT220017" },
    { sNo: 18, name: "Ruby Allen", id: "IT220018" },
    { sNo: 19, name: "Samuel King", id: "IT220019" },
    { sNo: 20, name: "Tessa Wright", id: "IT220020" }
];



function populateTable() {
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
}
document.addEventListener("DOMContentLoaded", () => {
    populateTable();
});