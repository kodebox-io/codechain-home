const axios = require("axios");
const csv = require("csvtojson");
const fs = require("fs-extra");
const path = require("path");
const request = require("request");

const GOOGLE_DRIVE_URL = "https://drive.google.com/uc?export=view&id=";

const MEMBER_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ_aUvcUpZeAIY7lFMjhGaREos-w_SNjLROq6sLR6Cn9vYTpQ0YmHrtq0epAHyMf2jVQLgC1UC27Ca/pub?output=csv";

const TALK_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtstYc3_eEpblu0zq9tM-E8atlklg1DSw843v_KYC5iLkdDA5DaieHeRVcCiEesLAVV2a2vwe23W6w/pub?gid=0&single=true&output=csv";

const MEDIA_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2MKrl-YFy26ceynEi3xc_j1yY7IQNx7ACTiJCHtlsck0qFdS8VtINhFsGMxLNki39ebYVw0FfJMAL/pub?gid=0&single=true&output=csv";

const EVENT_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLIAdMeJsYl-y5ouV1TnN2PEDf4HRYhXrRVedKpf7ZNNP54WxX1klQm-wOHLJ5f2HoM63jlldSrJ1B/pub?gid=0&single=true&output=csv";

const FAQ_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtmG_TVITt8bLX7FQYyAmLvZkG2AVfsG67P4U22uRzgq7OcvnjHpp4xkG31-2pWcZDQja3Q_O7ZRe2/pub?gid=0&single=true&output=csv";

const TALK_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/talks.json"
);
const MEMBER_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/members.json"
);

const MEMBER_LIST_PHOTO_PATH = path.resolve(
  __dirname,
  "./public/about/memberPhoto"
);

const MEDIA_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/media.json"
);

const FAQ_LIST_FILE_PATH = path.relative(__dirname, "./public/faq.json");

const MEDIA_LIST_PHOTO_PATH = path.resolve(
  __dirname,
  "./public/about/mediaPhoto"
);

const EVENT_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/events.json"
);

const EVENT_LIST_PHOTO_PATH = path.resolve(
  __dirname,
  "./public/about/eventPhoto"
);

function loadEvents() {
  return new Promise((resolve, reject) => {
    axios
      .get(EVENT_LIST_SHEET_PATH)
      .then(result => {
        csv()
          .fromString(result.data)
          .then(resolve);
      })
      .catch(reject);
  });
}

function loadMembers() {
  return new Promise((resolve, reject) => {
    axios
      .get(MEMBER_LIST_SHEET_PATH)
      .then(result => {
        csv()
          .fromString(result.data)
          .then(resolve);
      })
      .catch(reject);
  });
}

function loadTalks() {
  return new Promise((resolve, reject) => {
    axios
      .get(TALK_LIST_SHEET_PATH)
      .then(result => {
        csv()
          .fromString(result.data)
          .then(resolve);
      })
      .catch(reject);
  });
}

function loadMediaList() {
  return new Promise((resolve, reject) => {
    axios
      .get(MEDIA_LIST_SHEET_PATH)
      .then(result => {
        csv()
          .fromString(result.data)
          .then(resolve);
      })
      .catch(reject);
  });
}

function loadFAQList() {
  return new Promise((resolve, reject) => {
    axios
      .get(FAQ_LIST_SHEET_PATH)
      .then(result => {
        csv()
          .fromString(result.data)
          .then(resolve);
      })
      .catch(reject);
  });
}

async function scrapTalks() {
  let newTalks;
  try {
    newTalks = await loadTalks();
  } catch (e) {
    console.error(e);
    return;
  }
  let savedTalks;
  try {
    await fs.ensureFile(TALK_LIST_FILE_PATH);
    savedTalks = await fs.readJson(TALK_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newTalks) !== JSON.stringify(savedTalks)) {
    console.info("Talks are updated!");
    try {
      await fs.writeJson(TALK_LIST_FILE_PATH, newTalks, { spaces: "\t" });
    } catch (e) {
      console.error(e);
    }
  }
}

async function scrapMedia() {
  let newMedia;
  try {
    newMedia = await loadMediaList();
  } catch (e) {
    console.error(e);
    return;
  }
  let savedMedia;
  try {
    await fs.ensureFile(MEDIA_LIST_FILE_PATH);
    await fs.ensureDir(MEDIA_LIST_PHOTO_PATH);
    savedMedia = await fs.readJson(MEDIA_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newMedia) !== JSON.stringify(savedMedia)) {
    console.info("Media list are updated!");
    try {
      await fs.writeJson(MEDIA_LIST_FILE_PATH, newMedia, { spaces: "\t" });
      await Promise.all(
        newMedia.map(media => {
          return downloadImage(
            `${GOOGLE_DRIVE_URL}${media.photo}`,
            `${path.join(MEDIA_LIST_PHOTO_PATH, media.photo)}.png`
          );
        })
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function scrapMembers() {
  let newMembers;
  try {
    newMembers = await loadMembers();
  } catch (e) {
    console.error(e);
    return;
  }
  let savedMember;
  try {
    await fs.ensureFile(MEMBER_LIST_FILE_PATH);
    await fs.ensureDir(MEMBER_LIST_PHOTO_PATH);
    savedMember = await fs.readJson(MEMBER_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newMembers) !== JSON.stringify(savedMember)) {
    console.info("Members are updated!");
    try {
      await fs.writeJson(MEMBER_LIST_FILE_PATH, newMembers, { spaces: "\t" });
      await Promise.all(
        newMembers.map(member => {
          return downloadImage(
            `${GOOGLE_DRIVE_URL}${member.photo}`,
            `${path.join(MEMBER_LIST_PHOTO_PATH, member.photo)}.png`
          );
        })
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function scrapEvents() {
  let newEvents;
  try {
    newEvents = await loadEvents();
  } catch (e) {
    console.error(e);
    return;
  }
  let savedEvents;
  try {
    await fs.ensureFile(EVENT_LIST_FILE_PATH);
    await fs.ensureDir(EVENT_LIST_PHOTO_PATH);
    savedEvents = await fs.readJson(EVENT_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newEvents) !== JSON.stringify(savedEvents)) {
    console.info("Events are updated!");
    try {
      await fs.writeJson(EVENT_LIST_FILE_PATH, newEvents, { spaces: "\t" });
      await Promise.all(
        newEvents.map(event => {
          return downloadImage(
            `${GOOGLE_DRIVE_URL}${event.photo}`,
            `${path.join(EVENT_LIST_PHOTO_PATH, event.photo)}.png`
          );
        })
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function scrapFAQ() {
  let newFaq;
  try {
    newFaq = await loadFAQList();
  } catch (e) {
    console.error(e);
    return;
  }
  let savedFaq;
  try {
    await fs.ensureFile(FAQ_LIST_FILE_PATH);
    savedFaq = await fs.readJson(FAQ_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newFaq) !== JSON.stringify(savedFaq)) {
    console.info("FAQ are updated!");
    try {
      await fs.writeJson(FAQ_LIST_FILE_PATH, newFaq, { spaces: "\t" });
    } catch (e) {
      console.error(e);
    }
  }
}

function downloadImage(url, savePath) {
  return new Promise((resolve, reject) => {
    request.head(url, (error, response, _) => {
      if (error) {
        return reject(error);
      }
      const realImageUrl = response.request.href;
      request(realImageUrl, { encoding: "binary" }, async (error, _, body) => {
        if (error) {
          return reject(error);
        }
        try {
          await fs.writeFile(savePath, body, "binary");
          return resolve();
        } catch (e) {
          return reject(e);
        }
      });
    });
  });
}

async function scrapAll() {
  console.info("Start scraper");
  await scrapTalks();
  await scrapMedia();
  await scrapMembers();
  await scrapEvents();
  await scrapFAQ();
  console.info("Finish scraper");
}

scrapAll();
