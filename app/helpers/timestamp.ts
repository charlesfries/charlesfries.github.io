import { helper } from '@ember/component/helper';

export default helper(function timestamp([dateStr]: [string]) {
  const date = new Date(dateStr);
  return `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;
});
