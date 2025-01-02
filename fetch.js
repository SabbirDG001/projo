document.getElementById("submit").addEventListener("click", async () => {
    const date = document.getElementById("date").value;
    const cnt = document.getElementById("atdcnt").value;
    console.log(date);
    console.log(cnt);
    // const students = Array.from(document.querySelectorAll("input[type='checkbox']"))
    //     .filter(checkbox => checkbox.checked)
    //     .map(checkbox => checkbox.dataset.id);
    // console.log(students);
    // try {
    //     const response = await fetch("attendance", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ date, students }),
    //     });
    //     if (!response.ok) {
    //         throw new Error("Failed to save attendance");
    //     }
    //     alert("Attendance saved successfully");
    // } catch (error) {
    //     console.error("Error:", error);
    // }
});