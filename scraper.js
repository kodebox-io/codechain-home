const axios = require("axios");
const csv = require("csvtojson");
const fs = require("fs-extra");
const path = require("path");

const MEMBER_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ_aUvcUpZeAIY7lFMjhGaREos-w_SNjLROq6sLR6Cn9vYTpQ0YmHrtq0epAHyMf2jVQLgC1UC27Ca/pub?output=csv";

const TALK_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtstYc3_eEpblu0zq9tM-E8atlklg1DSw843v_KYC5iLkdDA5DaieHeRVcCiEesLAVV2a2vwe23W6w/pub?gid=0&single=true&output=csv";

const MEDIA_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2MKrl-YFy26ceynEi3xc_j1yY7IQNx7ACTiJCHtlsck0qFdS8VtINhFsGMxLNki39ebYVw0FfJMAL/pub?gid=0&single=true&output=csv";

const EVENT_LIST_SHEET_PATH =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLIAdMeJsYl-y5ouV1TnN2PEDf4HRYhXrRVedKpf7ZNNP54WxX1klQm-wOHLJ5f2HoM63jlldSrJ1B/pub?gid=0&single=true&output=csv";

const TALK_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/talks.json"
);
const MEMBER_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/members.json"
);
const MEDIA_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/media.json"
);
const EVENT_LIST_FILE_PATH = path.resolve(
  __dirname,
  "./public/about/events.json"
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
    savedMedia = await fs.readJson(MEDIA_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newMedia) !== JSON.stringify(savedMedia)) {
    console.info("Media list are updated!");
    try {
      await fs.writeJson(MEDIA_LIST_FILE_PATH, newMedia, { spaces: "\t" });
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
    savedMember = await fs.readJson(MEMBER_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newMembers) !== JSON.stringify(savedMember)) {
    console.info("Members are updated!");
    try {
      await fs.writeJson(MEMBER_LIST_FILE_PATH, newMembers, { spaces: "\t" });
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
    savedEvents = await fs.readJson(EVENT_LIST_FILE_PATH, { spaces: "\t" });
  } catch (e) {
    console.error(e);
  }
  if (JSON.stringify(newEvents) !== JSON.stringify(savedEvents)) {
    console.info("Events are updated!");
    try {
      await fs.writeJson(EVENT_LIST_FILE_PATH, newEvents, { spaces: "\t" });
    } catch (e) {
      console.error(e);
    }
  }
}

async function scrapAll() {
  console.info("Start scraper");
  await scrapTalks();
  await scrapMedia();
  await scrapMembers();
  await scrapEvents();
  console.info("Finish scraper");
}

scrapAll();
