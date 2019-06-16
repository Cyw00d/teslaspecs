import { stdout, stderr } from 'process';
import { createWriteStream, mkdirSync } from 'fs';
import { resolve } from 'path';

import axios, { AxiosRequestConfig } from 'axios';
import { emojify } from 'node-emoji';
import * as kleur from 'kleur';

/** 
 * 
 * TYPES & INTERFACES
 * 
 */

type StringArrayOnly = { [key: string]: string[] };
type StringOnly = { [key: string]: string };

interface ImageAttributes {
  car: string;
  motor: string;
  exterior: string;
  wheel: string;
  image: string;
}

/** 
 * 
 * BATCH SETUP
 * 
 */

// Axios call basics
const apiEndpoint: string = 'https://static-assets.tesla.com/configurator/compositor';

// Create folder for this batch
const folderName = Date.now().toString();
mkdirSync(resolve(__dirname, 'assets', folderName));

// Extend with ids where needed to allow in --model flag
const teslaModels: string[] = ['m3'];
const arg = 'm3'; // Temporary

/** 
 * 
 * TESLA OPTIONS
 * 
 */

const carTypes: StringArrayOnly = {
  sr:         ['$MT303', '$DV2W'],
  srp:    ['$MT303', '$DV2W'],
  lr:         ['$MT303', '$DV2W'],
  lrawd:         ['$MT303', '$DV4W'],
  lrp: ['$MT304', '$DV4W', '$SLR1']
};

const motorTypes: StringOnly = {
  RWD: '$DV2W',
  AWD: '$DV4W',
}

const interiorColours: StringOnly = {
  black: '$IN3PB',
  white: '$IN3PW',
}

const exteriorColours: StringOnly = {
  black:            '$PBSB',
  silver:           '$PMNG',
  obsidian_black:   '$PMBL',
  silver_metalic:   '$PMSS',
  blue:             '$PPSB',
  white:            '$PPSW',
  red:              '$PPMR',
}

const wheelTypes: StringOnly = {
  aero18:  '$W38B',
  sport19: '$W39B',
  sport20: '$W32B',
}

const imageViews: StringOnly = {
  normal:     'STUD_3QTR',
  front_side: 'STUD_WHEEL',
  // rear_trunk: 'STUD_REAR',
  full_side:  'STUD_SIDE',
  // interior:   'STUD_SEAT',
}

/** 
 * 
 * SOLID GOLD IMAGE DOWNLOADER ENGINE
 * This might be my best work ever.
 * 
 */

async function downloadImage ({ ...payload }: ImageAttributes) {
  const motor = motorTypes[payload.motor];
  // const interior = interiorColours[payload.interior];
  const exterior = exteriorColours[payload.exterior];
  const wheel = wheelTypes[payload.wheel];
  const view = imageViews[payload.image];
  const fileName = [arg, payload.car, exterior, wheel, view].join('_');

  stdout.write(kleur.green(emojify(`:arrow_down: Initiating download of ${fileName}\n`)));
  const config: AxiosRequestConfig = {
    params: {
      // No touchy
      size: 1441,
      bkba_opt: 1,
      version: 'v0027d201906072123',
      // Also no touchy
      model: arg,
      view,
      options: [
        ...carTypes[payload.car],
        motor,
        exterior,
        wheel,
      ].join(','),
    },
    responseType: 'stream',
  };

  try {
    const result = await axios.get(apiEndpoint, config);

    const fileWriter = createWriteStream(resolve(__dirname, 'assets', folderName, `${fileName}.png`));
    result.data.pipe(fileWriter);

    return new Promise((resolve) => {
      fileWriter.on('finish', () => {
        stdout.write(kleur.green(emojify(`:car: Finished download of ${fileName}\n`)));
        resolve();
      });
      fileWriter.on('error', (e) => {
        throw new Error(e);
      });
    });

  } catch(e) {
    const error: Error = e;
    stderr.write(kleur.red(emojify(`:warning: Problem storing ${fileName}!\n`)));
    stderr.write(kleur.red(`${error.message}\n\n`));
  }
}

/** 
 * 
 * WELCOME TO THE LAYERCAKE, SON.
 * 
 */

const carConfigurations: ImageAttributes[] = [];
if (teslaModels.indexOf(arg) !== -1) {
  Object.keys(carTypes).forEach(car => {
    Object.keys(motorTypes).forEach(motor => {
      // Object.keys(interiorColours).forEach(interior => {
        Object.keys(exteriorColours).forEach(exterior => {
          Object.keys(wheelTypes).forEach(wheel => {
            Object.keys(imageViews).forEach((image) => {
              carConfigurations.push({ car, motor, exterior, wheel, image });
            });
          });
        });
      // });
    });
  });
}

/** 
 * 
 * ASYNC HELPER FUNCTIONS
 * 
 */

async function asyncForEach(array: any[], callback: Function) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const startRun = async () => {
  await asyncForEach(carConfigurations, async (conf: ImageAttributes) => {
    await downloadImage(conf);
  });
  stdout.write(kleur.blue(emojify(':thumbsup: Download completed!\n')));
}

/** 
 * 
 * PARTY MODE.
 * 
 */

stdout.write(kleur.blue(emojify(':tractor: Start getting those Tesla\'s...\n')));
startRun();