/**
 * All facts below were compiled from official NASA sources (NASA.gov mission
 * pages, NASA Science, the NSSDCA lunar catalog, and the Apollo Lunar Surface
 * Journal). Images come from the NASA Image and Video Library (images.nasa.gov).
 * Apollo coordinates are the LRO-derived values published by NSSDCA.
 */

export type Era = 'robotic-precursors' | 'apollo' | 'modern-science'

export type ObjectCategory =
  | 'Science instrument'
  | 'Spacecraft / lander'
  | 'Vehicle'
  | 'Memorial & symbolic'
  | 'Impact site'

export type SourceLink = {
  label: string
  url: string
}

export type LunarObject = {
  id: string
  name: string
  missionId: MissionId
  year: number
  date: string
  lat: number
  lon: number
  site: string
  category: ObjectCategory
  purpose: string
  fact: string
  image: string
  imageAlt: string
  imageCredit: string
  source: SourceLink
}

export type MissionId =
  | 'ranger-7'
  | 'surveyor-1'
  | 'surveyor-3'
  | 'apollo-11'
  | 'apollo-12'
  | 'apollo-14'
  | 'apollo-15'
  | 'apollo-16'
  | 'apollo-17'
  | 'lcross'
  | 'grail'
  | 'ladee'

export type Mission = {
  id: MissionId
  name: string
  year: number
  date: string
  era: Era
  type: string
  crew?: string
  summary: string
  highlights: string[]
  source: SourceLink
}

export const ERAS: { id: Era; label: string; range: string }[] = [
  { id: 'robotic-precursors', label: 'Robotic precursors', range: '1964–1967' },
  { id: 'apollo', label: 'Apollo crewed landings', range: '1969–1972' },
  { id: 'modern-science', label: 'Modern science missions', range: '2009–2014' },
]

export const MISSIONS: Mission[] = [
  {
    id: 'ranger-7',
    name: 'Ranger 7',
    year: 1964,
    date: 'July 31, 1964',
    era: 'robotic-precursors',
    type: 'Robotic impactor',
    summary:
      'Ranger 7 photographed the Moon up close as it flew straight toward the surface, then impacted on the northern rim of the Sea of Clouds.',
    highlights: [
      'Sent back 4,316 images before impact',
      'First U.S. close-up pictures of the lunar surface',
      'Images helped identify safe landing sites for Apollo',
    ],
    source: {
      label: 'NASA Science: Ranger 7',
      url: 'https://science.nasa.gov/mission/ranger-7/',
    },
  },
  {
    id: 'surveyor-1',
    name: 'Surveyor 1',
    year: 1966,
    date: 'June 2, 1966',
    era: 'robotic-precursors',
    type: 'Robotic lander',
    summary:
      'Surveyor 1 was the first U.S. spacecraft to make a soft landing on the Moon, proving the surface could support a lander.',
    highlights: [
      'Landed in the Ocean of Storms on its first try',
      'Touched down about 14 km from its planned target',
      'Returned detailed panoramic views of the surface',
    ],
    source: {
      label: 'NASA Science: Surveyor 1',
      url: 'https://science.nasa.gov/mission/surveyor-1/',
    },
  },
  {
    id: 'surveyor-3',
    name: 'Surveyor 3',
    year: 1967,
    date: 'April 20, 1967 (UT)',
    era: 'robotic-precursors',
    type: 'Robotic lander',
    summary:
      'Surveyor 3 carried a surface sampler that dug trenches in the lunar soil to test how firm the ground was before astronauts arrived.',
    highlights: [
      'Dug four trenches and performed bearing and impact tests',
      'Landed in Oceanus Procellarum (Ocean of Storms)',
      'Later visited by the Apollo 12 crew in 1969',
    ],
    source: {
      label: 'NASA Science: Surveyor 3',
      url: 'https://science.nasa.gov/mission/surveyor-3/',
    },
  },
  {
    id: 'apollo-11',
    name: 'Apollo 11',
    year: 1969,
    date: 'July 20, 1969',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'Neil Armstrong, Michael Collins, Buzz Aldrin',
    summary:
      'The first crewed Moon landing. Armstrong and Aldrin landed the Lunar Module Eagle at Tranquility Base while Collins orbited in the Command Module Columbia.',
    highlights: [
      'First humans to walk on the Moon',
      'Left a laser retroreflector still used by scientists today',
      'Plaque on the descent stage reads "We came in peace for all mankind"',
    ],
    source: {
      label: 'NASA: Apollo 11',
      url: 'https://www.nasa.gov/mission/apollo-11/',
    },
  },
  {
    id: 'apollo-12',
    name: 'Apollo 12',
    year: 1969,
    date: 'November 19, 1969',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'Charles "Pete" Conrad, Richard Gordon, Alan Bean',
    summary:
      'Apollo 12 made a precision landing in the Ocean of Storms, close enough to walk over to the robotic Surveyor 3 lander.',
    highlights: [
      'Demonstrated a pinpoint landing next to Surveyor 3',
      'Crew brought Surveyor 3 parts back to Earth for study',
      'Deployed the first Apollo Lunar Surface Experiments Package (ALSEP)',
    ],
    source: {
      label: 'NASA: Apollo 12',
      url: 'https://www.nasa.gov/mission/apollo-12/',
    },
  },
  {
    id: 'apollo-14',
    name: 'Apollo 14',
    year: 1971,
    date: 'February 5, 1971',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'Alan Shepard, Stuart Roosa, Edgar Mitchell',
    summary:
      'Apollo 14 explored the Fra Mauro highlands, the target originally planned for Apollo 13, and left a laser retroreflector and experiments behind.',
    highlights: [
      'Used a hand-pulled cart, the Modular Equipment Transporter',
      'Deployed a laser ranging retroreflector',
      'Alan Shepard hit two golf balls on the Moon',
    ],
    source: {
      label: 'NASA: Apollo 14',
      url: 'https://www.nasa.gov/mission/apollo-14/',
    },
  },
  {
    id: 'apollo-15',
    name: 'Apollo 15',
    year: 1971,
    date: 'July 30, 1971',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'David Scott, Alfred Worden, James Irwin',
    summary:
      'The first of the extended "J-missions." Apollo 15 landed at Hadley-Apennine and brought the first Lunar Roving Vehicle to the Moon.',
    highlights: [
      'First use of the Lunar Roving Vehicle',
      'Left the largest Apollo laser retroreflector array',
      'Placed the "Fallen Astronaut" memorial and plaque',
    ],
    source: {
      label: 'NASA: Apollo 15',
      url: 'https://www.nasa.gov/mission/apollo-15/',
    },
  },
  {
    id: 'apollo-16',
    name: 'Apollo 16',
    year: 1972,
    date: 'April 21, 1972',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'John Young, Thomas "Ken" Mattingly, Charles Duke',
    summary:
      'Apollo 16 was the first mission to land in the lunar highlands, at the Descartes region, and set up the first telescope operated on the Moon.',
    highlights: [
      'First landing in the lunar highlands',
      'Operated the Far Ultraviolet Camera/Spectrograph',
      'Second mission to use a Lunar Roving Vehicle',
    ],
    source: {
      label: 'NASA: Apollo 16',
      url: 'https://www.nasa.gov/mission/apollo-16/',
    },
  },
  {
    id: 'apollo-17',
    name: 'Apollo 17',
    year: 1972,
    date: 'December 11, 1972',
    era: 'apollo',
    type: 'Crewed landing',
    crew: 'Eugene Cernan, Ronald Evans, Harrison Schmitt',
    summary:
      'The final Apollo landing, in the Taurus-Littrow valley. Geologist Harrison Schmitt became the first scientist to walk on the Moon.',
    highlights: [
      'Last crewed Moon landing of the Apollo program',
      'First professional geologist on the Moon',
      'Left a plaque marking the end of Apollo lunar exploration',
    ],
    source: {
      label: 'NASA: Apollo 17',
      url: 'https://www.nasa.gov/mission/apollo-17/',
    },
  },
  {
    id: 'lcross',
    name: 'LCROSS',
    year: 2009,
    date: 'October 9, 2009',
    era: 'modern-science',
    type: 'Robotic impactor',
    summary:
      'The Lunar Crater Observation and Sensing Satellite launched with the Lunar Reconnaissance Orbiter to find out if water ice exists in a permanently shadowed crater near the south pole.',
    highlights: [
      'Guided its spent Centaur rocket stage into Cabeus crater',
      'The shepherding spacecraft flew through the plume, then impacted too',
      'Detected water in the material thrown up by the impact',
    ],
    source: {
      label: 'NASA Science: LCROSS',
      url: 'https://science.nasa.gov/mission/lcross/',
    },
  },
  {
    id: 'grail',
    name: 'GRAIL (Ebb & Flow)',
    year: 2012,
    date: 'December 17, 2012',
    era: 'modern-science',
    type: 'Twin orbiters (planned impact)',
    summary:
      'Twin spacecraft Ebb and Flow flew in formation to map the Moon’s gravity field in high detail, then were deliberately crashed near the north pole.',
    highlights: [
      'Produced a high-resolution gravity map of the Moon',
      'Helped explain the origin of mass concentrations (mascons)',
      'Impact site named in honor of astronaut Sally K. Ride',
    ],
    source: {
      label: 'NASA Science: GRAIL',
      url: 'https://science.nasa.gov/mission/grail/',
    },
  },
  {
    id: 'ladee',
    name: 'LADEE',
    year: 2014,
    date: 'April 18, 2014 (UTC)',
    era: 'modern-science',
    type: 'Orbiter (planned impact)',
    summary:
      'The Lunar Atmosphere and Dust Environment Explorer studied the Moon’s extremely thin atmosphere (exosphere) and dust before a planned impact on the far side.',
    highlights: [
      'Studied the lunar exosphere and dust environment',
      'Flew very low orbits near the end of its mission',
      'Ended with a planned impact on the lunar far side',
    ],
    source: {
      label: 'NASA Science: LADEE',
      url: 'https://science.nasa.gov/mission/ladee/',
    },
  },
]

export const LUNAR_OBJECTS: LunarObject[] = [
  {
    id: 'ranger-7-impact',
    name: 'Ranger 7 Impact Site',
    missionId: 'ranger-7',
    year: 1964,
    date: 'July 31, 1964',
    lat: -10.35,
    lon: -20.58,
    site: 'Mare Cognitum, northern rim of the Sea of Clouds',
    category: 'Impact site',
    purpose:
      'Ranger 7 was designed to take pictures all the way down to impact, giving scientists their first close look at what the lunar surface was like.',
    fact: 'The area where it crashed was later named Mare Cognitum, meaning "the Sea that has become known."',
    image: '/images/ranger7-first.jpg',
    imageAlt:
      'Grainy black-and-white image of the lunar surface, the first taken by a U.S. spacecraft.',
    imageCredit: 'NASA/JPL · PIA02975',
    source: {
      label: 'NASA Science: Ranger 7',
      url: 'https://science.nasa.gov/mission/ranger-7/',
    },
  },
  {
    id: 'surveyor-1-lander',
    name: 'Surveyor 1 Lander',
    missionId: 'surveyor-1',
    year: 1966,
    date: 'June 2, 1966',
    lat: -2.46,
    lon: -43.32,
    site: 'Oceanus Procellarum (Ocean of Storms)',
    category: 'Spacecraft / lander',
    purpose:
      'A robotic lander that tested the technology for a controlled soft landing and photographed the surface to help plan Apollo.',
    fact: 'It was NASA’s first soft landing on the Moon, achieved on the very first attempt.',
    image: '/images/surveyor1-shadow.jpg',
    imageAlt:
      'Surveyor 1 photograph showing its own shadow cast across the lunar surface.',
    imageCredit: 'NASA/JPL · PIA02976',
    source: {
      label: 'NASA Science: Surveyor 1',
      url: 'https://science.nasa.gov/mission/surveyor-1/',
    },
  },
  {
    id: 'surveyor-3-lander',
    name: 'Surveyor 3 Lander',
    missionId: 'surveyor-3',
    year: 1967,
    date: 'April 20, 1967 (UT)',
    lat: -3.02,
    lon: -23.42,
    site: 'Oceanus Procellarum, inside a small crater',
    category: 'Spacecraft / lander',
    purpose:
      'Carried a mechanical scoop that dug into the soil so engineers could learn how strong the surface was for crewed landers.',
    fact: 'In 1969 the Apollo 12 astronauts walked to Surveyor 3 and removed its TV camera and other parts to study how materials change after years on the Moon.',
    image: '/images/apollo12-surveyor3.jpg',
    imageAlt:
      'Astronaut Alan Bean beside the Surveyor 3 spacecraft with the Apollo 12 Lunar Module in the background.',
    imageCredit: 'NASA · AS12-48-7134',
    source: {
      label: 'NASA Science: Surveyor 3',
      url: 'https://science.nasa.gov/mission/surveyor-3/',
    },
  },
  {
    id: 'apollo-11-lrrr',
    name: 'Apollo 11 Laser Ranging Retroreflector',
    missionId: 'apollo-11',
    year: 1969,
    date: 'July 21, 1969',
    lat: 0.67345,
    lon: 23.47307,
    site: 'Tranquility Base, Mare Tranquillitatis',
    category: 'Science instrument',
    purpose:
      'A panel of corner-cube reflectors that bounces laser pulses fired from Earth straight back, letting scientists measure the Earth–Moon distance very precisely.',
    fact: 'It still works today. Laser measurements using these reflectors show the Moon is slowly moving away from Earth, about 3.8 cm per year.',
    image: '/images/apollo11-easep.jpg',
    imageAlt:
      'Buzz Aldrin standing beside the Early Apollo Scientific Experiments Package on the lunar surface.',
    imageCredit: 'NASA · AS11-40-5948',
    source: {
      label: 'NASA: Apollo 11',
      url: 'https://www.nasa.gov/mission/apollo-11/',
    },
  },
  {
    id: 'apollo-11-plaque',
    name: 'Eagle Descent Stage & Plaque',
    missionId: 'apollo-11',
    year: 1969,
    date: 'July 20, 1969',
    lat: 0.67416,
    lon: 23.47314,
    site: 'Tranquility Base, Mare Tranquillitatis',
    category: 'Memorial & symbolic',
    purpose:
      'The lower half of the Lunar Module Eagle served as a launch pad for the ascent stage and stayed behind. A plaque is attached to its ladder strut.',
    fact: 'The plaque reads: "Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind."',
    image: '/images/apollo11-plaque.jpg',
    imageAlt:
      'Close-up of the stainless steel plaque attached to the Apollo 11 Lunar Module ladder.',
    imageCredit: 'NASA · AS11-40-5899',
    source: {
      label: 'NASA: Apollo 11',
      url: 'https://www.nasa.gov/mission/apollo-11/',
    },
  },
  {
    id: 'apollo-12-intrepid',
    name: 'Intrepid Descent Stage & ALSEP',
    missionId: 'apollo-12',
    year: 1969,
    date: 'November 19, 1969',
    lat: -3.01239,
    lon: -23.42157,
    site: 'Oceanus Procellarum, about 180 m from Surveyor 3',
    category: 'Science instrument',
    purpose:
      'The descent stage of Lunar Module Intrepid stayed behind along with the first Apollo Lunar Surface Experiments Package, a set of instruments that sent data to Earth for years.',
    fact: 'The crew landed so precisely that they could walk to Surveyor 3, which had been sitting on the Moon since 1967.',
    image: '/images/apollo12-surveyor3.jpg',
    imageAlt:
      'The Apollo 12 Lunar Module Intrepid in the background behind the Surveyor 3 spacecraft.',
    imageCredit: 'NASA · AS12-48-7134',
    source: {
      label: 'NASA: Apollo 12',
      url: 'https://www.nasa.gov/mission/apollo-12/',
    },
  },
  {
    id: 'apollo-14-golf',
    name: 'Alan Shepard’s Golf Balls',
    missionId: 'apollo-14',
    year: 1971,
    date: 'February 6, 1971',
    lat: -3.64589,
    lon: -17.47194,
    site: 'Fra Mauro highlands',
    category: 'Memorial & symbolic',
    purpose:
      'At the end of his second moonwalk, Shepard attached a golf club head to a sample-collection tool handle and hit golf balls for the TV camera.',
    fact: 'The balls, along with a "javelin" thrown by Edgar Mitchell, are still resting near the Apollo 14 landing site.',
    image: '/images/apollo14-golf.jpg',
    imageAlt:
      'A golf ball and a rod-shaped "javelin" lying on the grey lunar surface at the Apollo 14 site.',
    imageCredit: 'NASA · AS14-66-9337',
    source: {
      label: 'NASA: Apollo 14',
      url: 'https://www.nasa.gov/mission/apollo-14/',
    },
  },
  {
    id: 'apollo-15-lrv',
    name: 'Apollo 15 Lunar Roving Vehicle',
    missionId: 'apollo-15',
    year: 1971,
    date: 'July 31, 1971',
    lat: 26.13239,
    lon: 3.6333,
    site: 'Hadley-Apennine',
    category: 'Vehicle',
    purpose:
      'An electric, battery-powered car that let astronauts travel much farther from the Lunar Module and carry more tools and samples.',
    fact: 'It was the first car driven on the Moon. The rovers from Apollo 15, 16, and 17 were all left behind.',
    image: '/images/apollo15-rover.jpg',
    imageAlt:
      'James Irwin working at the Lunar Roving Vehicle with Mount Hadley in the background.',
    imageCredit: 'NASA · AS15-86-11603',
    source: {
      label: 'NASA: Apollo 15',
      url: 'https://www.nasa.gov/mission/apollo-15/',
    },
  },
  {
    id: 'apollo-15-lrrr',
    name: 'Apollo 15 Laser Ranging Retroreflector',
    missionId: 'apollo-15',
    year: 1971,
    date: 'July 31, 1971',
    lat: 26.13341,
    lon: 3.6285,
    site: 'Hadley-Apennine',
    category: 'Science instrument',
    purpose:
      'A larger version of the Apollo 11 reflector, with 300 corner cubes, making it easier for observatories on Earth to detect returning laser light.',
    fact: 'NASA’s Lunar Reconnaissance Orbiter has photographed the reflector, turning it into a precisely known reference point on the Moon.',
    image: '/images/lrr-apollo15.jpg',
    imageAlt:
      'Orbital view of the Apollo 15 landing site highlighting the location of the laser retroreflector.',
    imageCredit: 'NASA · PIA13037',
    source: {
      label: 'NASA Image Library: PIA13037',
      url: 'https://images.nasa.gov/details/PIA13037',
    },
  },
  {
    id: 'apollo-15-memorial',
    name: 'Fallen Astronaut Memorial',
    missionId: 'apollo-15',
    year: 1971,
    date: 'August 1971',
    lat: 26.13239,
    lon: 3.6333,
    site: 'Hadley-Apennine',
    category: 'Memorial & symbolic',
    purpose:
      'A small aluminum figure and a plaque honoring astronauts and cosmonauts who died in the advancement of space exploration.',
    fact: 'The plaque lists 14 names of American astronauts and Soviet cosmonauts.',
    image: '/images/apollo15-plaque.jpg',
    imageAlt:
      'Close-up of the Fallen Astronaut figurine and commemorative plaque lying on the lunar soil.',
    imageCredit: 'NASA · AS15-88-11894',
    source: {
      label: 'NASA Image Library: AS15-88-11894',
      url: 'https://images.nasa.gov/details/as15-88-11894',
    },
  },
  {
    id: 'apollo-16-uv-camera',
    name: 'Far Ultraviolet Camera/Spectrograph',
    missionId: 'apollo-16',
    year: 1972,
    date: 'April 21, 1972',
    lat: -8.9734,
    lon: 15.5011,
    site: 'Descartes Highlands',
    category: 'Science instrument',
    purpose:
      'A gold-plated telescope, designed by George Carruthers of the U.S. Naval Research Laboratory, that captured ultraviolet images of Earth’s upper atmosphere, stars, and galaxies.',
    fact: 'It was the first astronomical observatory operated on the Moon. The film came home, but the telescope stayed behind.',
    image: '/images/apollo16-uvcamera.jpg',
    imageAlt:
      'John Young standing in the shadow of the Lunar Module behind the gold-colored ultraviolet camera.',
    imageCredit: 'NASA · AS16-114-18439',
    source: {
      label: 'NASA: Apollo 16',
      url: 'https://www.nasa.gov/mission/apollo-16/',
    },
  },
  {
    id: 'apollo-17-lrv',
    name: 'Apollo 17 Lunar Roving Vehicle',
    missionId: 'apollo-17',
    year: 1972,
    date: 'December 11, 1972',
    lat: 20.1911,
    lon: 30.7723,
    site: 'Taurus-Littrow valley',
    category: 'Vehicle',
    purpose:
      'Carried Cernan and Schmitt to geology stations across the valley on the longest traverses of the Apollo program.',
    fact: 'When a fender extension broke off, the crew built a replacement from laminated maps, duct tape, and clamps.',
    image: '/images/apollo17-rover.jpg',
    imageAlt:
      'Eugene Cernan driving the Lunar Roving Vehicle across the Taurus-Littrow valley.',
    imageCredit: 'NASA · AS17-147-22526',
    source: {
      label: 'NASA: Apollo 17',
      url: 'https://www.nasa.gov/mission/apollo-17/',
    },
  },
  {
    id: 'apollo-17-plaque',
    name: 'Challenger Descent Stage & Plaque',
    missionId: 'apollo-17',
    year: 1972,
    date: 'December 14, 1972',
    lat: 20.1911,
    lon: 30.7723,
    site: 'Taurus-Littrow valley',
    category: 'Memorial & symbolic',
    purpose:
      'The descent stage of Lunar Module Challenger, with a plaque marking the completion of the Apollo program’s lunar surface exploration.',
    fact: 'The plaque reads: "Here man completed his first explorations of the Moon, December 1972 A.D. May the spirit of peace in which we came be reflected in the lives of all mankind."',
    image: '/images/apollo17-plaque.jpg',
    imageAlt: 'Photographic replica of the plaque left at the Apollo 17 landing site.',
    imageCredit: 'NASA · S72-55169 (replica)',
    source: {
      label: 'NASA Image Library: S72-55169',
      url: 'https://images.nasa.gov/details/S72-55169',
    },
  },
  {
    id: 'lcross-centaur',
    name: 'LCROSS & Centaur Impact Site',
    missionId: 'lcross',
    year: 2009,
    date: 'October 9, 2009',
    lat: -84.68,
    lon: -48.7,
    site: 'Cabeus crater, near the lunar south pole',
    category: 'Impact site',
    purpose:
      'The spent Centaur upper stage was aimed into a permanently shadowed crater to kick up material that the LCROSS spacecraft could analyze.',
    fact: 'LCROSS detected water in the debris plume, strong evidence that ice exists in permanently shadowed polar craters.',
    image: '/images/lcross-spacecraft.jpg',
    imageAlt:
      'The LCROSS spacecraft in a NASA Ames clean room before launch.',
    imageCredit: 'NASA Ames · ARC-2008-ACD07-0073-451',
    source: {
      label: 'NASA Science: LCROSS',
      url: 'https://science.nasa.gov/mission/lcross/',
    },
  },
  {
    id: 'grail-sally-ride',
    name: 'GRAIL Impact Site (Sally K. Ride)',
    missionId: 'grail',
    year: 2012,
    date: 'December 17, 2012',
    lat: 75.62,
    lon: -26.63,
    site: 'Mountain near Goldschmidt crater, near the north pole',
    category: 'Impact site',
    purpose:
      'At the end of their gravity-mapping mission, Ebb and Flow were steered into a mountain so they would not crash near historic sites.',
    fact: 'NASA named the impact site after Sally K. Ride, America’s first woman in space and a member of the GRAIL team.',
    image: '/images/grail-final.jpg',
    imageAlt:
      'Graphic showing the final flight paths of the GRAIL spacecraft Ebb and Flow toward the lunar surface.',
    imageCredit: 'NASA/JPL-Caltech · PIA16493',
    source: {
      label: 'NASA Science: GRAIL',
      url: 'https://science.nasa.gov/mission/grail/',
    },
  },
  {
    id: 'ladee-impact',
    name: 'LADEE Impact Site',
    missionId: 'ladee',
    year: 2014,
    date: 'April 18, 2014 (UTC)',
    lat: 11.84,
    lon: 93.25,
    site: 'Eastern rim of Sundman V crater, lunar far side',
    category: 'Impact site',
    purpose:
      'LADEE was deliberately flown into the far side after it finished studying the exosphere and ran low on fuel.',
    fact: 'The Lunar Reconnaissance Orbiter later located and photographed LADEE’s small impact crater.',
    image: '/images/ladee-concept.jpg',
    imageAlt: 'Artist concept of the LADEE spacecraft approaching the Moon.',
    imageCredit: 'NASA Ames · PIA18160 (artist concept)',
    source: {
      label: 'NASA Science: LADEE',
      url: 'https://science.nasa.gov/mission/ladee/',
    },
  },
]

export const getMission = (id: MissionId) =>
  MISSIONS.find((mission) => mission.id === id) as Mission

export const formatCoordinates = (lat: number, lon: number) => {
  const latLabel = `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? 'N' : 'S'}`
  const lonLabel = `${Math.abs(lon).toFixed(2)}°${lon >= 0 ? 'E' : 'W'}`
  return `${latLabel}, ${lonLabel}`
}

export type QuizQuestion = {
  question: string
  options: string[]
  answerIndex: number
  explanation: string
}

export const QUIZ: QuizQuestion[] = [
  {
    question:
      'Which mission left the first laser retroreflector on the Moon, still used to measure the Earth–Moon distance?',
    options: ['Apollo 11', 'Apollo 14', 'Apollo 17', 'Surveyor 1'],
    answerIndex: 0,
    explanation:
      'Apollo 11 deployed the first Laser Ranging Retroreflector at Tranquility Base in July 1969.',
  },
  {
    question: 'The Apollo 12 astronauts walked over to which robotic spacecraft?',
    options: ['Ranger 7', 'Surveyor 3', 'Surveyor 1', 'LADEE'],
    answerIndex: 1,
    explanation:
      'Apollo 12 landed close to Surveyor 3 and brought pieces of it, including its TV camera, back to Earth.',
  },
  {
    question: 'Which astronaut hit golf balls on the Moon?',
    options: ['Neil Armstrong', 'Eugene Cernan', 'Alan Shepard', 'Charles Duke'],
    answerIndex: 2,
    explanation:
      'Apollo 14 commander Alan Shepard hit two golf balls at Fra Mauro in February 1971.',
  },
  {
    question: 'Which mission brought the first Lunar Roving Vehicle to the Moon?',
    options: ['Apollo 12', 'Apollo 15', 'Apollo 16', 'Apollo 17'],
    answerIndex: 1,
    explanation:
      'Apollo 15 (1971) was the first mission to use the Lunar Roving Vehicle, at Hadley-Apennine.',
  },
  {
    question:
      'When LCROSS and its Centaur rocket stage struck Cabeus crater in 2009, what did scientists detect?',
    options: ['Ancient fossils', 'Liquid lava', 'Water', 'Oxygen gas clouds'],
    answerIndex: 2,
    explanation:
      'LCROSS detected water in the debris plume, evidence of ice in permanently shadowed polar craters.',
  },
]

export type SourceGroup = {
  title: string
  links: (SourceLink & { note: string })[]
}

export const SOURCES: SourceGroup[] = [
  {
    title: 'Reference catalogs & data',
    links: [
      {
        label: 'NSSDCA: Apollo Landing Site Coordinates',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html',
        note: 'LRO-derived positions of Apollo lunar modules and experiments used on the map.',
      },
      {
        label: 'NSSDCA: Apollo Program',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
        note: 'NASA Space Science Data Coordinated Archive overview of every Apollo mission.',
      },
      {
        label: 'Apollo Lunar Surface Journal',
        url: 'https://www.nasa.gov/history/alsj/',
        note: 'Detailed, annotated record of every Apollo moonwalk, hosted by NASA History.',
      },
      {
        label: 'NASA SVS: CGI Moon Kit',
        url: 'https://svs.gsfc.nasa.gov/4720',
        note: 'LRO Camera color map used as the base for the interactive Moon map.',
      },
      {
        label: 'NASA Image and Video Library',
        url: 'https://images.nasa.gov/',
        note: 'Source of every photograph on this site. Each image lists its NASA ID.',
      },
    ],
  },
  {
    title: 'Apollo missions',
    links: MISSIONS.filter((m) => m.era === 'apollo').map((m) => ({
      ...m.source,
      note: `${m.date} · ${m.crew}`,
    })),
  },
  {
    title: 'Robotic & science missions',
    links: [
      ...MISSIONS.filter((m) => m.era !== 'apollo').map((m) => ({
        ...m.source,
        note: `${m.type} · ${m.date}`,
      })),
      {
        label: 'NASA Science: Lunar Reconnaissance Orbiter',
        url: 'https://science.nasa.gov/mission/lro/',
        note: 'Orbiter that has photographed Apollo sites and impact craters from lunar orbit.',
      },
    ],
  },
]
