import React from 'react';
import './Reports.css';

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
				<span id="reportsHeading">Reports</span>
			</div>
			<hr id="reportsHR" />
			<br />
			<div>Here, you are able to see who took your skill test,</div>
			<div>their results and other details.</div>
			<div id="reportsTable">
				<table>
					<tr>
						<th className="reportsTableCell reportsTableCell11">Show 10 entries</th>
						<th className="reportsTableCell reportsTableCell12">Search Bar</th>
						<th className="reportsTableCell reportsTableCell13">Filter By: Latest</th>
					</tr>
				</table>
				<table>
					<tr>
						<th className="trHR reportsTableCellHeading thTest">Date</th>
						<th className="trHR reportsTableCellHeading thTest">First Name</th>
						<th className="trHR reportsTableCellHeading thTest">Last Name</th>
						<th className="trHR reportsTableCellHeading thTest">Report</th>
						<th className="trHR reportsTableCellHeading thTest">Score</th>
						<th className="trHR reportsTableCellHeading thTest">Time Taken</th>
						<th className="trHR reportsTableCellHeading thTest">Result</th>
					</tr>
					{ReportsDetails.map((ReportsDetail) => {
						return (
							<tr>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.date}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.firstName}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.lastName}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.report}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.score}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.timeTaken}</th>
								<th className="trHR reportsTableCell thTest">{ReportsDetail.result}</th>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
}

export default Reports;
