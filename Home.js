
    window.addEventListener('DOMContentLoaded', (event) => {
        createInnerHtml();
    });

    /* Template Literal ES6 feature */
    const createInnerHtml = () => {   
        const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        const innerHtml = `${headerHtml}
            <tr>
                <td><img class="profile" alt="" width="30" src="./assets/profile-images/Ellipse -2.png"\>
                </td>
                    <td>G Sudheer Kumar</td>
                    <td>Male</td>
                    <td><div class='dept-label'>HR</div>
                        <div class='dept-label'>Engineering</div></td>
                    <td>400000</td>
                    <td>14 Nov 2022</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete"
                            src="./assets/icons/delete-black-18dp.svg" alt=""width="30"\>
                        <img id="1" alt="edit" onclick="update(this)"
                            src="./assets/icons/create-black-18dp.svg" alt=""width="30"\>
                    </td>
                </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
    }