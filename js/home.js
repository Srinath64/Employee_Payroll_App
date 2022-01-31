window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
    `<tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -3.png" alt="profile_img-1"></td>
        <td>Srinath Sivakumar</td>
        <td>Male</td>
        <td>
        <div class="dept-label">Sales</div>
        <div class="dept-label">Finance</div>
        <div class="dept-label">Engineer</div>
        </td>
        <td>&#8377; 3000000</td>
        <td>12 Oct 2021</td>
        <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}