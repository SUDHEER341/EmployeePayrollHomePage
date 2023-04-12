            let employeePayrollList;
            window.addEventListener('DOMContentLoaded', (event) => {
            employeePayrollList = getEmployeePayrollDataFromStorage();
            document.querySelector(".emp-count").textContent = employeePayrollList.length;
            createInnerHtml();
            localStorage.removeItem('editEmp');
        });

        const getEmployeePayrollDataFromStorage = () => {
            return localStorage.getItem('employeePayrollData') ?
                                JSON.parse(localStorage.getItem('employeePayrollData')) : [];
        };

        const createInnerHtml = () => {
        const headerHtml = "<th>ProfilePic</th><th>Name</th><th>Gender</th><th>Department</th>"+
                                    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
            if(employeePayrollList.length == 0) return;
            let innerHTML = `${headerHtml}`;
            for (const employeePayrollData of employeePayrollList) {
                innerHTML = `${innerHTML}
        <tr>
        <td><img class="profile" src="${employeePayrollData.profileImg}" alt="profileImage"></td>
        <td>${employeePayrollData.name}</td>
        <td>${employeePayrollData.gender}</td>
        <td>${employeePayrollData.department}</td>
        <td>${employeePayrollData.salary}</td>
        <td>${employeePayrollData.startDate}</td>
        <td>
        <img name="${employeePayrollData.id}" onclick="remove(this)" 
                src="./assets/icons/delete-black-18dp.svg" alt="delete">
        <img name="${employeePayrollData.id}" onclick="update(this)" 
                src="./assets/icons/create-black-18dp.svg" alt="edit">       
        </td>
        </tr>
        `;
            }
        document.getElementById('table-display').innerHTML = innerHTML;}
        const getDeptHtml = (deptList) => {
            let deptHtml = '';
            for (const dept of deptList) {
                deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
            }
            return deptHtml;
        }

    