import React from 'react';

import styles from '../src/scss/Reports.module.scss';

const ReportsDetails = [
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  },
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  },
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  },
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  },
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  },
  {
    date: 'Jan 01, 12:00 AM',
    firstName: 'John',
    lastName: 'Doe',
    report: 'link',
    score: '100',
    timeTaken: '70s',
    result: 'Pass'
  }
];

function Reports() {
  return (
    <div>
      <div>
        <span className={styles.reportsHeading}>Reports</span>
      </div>
      <hr className={styles.reportsHR} />
      <br />
      <div>Here, you are able to see who took your skill test,</div>
      <div>their results and other details.</div>
      <div className={styles.reportsTable}>
        <table className="ReportsTable">
          <tr>
            <th
              className={`${styles.reportsTableCell} ${styles.reportsTableCell11}`}>
              Show 10 entries
            </th>
            <th
              className={`${styles.reportsTableCell} ${styles.reportsTableCell12}`}>
              Search Bar
            </th>
            <th
              className={`${styles.reportsTableCell} ${styles.reportsTableCell13}`}>
              Filter By: Latest
            </th>
          </tr>
        </table>
        <table className="ReportsTable">
          <tr>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Date
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              First Name
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Last Name
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Report
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Score
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Time Taken
            </th>
            <th
              className={`${styles.trHR} ${styles.reportsTableCellHeading} ${styles.thTest}`}>
              Result
            </th>
          </tr>
          {ReportsDetails.map((ReportsDetail) => {
            return (
              <tr>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.date}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.firstName}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.lastName}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.report}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.score}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.timeTaken}
                </th>
                <th
                  className={`${styles.trHR} ${styles.reportsTableCell} ${styles.thTest}`}>
                  {ReportsDetail.result}
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Reports;
