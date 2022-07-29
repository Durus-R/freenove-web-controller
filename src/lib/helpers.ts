import { getCssVar } from 'quasar';
import { colors } from './colors';

export function get_color(index: string) {
  console.log('Query: ' + index);
  if (index.includes('_')) {
    return colors[index];
  } else {
    return getCssVar(index) as string;
  }
}
