import { getCssVar } from 'quasar';
import colorsJson from './colors.json';

export function get_color(index : string) {
    if(index.includes('_'))
      return '#e3760d';
    else return getCssVar(index) as string;

  }

// TODO: Continue here to
// add colors-backup
