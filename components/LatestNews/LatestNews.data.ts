export interface ImageDataI {
  src: string;
  title: string;
};

const palette: ImageDataI = {
  src: 'gallery01',
  title: 'PALETTE'
};

const development: ImageDataI = {
  src: 'gallery02',
  title: 'DEVELOPMENT'
};

const pulse: ImageDataI = {
  src: 'gallery03',
  title: 'PULSE'
};

const keyboard: ImageDataI = {
  src: 'gallery05',
  title: 'KEYBOARD'
};

const board: ImageDataI = {
  src: 'gallery06',
  title: 'BOARD'
};

const technology: ImageDataI = {
  src: 'gallery07',
  title: 'TECHNOLOGY'
};

const information: ImageDataI = {
  src: 'gallery08',
  title: 'INFORMATION'
};

const audio: ImageDataI = {
  src: 'gallery09',
  title: 'AUDIO'
};

const bricks: ImageDataI = {
  src: 'gallery10',
  title: 'BRICKS'
};

const sonar: ImageDataI = {
  src: 'gallery11',
  title: 'SONAR'
};

export enum LatestNewsOptions {
  All = 'ALL',
  Design = 'DESIGN',
  Illustrative = 'ILLUSTRATIVE',
  Brand = 'BRAND',
  Concept = 'CONCEPT'
}

export const filteredGalleryImages = {
  [LatestNewsOptions.All]: [palette,development,pulse,keyboard,board,technology,information,audio,bricks,sonar],
  [LatestNewsOptions.Design]: [pulse,keyboard,board,information,audio,bricks,sonar],
  [LatestNewsOptions.Illustrative]: [palette,development,pulse,board,technology,information,audio, sonar],
  [LatestNewsOptions.Brand]: [palette,pulse,keyboard,board,technology,bricks,sonar],
  [LatestNewsOptions.Concept]: [pulse,keyboard,board,information,audio,bricks],
};