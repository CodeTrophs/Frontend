import React from 'react';

import style from '../../scss/admin.module.scss';

function Reports() {

  // const heading = ['Date', 'First Name', 'Last Name', 'Report', 'Score', 'Time Taken', 'Result'];
  return (
    <div className={style.adminContainer}>
      <div className={style.container}>
        <div className={style.leftBanner}>
          <h1 className={style.skillHead}><u>Rep</u>orts</h1>
          <p>Here, you are able to see who took your skill test,<br/> their results and other details.</p>
        </div>
      </div>
      <div className={style.tableContainer}>
        <table className={style.reportTable}>
          <thead>
          <tr className={style.reportRow}>
            <th className={style.reportHeading}>First Name</th>
            <th className={style.reportHeading}>Last Name</th>
            <th className={style.reportHeading}>Job Title</th>
            <th className={style.reportHeading}>Twitter</th>
          </tr>
          </thead>
          <tbody>
          <tr className={style.reportRow}>
            <td data-column="First Name">James</td>
            <td data-column="Last Name">Matman</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@james</td>
          </tr>
          <tr className={style.reportRow}>
            <td data-column="First Name">Andor</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Designer</td>
            <td data-column="Twitter">@andornagy</td>
          </tr>
          <tr className={style.reportRow}>
            <td data-column="First Name">Tamas</td>
            <td data-column="Last Name">Biro</td>
            <td data-column="Job Title">Game Tester</td>
            <td data-column="Twitter">@tamas</td>
          </tr>
          <tr className={style.reportRow}>
            <td data-column="First Name">Zoli</td>
            <td data-column="Last Name">Mastah</td>
            <td data-column="Job Title">Developer</td>
            <td data-column="Twitter">@zoli</td>
          </tr>
          <tr className={style.reportRow}>
            <td data-column="First Name">Szabi</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@szabi</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
