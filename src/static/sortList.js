const sortList = [
  { actual: 'node_id', display: 'Best Match', order: 'asc' },
  { actual: 'full_name', display: 'Full Name (A to Z)', order: 'asc' },
  { actual: 'full_name', display: 'Full Name (Z to A)', order: 'desc' },
  { actual: 'forks', display: 'Least Forks', order: 'asc' },
  { actual: 'forks', display: 'Most Forks', order: 'desc' },
  { actual: 'open_issues', display: 'Least Open Issues', order: 'asc' },
  { actual: 'open_issues', display: 'Most Open Issues', order: 'desc' },
  { actual: 'watchers', display: 'Least Stars', order: 'asc' },
  { actual: 'watchers', display: 'Most Stars', order: 'desc' },
  { actual: 'pushed_at', display: 'Least Recently Created', order: 'asc' },
  { actual: 'pushed_at', display: 'Recently Created', order: 'desc' }
];
export default sortList;
