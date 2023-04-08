import { helper } from '@ember/component/helper';

export default helper(function timestamp([dateStr]: [string]) {
  const date = new Date(dateStr);
  const month = date.toLocaleString('default', {
    month: 'long',
  });
  const year = date.getFullYear();
  return `${month} ${year}`;
});
